import React, {useEffect, useState} from "react";
import "./App.css";
import {
    Alert,
    AlertIcon,
    Box,
    Center,
    ChakraProvider,
    CircularProgress,
    extendTheme,
    Flex,
    Heading,
    Select,
    SimpleGrid,
    Spacer,
    Text
} from "@chakra-ui/react";
import axios from "axios";
import moment from "moment";
import 'moment/locale/it';
import {Album} from "./types/album.type";
import {AlbumCard} from "./components/album-card.component";
import {Emoji} from "./components/emoji.component";

moment.locale('it')


const breakpoints = {
    sm: '20em',
    md: '48em',
    lg: '62em',
    xl: '80em',
    '2xl': '96em',
}

// 3. Extend the theme
const theme = extendTheme({breakpoints})


function App() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [albums, setAlbums] = useState<Album[]>([])
    const [visibleAlbums, setVisibleAlbums] = useState<Album[]>([])

    useEffect(() => {
        axios.get('https://opensheet.elk.sh/1Y-WurqEckwVkpdKseKCaLjp0LjjiVLWRUDzZQtZ-L_A/photos').then(res => {
            setAlbums(res.data)
            setVisibleAlbums(res.data)
            setIsLoading(false)
        })
    }, [])


    return (
        <ChakraProvider theme={theme}>
            {isLoading ? <Center height={'100vh'}><CircularProgress isIndeterminate color='green.300'/></Center> :
                <><Flex direction={'column'}>
                    <Box height={'100px'} width={'100%'} paddingLeft={'10%'} paddingRight={'10%'} paddingTop={'2%'}>
                        <Flex direction={'row'} alignItems={'center'} justifyContent={'center'}>
                            <Box>
                                <Heading size={'lg'}>Foto Villasanta 1</Heading>
                            </Box>
                            <Spacer/>
                            <Box><Select placeholder='Tutte le branche'
                                         size={'sm'}
                                         onChange={v => {
                                             v.stopPropagation()
                                             if (!v.target.value) setVisibleAlbums(albums)
                                             else setVisibleAlbums(albums.filter(album => album.branca === v.target.value))
                                         }}>
                                <option value='LC'>Branca LC</option>
                                <option value='EG'>Branca EG</option>
                                <option value='RS'>Branca RS</option>
                                <option value='COCA'>Coca</option>
                            </Select></Box>
                        </Flex>
                    </Box>
                    <Box>
                        <Center>
                            <Box w={{sm: "95%", md: "80%", lg: "60%"}}>
                                <SimpleGrid columns={1} spacing={5} minChildWidth='350px'>
                                    {visibleAlbums.length ? visibleAlbums.map(album => (
                                            <Box><AlbumCard album={album}/></Box>)) :
                                        <Box height={'80vh'}><Alert status='warning'>
                                            <AlertIcon/>
                                            Ancora non ci sono album per questa branca, torna tra qualche giorno!
                                        </Alert></Box>}
                                </SimpleGrid>
                            </Box>
                        </Center>
                    </Box>
                </Flex>
                    <Center padding={'25px'}><Text>Sviluppato con <Emoji label="amore" symbol="❤️"/> da
                        noi.</Text></Center></>}


        </ChakraProvider>
    );
}

export default App;