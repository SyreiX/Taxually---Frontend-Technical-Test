export const EMAIL_PATTERN = '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$';
export const PASSWORD_PATTERN = '(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}';

export interface User {
  firstName: string;
  lastName: string;
  email: string
}
