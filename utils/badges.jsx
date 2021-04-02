import {
    SiC as IconC,
    SiJavascript,
    SiReact as IconReact,
    SiRust as IconRust,
    SiWebassembly as IconWasm,
} from "react-icons/si"
import { FiAlertTriangle } from "react-icons/fi"
import { FiGithub as IconGH, FiGlobe as IconGlobe } from "react-icons/fi"

import Tooltip from "../components/Tooltip"

export const clang = {
    icon: <IconC size=".8em" />,
    tooltip: <Tooltip text="C Language" width="7.9em" position="left" />,
}

export const js = {
    icon: <SiJavascript size=".8em" />,
    tooltip: <Tooltip text="Javascript" position="left" />,
}

export const react = {
    icon: <IconReact size=".8em" />,
    tooltip: <Tooltip text="React" position="left" />,
}

export const rust = {
    icon: <IconRust size=".8em" />,
    tooltip: <Tooltip text="Rust" position="left" />,
}

export const wasm = {
    icon: <IconWasm size=".8em" />,
    tooltip: <Tooltip text="Web Assembly" width="8.9em" position="left" />,
}

export const wip = {
    icon: <FiAlertTriangle size=".8em" />,
    tooltip: <Tooltip text="Work In Progress" width="6em" position="left" />,
}

export const github = (page) => ({
    icon: <IconGH size="1.1em" />,
    tooltip: <Tooltip text="GitHub page" width="8em" position="left" />,
    link: `https://github.com/${page}`,
})

export const website = (url) => ({
    icon: <IconGlobe size="1.1em" />,
    tooltip: <Tooltip text="Visit the website" width="10em" position="left" />,
    link: url,
})
