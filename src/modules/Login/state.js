import { useInput } from '../../utilities/useInput';
import { Input } from '../../utilities/input';
import { tel as telValidator } from '../../utilities/validators';

export const useLogin = () => {
  const tel = useInput(
    new Input().setPlaceholder('Логин:').addValidator(telValidator)
  );
  const password = useInput(new Input().setPlaceholder('Пароль:'));

  return {
    tel,
    password,
    reset: () => {
      tel.setValue('');
      tel.setError(false);
      password.setValue('');
      password.setError(false);
    },
  };
};