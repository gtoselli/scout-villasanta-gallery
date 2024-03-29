import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Center, Link, Text } from "@chakra-ui/react";
import { Emoji } from "./emoji.component";
import { DarkModeSwitcher } from "./dark-mode-switcher.component";

export const Footer = () => (
  <Center padding={"25px"} flexDirection={"column"}>
    <DarkModeSwitcher />

    <Text paddingTop={"20px"}>
      Sviluppato con <Emoji label="amore" symbol="❤️" /> da noi
    </Text>
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      width={"100%"}
      fontSize={{ sm: "15" }}
      paddingTop={"10px"}
    >
      <Link href="http://www.scoutvillasanta.it/" isExternal>
        Il nostro (vecchissimo) sito <Emoji label="vecchio" symbol="👴🏾" />
        <ExternalLinkIcon mx="2px" />
      </Link>

      <Link href="https://www.instagram.com/scout.villasanta1/" isExternal>
        Il nostro IG <Emoji label="selfie" symbol="🤳🏼" />
        <ExternalLinkIcon mx="2px" />
      </Link>
    </Box>
  </Center>
);
