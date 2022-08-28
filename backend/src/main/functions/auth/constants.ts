export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/
export const PASSWORD_MESSAGE = (
  '"password" must be at least 8 characters long, a lowercase character, an uppercase ' +
  'character, a number and a special character'
)
