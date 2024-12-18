import { Avatar, AvatarGroup } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { Theme } from "@chakra-ui/react"
import { Slider } from "../components/ui/slider";
import { InputGroup } from "../components/ui/input-group";

export default function Indexchkra() {



    return (
        <>
            <Theme appearance="dark">

                CHAKRA UI
                <Button colorPalette="teal" variant="surface">Guardar chakra</Button>
                <AvatarGroup>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                    <Avatar></Avatar>
                </AvatarGroup>


                <Slider></Slider>
               
            </Theme>

        </>
    )
}
