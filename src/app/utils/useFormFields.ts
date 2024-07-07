import { useState } from "react";

type FormFields = Record<string, any>;

function useFormFields<T extends FormFields>(initialState: T) {
  const [field, setField] = useState<T>(initialState);

  const formChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return { field, formChangeHandler, setField };
}

export default useFormFields;
