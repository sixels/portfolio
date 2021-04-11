import {
    SiC as IconC,
    SiGo,
    SiJavascript,
    SiReact as IconReact,
    SiRust as IconRust,
    SiWebassembly as IconWasm,
} from "react-icons/si"
import { FiAlertTriangle } from "react-icons/fi"
import { FiGithub as IconGH, FiGlobe as IconGlobe } from "react-icons/fi"

import Tooltip from "../components/Tooltip"

export const clang = {
    name: "clang",
    icon: <IconC size="1.1em" />,
    tooltip: (
        <Tooltip width="7.9em" position="left">
            C Language
        </Tooltip>
    ),
}

export const go = {
    name: "go",
    icon: <SiGo size="1.1em" />,
    tooltip: (
        <Tooltip position="left">
            Go
        </Tooltip>
    ),
}


export const js = {
    name: "js",
    icon: <SiJavascript size="1.1em" />,
    tooltip: <Tooltip position="left">Javascript</Tooltip>,
}

export const react = {
    name: "react",
    icon: <IconReact size="1.1em" />,
    tooltip: <Tooltip position="left">React</Tooltip>,
}

export const rust = {
    name: "rust",
    icon: <IconRust size="1.1em" />,
    tooltip: <Tooltip position="left">Rust</Tooltip>,
}

export const wasm = {
    name: "wasm",
    icon: <IconWasm size="1.1em" />,
    tooltip: (
        <Tooltip width="8.9em" position="left">
            Web Assembly
        </Tooltip>
    ),
}

export const wip = {
    name: "wip",
    icon: <FiAlertTriangle size="1.1em" />,
    tooltip: (
        <Tooltip width="6em" position="left">
            Work In Progress
        </Tooltip>
    ),
}

export const github = (page) => ({
    name: "github",
    icon: <IconGH size="1.1em" />,
    tooltip: (
        <Tooltip width="8em" position="left">
            GitHub page
        </Tooltip>
    ),
    link: `https://github.com/${page}`,
})

export const website = (url) => ({
    name: "website",
    icon: <IconGlobe size="1.1em" />,
    tooltip: (
        <Tooltip width="8em" position="left">
            Visit the website
        </Tooltip>
    ),
    link: url,
})
