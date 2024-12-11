"use client"

import { Input, Stack } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import {
    DrawerActionTrigger,
    DrawerBackdrop,
    DrawerBody,
    DrawerCloseTrigger,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerRoot,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useRef } from "react"

export default function Drawer  ()  {
    const ref = useRef < HTMLInputElement > (null)
    return (
        <DrawerRoot initialFocusEl={() => ref.current}>
            <DrawerBackdrop />
            <DrawerTrigger asChild>
                <Button variant="outline" size="sm">
                    Open Drawer
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                </DrawerHeader>
                <DrawerBody>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <Stack mt="5">
                        <Input defaultValue="Naruto" placeholder="First name" />
                        <Input ref={ref} placeholder="Email" />
                    </Stack>
                </DrawerBody>
                <DrawerFooter>
                    <DrawerActionTrigger asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerActionTrigger>
                    <Button>Save</Button>
                </DrawerFooter>
                <DrawerCloseTrigger />
            </DrawerContent>
        </DrawerRoot>
    )
}
