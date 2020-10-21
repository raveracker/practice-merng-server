module.exports.validateRegisterInput = (
  userName,
  email,
  password,
  confirmPassword
) => {
  const errors = {};
  if (userName.trim() === "") {
    errors.userName = "Username must not be empty.";
  }
  if (email.trim() === "") {
    errors.email = "Email must not be empty.";
  } else {
    const regEx = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/;
    if (email.match(regEx)) {
      errors.email = "Email must be a valid email address";
    }
  }
  if (password === "") {
    errors.password = "Password must not be empty";
  } else if (password !== confirmPassword) {
    errors.confirmPassword = "Password must match";
  }

  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};

module.exports.validateLoginInput = (userName, password) => {
  const errors = {};
  if (userName.trim() === "") {
    errors.userName = "Username must not be empty.";
  }
  if (password.trim() === "") {
    errors.password = "Password must not be empty.";
  }
  return {
    errors,
    valid: Object.keys(errors).length < 1,
  };
};
