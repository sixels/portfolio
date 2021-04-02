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
        <div className="sidebar tw-overflow-x-visible tw-z-50 tw-bg-gray-900 tw-fixed tw-right-0 tw-bottom-0 tw-h-auto tw-mr-2 tw-mb-2 tw-rounded-lg tw-w-16 tw-flex tw-flex-col tw-items-center tw-justify-between">

            <div className="middle-sidebar-wrapper">
                <div className="sidebar-item-list tw-flex tw-flex-col">
                    <a
                        href="#about"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconUser size="1.67em" />
                        <Tooltip position="left" text="About" />
                    </a>

                    <a
                        href="#projects"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconCode size="1.67em" />
                        <Tooltip position="left" text="Projects" />
                    </a>


                    <a
                        href="#contact"
                        className="click-sidebar has-tooltip hover:tw-text-yellow-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                    >
                        <IconMail size="1.67em" />
                        <Tooltip position="left" text="Contact" />
                    </a>
                </div>
            </div>

        </div>
    )
}
