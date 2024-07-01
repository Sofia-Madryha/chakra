"use client";
import { Input as ChakraInput, forwardRef } from "@chakra-ui/react";
import { FormField } from "../FormField";
import { InputProps } from "./Input.types";

const Input = forwardRef(
  ({ label, errorMessage, ...props }: InputProps, ref) => {
    return (
      <FormField label={label} errorMessage={errorMessage}>
        <ChakraInput ref={ref} {...props} />
      </FormField>
    );
  }
);

export default Input;
