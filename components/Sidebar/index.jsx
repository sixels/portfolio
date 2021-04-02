import {
    FiUser as IconUser,
    FiGithub as IconGH,
    FiEdit3 as IconPen,
    FiCode as IconCode,
    FiBarChart2 as IconChart,
    FiMail as IconMail,
    FiTriangle as IconTriangle,
    FiMenu as IconMenu,
} from "react-icons/fi"

import Tooltip from "../Tooltip"

export default function Sidebar() {
    return (
        <div className="sidebar tw-overflow-x-visible tw-z-50 tw-bg-gray-900 tw-fixed tw-left-0 tw-top-0 tw-h-full tw-w-16 tw-flex tw-flex-col tw-items-center tw-justify-between">
            <div className="upper-sidebar-wrapper">
                <div className="sidebar-item-list tw-flex md:tw-flex-col ">
                    <a
                        href="/"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconTriangle size="1.67em" />
                        <Tooltip position="right" text="Home" />
                    </a>
                </div>
            </div>

            <div className="middle-sidebar-wrapper">
                <div className="sidebar-item-list tw-flex tw-flex-col">
                    <a
                        href="#about"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconUser size="1.67em" />
                        <Tooltip position="right" text="About" />
                    </a>

                    <a
                        href="#projects"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconCode size="1.67em" />
                        <Tooltip position="right" text="Projects" />
                    </a>

                    <a
                        href="#skills"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconChart size="1.67em" />
                        <Tooltip position="right" text="Skills" />
                    </a>

                    <a
                        href="#footer"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconMail size="1.67em" />
                        <Tooltip position="right" text="Contact" />
                    </a>
                </div>
            </div>

            <div className="bottom-sidebar-wrapper">
                <div className="sidebar-item-list tw-flex tw-flex-col">
                    <a
                        href="/blog"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconPen size="1.67em" />
                        <Tooltip position="right" text="Blog" />
                    </a>

                    <a
                        href="https://github.com/protoshark"
                        target="_blank"
                        rel="noopener"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconGH size="1.67em" />
                        <Tooltip position="right" text="GitHub" width="24" />
                    </a>
                </div>
            </div>

        </div>
    )
}
