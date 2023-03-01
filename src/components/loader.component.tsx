import { Center, CircularProgress } from "@chakra-ui/react";

export const Loader = () => (
  <Center height={"100vh"}>
    <CircularProgress isIndeterminate color="green.300" />
  </Center>
);
