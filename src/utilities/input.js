import { notEmpty } from './validators';

export class Input {
  constructor(initialValue = '') {
    this.value = initialValue;
    this.label = '';
    this.helperText = '';
    this.placeholder = '';
    this.error = false;
    this.required = true;
    this.readOnly = false;
    this.validators = [notEmpty];
    this.theme = undefined;
    this.labelTheme = undefined;
    this.modifier = null;
    this.onChange = null;
    this.dispatch = null;
    this.relatedParameters = [];
  }

  setValue(value) {
    this.value = value;
    return this;
  }

  setLabel(label) {
    this.label = label;
    return this;
  }

  setHelperText(helperText) {
    this.helperText = helperText;
    return this;
  }

  setPlaceholder(placeholder) {
    this.placeholder = placeholder;
    return this;
  }

  setError(error) {
    this.error = error;
    return this;
  }

  setRequired(required) {
    this.required = required;
    return this;
  }

  setReadOnly(readOnly) {
    this.readOnly = readOnly;
    return this;
  }

  setDisabled(disabled) {
    this.readOnly = disabled;
    return this;
  }

  addValidator(validator) {
    this.validators = this.validators.concat(validator);
    return this;
  }

  removeValidator(validator) {
    this.validators = this.validators.filter((f) => f !== validator);
  }

  setValidators(validators) {
    this.validators = Array.isArray(validators) ? validators : [validators];
    return this;
  }

  resetValidators() {
    this.setValidators([]);
  }

  setTheme(theme) {
    this.theme = theme;
    return this;
  }

  setLabelTheme(labelTheme) {
    this.labelTheme = labelTheme;
    return this;
  }

  setModifier(modifier) {
    this.modifier = modifier;
    return this;
  }

  setOnChange(onChange) {
    this.onChange = onChange;
    return this;
  }

  setDispatch(dispatch) {
    this.dispatch = dispatch;
    return this;
  }

  setRelatedParameters(relation) {
    this.relatedParameters =
      typeof relation === 'string'
        ? [relation]
        : Array.isArray(relation) &&
          relation.every((e) => typeof e === 'string')
        ? relation
        : [];

    return this;
  }
}
