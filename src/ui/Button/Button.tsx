import { Button as ChakraButton } from "@chakra-ui/react";
import styles from "./Button.module.scss";
import { ButtonProps } from "./Button.types";

const Button = ({ variant, onClick, children }: ButtonProps) => {
  return (
    <div className={styles.button} onClick={onClick}>
      <ChakraButton variant={variant}>{children}</ChakraButton>
    </div>
  );
};

export default Button;
