export const validateMessages = {
  required: "Please input ${label} !",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
    date: "Choose your birthdate!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const validateNumber = (
  rule: any,
  value: number,
  callback: (arg0: string | undefined) => void
) => {
  if (value < 0) {
    callback("Please input value min is 0");
  }
};
