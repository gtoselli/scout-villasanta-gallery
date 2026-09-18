import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Flex, Link, Text } from "@chakra-ui/react";
import { Emoji } from "./emoji.component";

export const Footer = () => (
  <Flex
    as={"footer"}
    position={"sticky"}
    bottom={0}
    alignItems={"center"}
    gap={"10px"}
    paddingX={"25px"}
    paddingY={"12px"}
    backgroundColor={"chakra-body-bg"}
    borderTopWidth={"1px"}
    fontSize={{ sm: "13", md: "15" }}
  >
    <Link href="http://www.scoutvillasanta.it/" isExternal flex={1}>
      Il nostro (vecchissimo) sito <ExternalLinkIcon />
    </Link>

    <Link
      href="https://www.instagram.com/scout.villasanta1/"
      isExternal
      flex={1}
      textAlign={"right"}
    >
      Il nostro IG
      <ExternalLinkIcon mx="2px" />
    </Link>
  </Flex>
);
