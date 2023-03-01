import { Alert, AlertIcon, Box, SimpleGrid } from "@chakra-ui/react";
import { AlbumCard } from "./album-card.component";
import { Album } from "../types/album.type";

export const AlbumGallery = ({ albums }: { albums: Album[] }) => (
  <Box w={{ sm: "95%", md: "80%", lg: "60%" }}>
    <SimpleGrid columns={1} spacing={5} minChildWidth="350px">
      {albums.length ? (
        albums.map((album) => (
          <Box>
            <AlbumCard album={album} />
          </Box>
        ))
      ) : (
        <Box height={"80vh"}>
          <Alert status="warning">
            <AlertIcon />
            Ancora non ci sono album per questa branca, torna tra qualche
            giorno!
          </Alert>
        </Box>
      )}
    </SimpleGrid>
  </Box>
);
