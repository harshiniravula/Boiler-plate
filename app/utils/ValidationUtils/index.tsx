export function InputValidation(value: string, pattern: RegExp) {
  if (!value) {
    return {
      hasError: true,
      errorMessage: 'input value is empty',
    };
  } else if (!value.match(pattern)) {
    return {
      hasError: true,
      errorMessage: 'invalid input',
    };
  }
  return {
    hasError: false,
    errorMessage: '',
  };
}
