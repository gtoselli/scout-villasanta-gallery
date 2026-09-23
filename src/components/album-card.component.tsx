import React, { useState } from "react";
import {
  Badge,
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Skeleton,
  Stack,
  Text,
} from "@chakra-ui/react";
import moment from "moment";
import "moment/locale/it";
import { Album, BrancaColorMapping, EBranca } from "../types/album.type";
import { Emoji } from "./emoji.component";

moment.locale("it");

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1);

// TODO: take all style and create and object or a series of variables

export const AlbumCard = ({ album }: { album: Album }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const thumbCoverSrc =
    album.album_cover.slice(0, album.album_cover.indexOf("=w")) +
    "=w500-h350-c";
  const date = capitalize(moment(album.date, "DD/MM/YYYY").format("MMMM YYYY"));

  return (
    <Card
      align="stretch"
      borderRadius="lg"
      _hover={{
        color: "teal.500",
        cursor: "pointer",
        transform: "scale(1.02)",
      }}
      onClick={(e) => {
        e.preventDefault();
        window.open(album.album_link, "_blank");
      }}
    >
      <CardBody>
        <Skeleton isLoaded={!isLoading} w="100%" h="321px" borderRadius="lg">
          {hasError ? (
            <Box
              bg={`${BrancaColorMapping[album.branca]}.100`}
              h="321px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              fontSize="5xl"
              borderRadius="lg"
            >
              <Emoji symbol={symbolFromBranca(album.branca)} />
            </Box>
          ) : (
            <Image
              src={thumbCoverSrc}
              alt={album.name}
              width="100%"
              h="321px"
              fit="cover"
              borderRadius="lg"
              referrerPolicy="no-referrer"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setHasError(true);
              }}
            />
          )}
        </Skeleton>
        <Stack mt="6" spacing="3">
          <Flex justifyContent={"space-between"}>
            <Heading size="sm">{album.name} </Heading>
            <Badge
              colorScheme={BrancaColorMapping[album.branca]}
              rounded={"lg"}
              height={"80%"}
              ml="1"
              fontSize="1em"
            >
              Branca {album.branca}
            </Badge>
          </Flex>
          <Flex justifyContent={"space-between"}>
            <Text fontSize="xs">
              <Emoji label="calendario" symbol="📆" /> {date}
            </Text>
            {album.place ? (
              <Text fontSize="xs">
                <Emoji label="luogo" symbol="📍" /> {album.place}
              </Text>
            ) : (
              <></>
            )}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );

  function symbolFromBranca(branca: EBranca) {
    switch (branca) {
      case EBranca.LC:
        return "🐺";
      case EBranca.EG:
        return "🏕️";
      case EBranca.RS:
        return "🏔️";
      case EBranca.COCA:
        return "🧭";
      default:
        return "⚠️";
    }
  }
};
