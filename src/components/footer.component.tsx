import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Center, Link, Text } from "@chakra-ui/react";
import { Emoji } from "./emoji.component";

export const Footer = () => (
  <Center padding={"25px"} flexDirection={"column"}>
    <Text>
      Sviluppato con <Emoji label="amore" symbol="❤️" /> da noi
    </Text>
    <Box display={"flex"} justifyContent={"space-between"} width={"100%"}>
      <Link href="http://www.scoutvillasanta.it/" isExternal>
        Il nostro (vecchissimo) sito <Emoji label="vecchio" symbol="👴🏾" />{" "}
        <ExternalLinkIcon mx="2px" />
      </Link>

      <Link href="https://www.instagram.com/scout.villasanta1/" isExternal>
        Il nostro IG <Emoji label="selfie" symbol="🤳🏼" />{" "}
        <ExternalLinkIcon mx="2px" />
      </Link>
    </Box>
  </Center>
);
