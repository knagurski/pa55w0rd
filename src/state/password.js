import { generatePassword } from "../core/generator";

export const password = {
  password: ""
};

export const generate = config =>
  (password.password = generatePassword(config));
