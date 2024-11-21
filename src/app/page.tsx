'use client'
import BodyEnd from "@/components/bodyMain/BodyEnd";
import BodyFirst from "@/components/bodyMain/BodyFirst";
import BodyFive from "@/components/bodyMain/BodyFive";
import BodyFour from "@/components/bodyMain/BodyFour";
import BodyNews from "@/components/bodyMain/BodyNews";
import BodyThree from "@/components/bodyMain/BodyThree";
import { HeaderMegaMenu } from "@/components/ui/Header_with_mega_menu";
import { Box } from "@mantine/core";

export default function Home() {
  return (
    <Box>

      <HeaderMegaMenu></HeaderMegaMenu>
      <BodyFirst ></BodyFirst>
      {/* <BodyTow></BodyTow> */}
      <BodyThree></BodyThree>
      <BodyFour></BodyFour>
      <BodyFive></BodyFive>
      <BodyNews></BodyNews>
      <BodyEnd></BodyEnd>
     
    </Box>
   
  );
}
