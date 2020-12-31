import { useState, useRef, useCallback } from 'react';
import { animateScroll } from 'react-scroll/modules';

export const useInput = (input) => {
  const [value, setValue] = useState(input.value);
  const [label, setLabel] = useState(input.label);
  const [helperText, setHelperText] = useState(input.helperText);
  // const [placeholder, setPlaceholder] = useState(input.required ? `${input.placeholder} *` : input.placeholder)
  const [placeholder, setPlaceholder] = useState(input.placeholder);
  const [error, setError] = useState(input.error);
  const [required, setRequired] = useState(input.required);
  const [readOnly, setReadOnly] = useState(input.readOnly);
  const [disabled, setDisabled] = useState(input.readOnly);
  const [disableUnderline, setDisableUnderline] = useState(input.readOnly);
  const [validators, setValidators] = useState(input.validators);
  const [theme, setTheme] = useState(input.theme);
  const [labelTheme, setLabelTheme] = useState(input.labelTheme);
  const inputRef = useRef(null);
  const validate = (newValue) => {
    if (required) {
      const err = Boolean(
        Array.isArray(validators) &&
          validators.length > 0 &&
          validators.find(
            (validator) =>
              typeof validator === 'function' && !validator(newValue)
          )
      );
      setError(err);
      return !err;
    }
    return true;
  };
  const checkAndSet = (newValue) => {
    const valid = validate(newValue);
    setValue(newValue);
    setReadOnly(valid);
    setDisabled(valid);
    setDisableUnderline(valid);
    setRequired(!valid);
  };
  const dispatch = useCallback(
    (newValue, newError) => {
      if (typeof input.dispatch === 'function') {
        input.dispatch({
          inputRef,
          value: newValue === undefined ? value : newValue,
          label,
          error: newError === undefined ? value : error,
          readOnly,
          disableUnderline,
          disabled,
          theme,
          labelTheme,
          setValue,
          setError,
          validate: () => validate(newValue),
        });
      }
      // eslint-disable-next-line
    },
    [input]
  );
  return {
    inputRef,
    value,
    setValue: useCallback((state) => {
      setValue(state);
      return this;
    }, []),
    label,
    setLabel: useCallback((state) => {
      setLabel(state);
      return this;
    }, []),
    setHelperText: useCallback((state) => {
      setHelperText(state);
      return this;
    }, []),
    placeholder,
    setPlaceholder,
    error,
    setError: useCallback((state) => {
      setError(state);
      return this;
    }, []),
    required,
    setRequired: useCallback((state) => {
      setRequired(state);
      return this;
    }, []),
    readOnly,
    setReadOnly: useCallback((state) => {
      setReadOnly(state);
      return this;
    }, []),
    setDisabled: useCallback((state) => {
      setDisabled(state);
      return this;
    }, []),
    setDisableUnderline: useCallback((state) => {
      setDisableUnderline(state);
      return this;
    }, []),
    validators,
    setValidators,
    theme,
    setTheme: useCallback((state) => {
      setTheme(state);
      return this;
    }, []),
    labelTheme,
    setLabelTheme: useCallback((state) => {
      setLabelTheme(state);
      return this;
    }, []),
    reset: useCallback(() => {
      setValue(input.value);
      setLabel(input.label);
      setHelperText('');
      setError(input.error);
      setRequired(input.required);
      setReadOnly(input.readOnly);
      setValidators(input.validators);
      setTheme(input.theme);
      setLabelTheme(input.labelTheme);
      // eslint-disable-next-line
    }, []),
    validate: () => validate(value),
    checkAndSet,
    scroll: useCallback(() => {
      animateScroll.scrollTo(
        inputRef.current.offsetTop - window.screen.height / 2,
        {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        }
      );
    }, [inputRef]),
    dispatch,
    relatedParameters: input.relatedParameters,
    bind: {
      inputRef,
      value,
      label,
      helperText,
      placeholder,
      error,
      readOnly,
      disableUnderline,
      disabled,
      theme,
      labelTheme,
      required,
      onChange: useCallback(
        (event) => {
          let newError = error;
          let newValue = value;
          if (error && event.target.value) {
            newError = false;
            setError(newError);
            setHelperText('');
          }
          newValue =
            typeof input.modifier === 'function'
              ? input.modifier(event.target.value)
              : event.target.value;
          setValue(newValue);
          if (typeof input.onChange === 'function') {
            input.onChange(newValue);
          }
          dispatch(newValue, newError);
          // eslint-disable-next-line
        },
        [error, value]
      ),
    },
  };
};
