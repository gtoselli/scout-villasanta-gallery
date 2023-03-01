import { Box, Flex, Heading, Image, Select, Spacer } from "@chakra-ui/react";

export const TopBar = ({ onFilter }: { onFilter: (v: any) => void }) => (
  <Flex direction={"row"} alignItems={"center"} justifyContent={"center"}>
    <Box display={"flex"} alignItems={"center"}>
      <Image
        width={{ sm: "30px", md: "60px", lg: "70px" }}
        src="android-chrome-384x384.png"
        paddingRight={"7px"}
      />
      <Heading size={{ sm: "md", md: "lg", lg: "lg" }}>
        Foto Villasanta 1
      </Heading>
    </Box>
    <Spacer />
    <Box>
      <Select placeholder="Tutte le branche" size={"sm"} onChange={onFilter}>
        <option value="LC">Branca LC</option>
        <option value="EG">Branca EG</option>
        <option value="RS">Branca RS</option>
        <option value="COCA">Coca</option>
      </Select>
    </Box>
  </Flex>
);
