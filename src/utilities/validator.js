import { animateScroll } from 'react-scroll/modules';

export const validate = (source, scroll = true) => {
  let isValidEntity = true;
  let scrollOffset = 0;
  const walker = (target) => {
    let valid = true;
    if (target && typeof target !== 'function') {
      if (typeof target.validate === 'function') {
        const tempValid = target.validate();
        if (valid && !tempValid) {
          valid = tempValid;
          if (scroll && !valid && target.inputRef.current) {
            const { offsetTop } = target.inputRef.current;
            const offset = offsetTop - window.screen.height / 2;
            if (scrollOffset === 0) {
              scrollOffset = offset;
            } else if (offset < scrollOffset) {
              scrollOffset = offset;
            }
            isValidEntity = valid;
          }
        }
      } else if (Array.isArray(target)) {
        target.forEach((element) => {
          const tempValid = walker(element);
          if (valid && !tempValid) {
            valid = tempValid;
          }
        });
      } else {
        Object.keys(target).forEach((key) => {
          const tempValid = walker(target[key]);
          if (valid && !tempValid) {
            valid = tempValid;
          }
        });
      }
    }
    return valid;
  };

  const result = walker(source);

  if (!isValidEntity && scrollOffset > 0) {
    animateScroll.scrollTo(scrollOffset, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  }
  return result;
};
