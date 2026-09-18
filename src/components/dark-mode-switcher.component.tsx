import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, ButtonProps, useColorMode } from "@chakra-ui/react";

export const DarkModeSwitcher = (props: ButtonProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} {...props}>
      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
    </Button>
  );
};
