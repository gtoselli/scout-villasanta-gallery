import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Emoji } from "./emoji.component";

export const MaintenanceAlert = () => (
  <VStack
    maxWidth={"md"}
    paddingX={"8"}
    paddingY={"8"}
    spacing={"4"}
    textAlign={"center"}
  >
    <Text fontSize={"5xl"} lineHeight={1}>
      <Emoji label="lupo" symbol="🐺" /> <Emoji label="tenda" symbol="⛺" />{" "}
      <Emoji label="scarpone" symbol="🥾" />
    </Text>

    <Heading size={{ sm: "md", md: "lg" }} whiteSpace={"nowrap"}>
      Abbiamo smontato il campo
    </Heading>

    <Text>
      Tende piegate, fuoco spento, foto nello zaino. Restano l'odore di fumo
      sui maglioni e una canzone che non se ne va dalla testa. Buona strada!
    </Text>

    <Text>
      Le prossime avventure le raccontiamo sul nostro profilo Instagram
      privato: mandaci una richiesta e ti teniamo un posto nel cerchio.
    </Text>

    <Button
      as={"a"}
      href={"https://www.instagram.com/agesci_villasanta1/"}
      target={"_blank"}
      rel={"noopener noreferrer"}
      colorScheme={"pink"}
      rightIcon={<ExternalLinkIcon />}
    >
      Chiedi di seguirci su Instagram
    </Button>
  </VStack>
);
