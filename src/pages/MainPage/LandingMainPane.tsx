import { HStack, VStack } from "@chakra-ui/react";
import React from "react";
import LinkTile from "../../components/LinkTile";
import image1 from "../../assets/CF_12_570.jpg";
import image2 from "../../assets/1000w_q75.jpg";
import image3 from "../../assets/221027-N-N0777-1020C.jpg";

interface props {
  isMobile: boolean;
}

export default function LandingMainPane(props: props) {
  return (
    <>
      {!props.isMobile && (
        <HStack
          minHeight={420}
          spacing={"4%"}
          paddingLeft={"4%"}
          paddingRight={"4%"}
          width={"full"}
          justifyContent={"center"}
        >
          <LinkTile
            isMobile={props.isMobile}
            linkTileBackgroundImage={image1}
            linkTileTitle={"Benficiary Support"}
            linkTileDescription={
              "The access point for information and assistance on DoD entitlements, benefits, medical readiness, and DMDC website issues for uniformed service members, veterans, retirees, other eligible beneficiaries, and their families."
            }
            linkAddress={"./beneficiariesLoggedOut.html"}
          />
          <LinkTile
            isMobile={props.isMobile}
            linkTileBackgroundImage={image2}
            linkTileTitle={"Partner Portal"}
            linkTileDescription={
              "For DMDC partner organizations such as Tricare, Dental, and Service Project Offices who support service member, their family, and other eligible beneficiaries when there is a problem with their personal, personnel, or benefits and entitlement data in the DEERS database."
            }
            linkAddress={"./partnerLogin.html"}
          />
          <LinkTile
            isMobile={props.isMobile}
            linkTileBackgroundImage={image3}
            linkTileTitle={"Technical Support"}
            linkTileDescription={
              "Provides worldwide contact center support to the entire DMDC infrastructure of systems and applications."
            }
            linkAddress={"./technicalSupportLogin.html"}
          />
        </HStack>
      )}
      {props.isMobile && (
        <VStack
          width={"100%"}
          paddingLeft={"5%"}
          paddingRight={"5%"}
          justifyContent={"center"}
          spacing={6}
        >
          <LinkTile
            isMobile={props.isMobile}
            linkTileBackgroundImage={image1}
            linkTileTitle={"Benficiary Support"}
            linkTileDescription={
              "The access point for information and assistance on DoD entitlements, benefits, medical readiness, and DMDC website issues for uniformed service members, veterans, retirees, other eligible beneficiaries, and their families."
            }
            linkAddress={"./beneficiariesLoggedOut.html"}
          />
          <LinkTile
            isMobile={props.isMobile}
            linkTileBackgroundImage={image2}
            linkTileTitle={"Partner Portal"}
            linkTileDescription={
              "For DMDC partner organizations such as Tricare, Dental, and Service Project Offices who support service member, their family, and other eligible beneficiaries when there is a problem with their personal, personnel, or benefits and entitlement data in the DEERS database."
            }
            linkAddress={"./partnerLogin.html"}
          />
          <LinkTile
            isMobile={props.isMobile}
            linkTileBackgroundImage={image3}
            linkTileTitle={"Technical Support"}
            linkTileDescription={
              "Provides worldwide contact center support to the entire DMDC infrastructure of systems and applications."
            }
            linkAddress={"./technicalSupportLogin.html"}
          />
        </VStack>
      )}
    </>
  );
}