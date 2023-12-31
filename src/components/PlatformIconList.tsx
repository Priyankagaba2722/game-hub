import { FaWindows, FaXbox, FaApple, FaPlaystation, FaLinux, FaAndroid } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si"
import { BsGlobe } from "react-icons/bs"
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react"
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        nintendo: SiNintendo,
        xbox: FaXbox,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        web: BsGlobe,
        ios: MdPhoneIphone
    }

    return (
        <HStack marginY={2}>
            {platforms.map((platform) =>
                <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'} />
            )}
        </HStack>

    )
}

export default PlatformIconList