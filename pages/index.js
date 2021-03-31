import {
    FiUser as IconUser,
    FiHome as IconHome,
    FiGithub as IconGH,
    FiEdit3 as IconPen,
    FiCode as IconCode,
    FiBarChart2 as IconChart,
    FiMail as IconMail,
    FiTriangle as IconTriangle,
} from "react-icons/fi"

import { SiC as IconC, SiReact, SiRust as IconRust, SiWebassembly } from "react-icons/si"

import Head from "next/head"
import "../styles/Index.module.css"

export default function Home() {
    return (
        <div className="tw-w-full tw-h-full tw-relative tw-flex tw-flex-col">
            <Head>
                <title> Protofolio </title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            {/* sidebar */}
            <div className="sidebar tw-bg-gray-900 tw-fixed tw-left-0 tw-top-0 tw-h-full tw-w-16 tw-flex tw-flex-col tw-items-center tw-justify-between">
                <div className="upper-sidebar-wrapper ">
                    <div className="sidebar-item-list tw-flex tw-flex-col ">
                        <a
                            href="/"
                            className="click-sidebar has-tooltip hover:tw-text-green-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                        >
                            <IconTriangle size="1.67em" />
                            <span className="item-name tooltip tw-font-bold tw-text-xs">
                                Home
                            </span>
                        </a>
                    </div>
                </div>

                <div className="middle-sidebar-wrapper">
                    <div className="sidebar-item-list tw-flex tw-flex-col">
                        <a
                            href="#whoami"
                            className="click-sidebar has-tooltip hover:tw-text-green-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                        >
                            <IconUser size="1.67em" />
                            <span className="item-name tooltip tw-font-bold tw-text-xs">
                                About
                            </span>
                        </a>

                        <a
                            href="#projects"
                            className="click-sidebar has-tooltip hover:tw-text-green-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                        >
                            <IconCode size="1.67em" />
                            <span className="item-name tooltip tw-font-bold tw-text-xs">
                                Projects
                            </span>
                        </a>

                        <a
                            href="#skills"
                            className="click-sidebar has-tooltip hover:tw-text-green-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                        >
                            <IconChart size="1.67em" />
                            <span className="item-name tooltip tw-font-bold tw-text-xs">
                                Skills
                            </span>
                        </a>

                        <a
                            href="#footer"
                            className="click-sidebar has-tooltip hover:tw-text-green-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                        >
                            <IconMail size="1.67em" />
                            <span className="item-name tooltip tw-font-bold tw-text-xs">
                                Contact
                            </span>
                        </a>
                    </div>
                </div>

                <div className="bottom-sidebar-wrapper">
                    <div className="sidebar-item-list tw-flex tw-flex-col">
                        <a
                            href="/blog"
                            className="click-sidebar has-tooltip hover:tw-text-green-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                        >
                            <IconPen size="1.67em" />
                            <span className="item-name tooltip tw-font-bold tw-text-xs">
                                Blog
                            </span>
                        </a>

                        <a
                            href="https://github.com/protoshark"
                            className="click-sidebar has-tooltip hover:tw-text-green-400 hover:tw-bg-gray-400 hover:tw-bg-opacity-10 tw-shadow-md tw-bg-gray-500 tw-bg-opacity-10"
                        >
                            <IconGH size="1.67em" />
                            <span className="item-name tooltip tw-font-bold tw-text-xs">
                                GitHub
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            {/* End sidebar */}

            {/* Main content */}
            <main className="tw-h-full tw-ml-16 content tw-text-gray-100">
                {/* Hero */}
                <div
                    id="whoami"
                    className="hero tw-h-5/6 tw-flex tw-flex-col tw-justify-center tw-bg-gradient-to-b tw-from-gray-900 tw-to-gray-800"
                >
                    <section className="hero-text tw-container md:tw-mx-auto tw-mb-18 tw-py-20 tw-px-6 md:tw-px-12">
                        <h1 className="tw-text-4xl tw-mb-1 tw-font-extrabold">
                            Hey, I'm{" "}
                            <a className=" tw-text-green-400">Protoshark</a>
                        </h1>
                        <p className="tw-max-w-2xl md:tw-max-w-xl tw-font-medium tw-text-lg">
                            I love to create things to learning something new.
                            I'm always trying my best to put the effective and
                            the pleasant together in each of my projects!
                        </p>
                    </section>
                </div>
                {/* End hero */}

                {/* Projects */}
                <div
                    id="projects"
                    className="tw-bg-green-500 projects tw-my-10 tw-container  md:tw-max-w-3xl lg:tw-max-w-6xl tw-mx-auto tw-px-4 tw-pt-4 tw-pb-3 tw-rounded-xl tw-shadow-xl"
                >
                    <h2 className="section-title tw-ml-2 tw-mb-2 tw-font-extrabold tw-text-green-900">
                        My Favorite Projects
                    </h2>

                    <div className="main-projects tw-grid tw-grid-flow-row tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-6 tw-gap-y-4">
                        {/* 1 */}
                        <div className="project-card tw-bg-gray-900 tw-bg-opacity-90 tw-flex tw-flex-col tw-justify-center tw-rounded-lg tw-shadow-xl">
                            <div className="project-image tw-h-40 tw-self-center tw-flex tw-items-center" >
                                <img className="tw-h-40 tw-mx-auto" src="https://github.com/protoshark/pwdeck/raw/main/assets/logo.svg" alt="Password deck"/>
                                </div>

                            <section className="card-description tw-px-2 tw-mt-4">
                                <h3 className="project-name tw-flex tw-flex-row tw-justify-between tw-items-center">
                                    PWDeck
                                    <div className="technologies tw-text-gray-200 tw-flex">
                                        <div className="technology has-tooltip tw-rounded-full tw-bg-opacity-40 tw-bg-gray-600 tw-p-2 tw-mx-1">
                                            <IconRust size=".8em" />
                                            <div className="tooltip tooltip-left tw-text-sm tw-font-medium">
                                                Rust
                                            </div>
                                        </div>
                                    </div>
                                </h3>
                                <p className="project-description tw-py-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Animi voluptas aspernatur
                                    maxime a at neque corporis id vel, iusto
                                    dicta similique amet. Quas tenetur, totam
                                    explicabo ut neque nulla nam.
                                </p>
                                <div className="project-footer tw-flex tw-flex-row tw-justify-end tw-pb-2">
                                    <a
                                        href="https://github.com/protoshark/pwdeck"
                                        className="tw-group tw-cursor-pointer has-tooltip link-icon tw-flex tw-flex-row tw-items-center tw-justify-center tw-rounded-full tw-bg-green-300 tw-text-green-900 tw-p-2"
                                    >
                                        <IconGH size="1.19em" />
                                        <span className="tooltip tooltip-left tw-text-sm tw-font-medium tw-w-44">
                                            Check out on GitHub
                                        </span>
                                    </a>
                                </div>
                            </section>
                        </div>

                        {/* 2 */}
                        <div className="project-card tw-bg-gray-900 tw-bg-opacity-90 tw-flex tw-flex-col tw-justify-center tw-rounded-lg tw-shadow-xl">
                            <div className="project-image tw-h-40 tw-self-center tw-flex tw-items-center pwdeck" />

                            <section className="card-description tw-px-2 tw-mt-4">
                                <h3 className="project-name tw-flex tw-flex-row tw-justify-between tw-items-center">
                                    CHIP-8
                                    <div className="technologies tw-text-gray-200 tw-flex">
                                        <div className="technology has-tooltip tw-rounded-full tw-bg-opacity-40 tw-bg-gray-600 tw-p-2 tw-mx-1">
                                            <IconRust size=".8em" />
                                            <div className="tooltip tooltip-left tw-text-sm tw-font-medium">
                                                Rust
                                            </div>
                                        </div>
                                        <div className="technology has-tooltip tw-rounded-full tw-bg-opacity-40 tw-bg-gray-600 tw-p-2 tw-mx-1">
                                            <SiWebassembly size=".8em" />
                                            <div className="tooltip tooltip-left tw-text-sm tw-font-medium tw-w-32">
                                                Web Assembly
                                            </div>
                                        </div>
                                        <div className="technology has-tooltip tw-rounded-full tw-bg-opacity-40 tw-bg-gray-600 tw-p-2 tw-mx-1">
                                            <SiReact size=".8em" />
                                            <div className="tooltip tooltip-left tw-text-sm tw-font-medium">
                                                React
                                            </div>
                                        </div>
                                        
                                    </div>
                                </h3>
                                <p className="project-description tw-py-3">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipisicing elit. Animi voluptas aspernatur
                                    maxime a at neque corporis id vel, iusto
                                    dicta similique amet. Quas tenetur, totam
                                    explicabo ut neque nulla nam.
                                </p>
                                <div className="project-footer tw-flex tw-flex-row tw-justify-end tw-pb-2">
                                    <a
                                        href="https://github.com/protoshark/chip8_old"
                                        className="tw-group tw-cursor-pointer has-tooltip link-icon tw-flex tw-flex-row tw-items-center tw-justify-center tw-rounded-full tw-bg-green-300 tw-text-green-900 tw-p-2"
                                    >
                                        <IconGH size="1.19em" />
                                        <span className="tooltip tooltip-left tw-text-sm tw-font-medium tw-w-44">
                                            Check out on GitHub
                                        </span>
                                    </a>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
                {/* End projects */}

                {/* Skills */}
                <div id="skills" className="skills">
                    <h1>Skills</h1>
                </div>
                {/* End skills */}

                {/* Footer */}
                <footer
                    id="footer"
                    className="tw-bg-gradient-to-bl tw-border-gray-700 tw-border-l-2 tw-border-t-2 tw-border-solid tw-from-gray-900 tw-to-gray-800 tw-h-1/3 tw-rounded-tl-3xl"
                >
                    <div className="contact tw-h-full tw-pt-10 tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center  tw-text-gray-600">
                        <div className="center-footer tw-flex tw-items-center tw-justify-center md:tw-w-1/3">
                            Made with ❤️ in Brazil 🇧🇷
                        </div>

                        <div className="right-footer md:tw-w-1/3 contact-email tw-flex tw-flex-row tw-items-center tw-justify-center tw-transition-colors ">
                            <div className="footer-item tw-flex tw-flex-row tw-items-center tw-px-2 hover:tw-text-green-300">
                                <div className="email-icon ">
                                    <IconMail />
                                </div>
                                <a
                                    href="mailto:protoshark@protonmail.com"
                                    className="email tw-ml-2"
                                >
                                    protoshark@protonmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End Footer */}
            </main>
            {/* End main content  */}
        </div>
    )
}
