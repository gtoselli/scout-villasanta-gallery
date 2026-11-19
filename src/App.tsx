import { useEffect, useState } from "react";
import "./App.css";
import {
  Box,
  Center,
  ChakraProvider,
  extendTheme,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import "moment/locale/it";
import { Album } from "./types/album.type";
import { Loader } from "./components/loader.component";
import { TopBar } from "./components/top-bar.component";
import { AlbumGallery } from "./components/album-gallery.component";
import { Footer } from "./components/footer.component";
import { MaintenanceAlert } from "./components/maintenance-alert.component";

moment.locale("it");

const breakpoints = {
  sm: "20em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

// 3. Extend the theme
const theme = extendTheme({ breakpoints });

const maintenanceMode = process.env.REACT_APP_MAINTENANCE_MODE === "true";
const sheetLink =
  process.env.REACT_APP_SHEET_LINK ||
  "https://opensheet.elk.sh/1Y-WurqEckwVkpdKseKCaLjp0LjjiVLWRUDzZQtZ-L_A/photos";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(!maintenanceMode);
  const [albums, setAlbums] = useState<Album[]>([]);
  const [visibleAlbums, setVisibleAlbums] = useState<Album[]>([]);

  useEffect(() => {
    if (maintenanceMode) return;
    axios.get(sheetLink).then((res) => {
      setAlbums(res.data);
      setVisibleAlbums(res.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {isLoading ? (
        <Loader />
      ) : (
        <Flex direction={"column"} minHeight={"100vh"}>
          <Box
            height={"100px"}
            width={"100%"}
            paddingLeft={"10%"}
            paddingRight={"10%"}
            paddingTop={"2%"}
          >
            <TopBar
              showFilter={!maintenanceMode}
              onFilter={(v) => {
                v.stopPropagation();
                if (!v.target.value) setVisibleAlbums(albums);
                else
                  setVisibleAlbums(
                    albums.filter((album) => album.branca === v.target.value),
                  );
              }}
            />
          </Box>
          {maintenanceMode ? (
            // paddingBottom compensa la top bar: l'avviso è al centro della finestra
            <Center flex={1} paddingBottom={"100px"}>
              <MaintenanceAlert />
            </Center>
          ) : (
            <Box flex={1}>
              <Center>
                <AlbumGallery albums={visibleAlbums} />
              </Center>
            </Box>
          )}
          {!maintenanceMode && <Footer />}
        </Flex>
      )}
    </ChakraProvider>
  );
}

export default App;
