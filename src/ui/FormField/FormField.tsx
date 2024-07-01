import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";
import { FormFieldProps } from "./FormField.types";

const FormField = ({ children, label, errorMessage }: FormFieldProps) => {
  return (
    <FormControl>
      {label ? <FormLabel>{label}</FormLabel> : null}
      {children}
      {errorMessage ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default FormField;
