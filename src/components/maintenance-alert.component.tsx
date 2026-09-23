import { Heading, Text, VStack } from "@chakra-ui/react";
import { Emoji } from "./emoji.component";

export const MaintenanceAlert = () => (
  <VStack
    maxWidth={"md"}
    paddingX={"8"}
    paddingTop={"16"}
    spacing={"4"}
    textAlign={"center"}
  >
    <Text fontSize={"5xl"} lineHeight={1}>
      <Emoji label="lavori in corso" symbol="🚧" />
    </Text>

    <Heading size={{ sm: "md", md: "lg" }}>
      Il sito è temporaneamente disabilitato
    </Heading>

    <Text>
      Il sito è temporaneamente disabilitato per manutenzione. Torna tra qualche
      giorno!
    </Text>
  </VStack>
);
