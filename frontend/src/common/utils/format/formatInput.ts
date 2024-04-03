import { ChangeEvent } from "react";
import { formatToOnlyNumbersWithNoLeadingZero } from "./formatToOnlyNumber";
import { formatToOnlyLetters } from "./formatToOnlyLetters";
import { FormatInputType } from "./enums.";
import { formatToAlphaNumeric } from "./formatToAlphaNumeric";

export class HandleInput {
  private static instance: HandleInput;
  public static getInstance(): HandleInput {
    if (!HandleInput.instance) {
      HandleInput.instance = new HandleInput();
    }
    return HandleInput.instance;
  }

  formatWithRegex(
    event: ChangeEvent<HTMLInputElement>,
    valid: string,
    setState: (newValue: any) => void,
    setError: (newValue: { field: string; message: string }) => void,
    removeError: (newValue: string) => void,
    keyError: string,
    message?: string
  ): void {
    if (valid === FormatInputType.USER_NAME) {
      const inputValue = formatToOnlyLetters(event.target.value.trimStart());
      setState(inputValue);

      if (!inputValue || inputValue.length < 4) {
        setError({
          field: keyError,
          message: message || "Mínimo 4 caracteres",
        });
      } else {
        removeError(keyError);
      }
    }

    if (valid === FormatInputType.USER_EMAIL) {
      const inputValue = event.target.value.trim();
      setState(inputValue);

      const regex_email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (!inputValue || !regex_email.test(inputValue)) {
        setError({
          field: keyError,
          message: message || "Insira um e-mail válido",
        });
      } else {
        removeError(keyError);
      }
    }
  }
}
