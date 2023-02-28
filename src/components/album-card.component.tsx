import React from "react";
import {Badge, Card, CardBody, Flex, Heading, Image, Stack, Text} from "@chakra-ui/react";
import moment from "moment";
import 'moment/locale/it';
import {Album} from "../types/album.type";
import {Emoji} from "./emoji.component";

moment.locale('it')

const capitalize = (s: string) => s && s[0].toUpperCase() + s.slice(1)


export const AlbumCard = ({album}: { album: Album }) => {
    const thumbCoverSrc = album.album_cover.slice(0, album.album_cover.indexOf('=w')) + '=w500';
    const date = capitalize(moment(album.date, 'DD/MM/YYYY').format('MMMM YYYY'))

    return <Card maxW='max' _hover={{
        color: "teal.500",
        cursor: 'pointer',
        transform: 'scale(1.01)'
    }} onClick={e => {
        e.preventDefault()
        window.open(album.album_link, "_blank")
    }
    }>
        <CardBody>
            <Image
                src={thumbCoverSrc}
                alt={album.name}
                borderRadius='lg'
                referrerPolicy={'no-referrer'}

            />
            <Stack mt='6' spacing='3'>
                <Flex justifyContent={'space-between'}>
                    <Heading size='sm'>{album.name} </Heading>
                    <Badge colorScheme='purple' rounded={'lg'} height={'80%'} ml='1'
                           fontSize='1em'>Branca {album.branca}</Badge>
                </Flex>
                <Flex justifyContent={'space-between'}>
                    <Text size='lg'><Emoji label="calendario" symbol="📆"/> {date}</Text>
                    {album.place ? <Text size='lg'><Emoji label="luogo" symbol="📍"/> {album.place}</Text> : <></>}
                </Flex>

            </Stack>
        </CardBody>

    </Card>
}