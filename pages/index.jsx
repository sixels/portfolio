import Head from "next/head"
import Link from "next/link"

import {
    FiGithub as IconGH,
    FiMail as IconMail,
    FiUser as IconUser,
    FiEdit3 as IconPen,
    FiCode as IconCode,
    FiArrowRightCircle,
} from "react-icons/fi"
import { SiLinkedin } from "react-icons/si"

import Card from "../components/Card"
import Tooltip from "../components/Tooltip"
import LinkScroll from "../components/LinkScroll"

import * as badges from "../utils/badges"

export default function Home() {
    return (
        <>
            <Head>
                <title> Portfolio - Protoshark </title>
                <link
                    rel="preload"
                    href="/portfolio/fonts/Epilogue/Epilogue.woff2"
                    as="font"
                    crossOrigin=""
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width, user-scalable=no"
                />
            </Head>

            {/* Main content */}
            <main className="content tw-text-gray-100">
                {/* Hero */}
                <div className="hero tw-relative tw-flex tw-flex-col tw-justify-center tw-bg-gradient-to-b tw-from-gray-900 tw-to-gray-800">
                    <div className="social tw-absolute tw-right-0 tw-top-0 tw-mt-8 tw-mr-6">
                        <div className="social-list tw-grid tw-gap-y-6 tw-grid-rows-2 tw-grid-cols-1">
                            <Link href="https://github.com/protoshark">
                                <div className="has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors">
                                    <IconGH size="1.4em" />
                                    <Tooltip position="left" width="4.4rem">
                                        Github
                                    </Tooltip>
                                </div>
                            </Link>

                            <Link href="https://linkedin.com/in/vin%C3%ADcius-teles-b157b9171">
                                <div className="has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors">
                                    <SiLinkedin size="1.4em" />
                                    <Tooltip position="left" width="4.4rem">
                                        LinkedIn
                                    </Tooltip>
                                </div>
                            </Link>

                            <Link href="https://protoshark.github.io/blog">
                                <div className="has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors">
                                    <IconPen size="1.4em" />
                                    <Tooltip position="left" width="4.4rem">
                                        My blog
                                    </Tooltip>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div className="streamline tw-absolute tw-border-primary-400 tw-border-r-2 tw-border-b-2 tw-right-0 tw-bottom-0 tw-mb-2 tw-mr-8" />

                    <div className="anchors tw-absolute tw-right-0 tw-bottom-0 tw-mr-80">
                        <div className="anchor-list tw-grid-flow-col tw-grid tw-gap-x-6">
                            <LinkScroll href="/#about">
                                <div className="has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors">
                                    <IconUser size="1.4em" />
                                    <Tooltip position="left" width="3.5rem">
                                        About
                                    </Tooltip>
                                </div>
                            </LinkScroll>

                            <LinkScroll href="/#projects">
                                <div className="has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors ">
                                    <IconCode size="1.4em" />
                                    <Tooltip position="left">Projects</Tooltip>
                                </div>
                            </LinkScroll>

                            <LinkScroll href="/#contact">
                                <div className="has-tooltip tw-text-gray-400 tw-text-opacity-80 hover:tw-text-primary-400 tw-transition-colors">
                                    <IconMail size="1.4em" />
                                    <Tooltip position="left">Contact</Tooltip>
                                </div>
                            </LinkScroll>
                        </div>
                    </div>

                    <section className="hero-text tw-container md:tw-mx-auto tw-mb-18 tw-px-6 tw-pt-28 md:tw-px-12">
                        <h1 className="tw-text-4xl tw-mb-1 tw-font-extrabold">
                            Hey, I'm{" "}
                            <span className=" tw-text-primary-400">
                                Protoshark
                            </span>
                        </h1>
                        <p className="tw-max-w-sm md:tw-max-w-xl tw-font-medium tw-text-lg tw-text-gray-200">
                            I love to create things to learn something new. I'm
                            always trying my best to put the effective and the
                            pleasant together in each of my projects!
                        </p>
                    </section>
                </div>
                {/* End hero */}

                {/* About */}
                <div
                    id="about"
                    className="wrapper tw-my-16 tw-pt-10 tw-grid tw-place-items-start tw-mb-20"
                >
                    <div className="about tw-w-4/5 md:tw-w-3/5 tw-flex tw-flex-col tw-py-11 tw-bg-gray-900 tw-px-10 tw-rounded-r-2xl tw-shadow-md">
                        <h3 className="tw-font-extrabold tw-self-center tw-text-3xl tw-mb-4 tw-text-gray-100">
                            About me
                        </h3>

                        <div className="about-text tw-flex tw-flex-col tw-items-center md:tw-block">
                            <div className="about-pic tw-ring-1 tw-ring-gray-400 tw-relative tw-p-0 tw-w-32 tw-float-none md:tw-float-right tw-mx-4 tw-mb-6 md:tw-my-0 tw-rounded-2xl tw-overflow-hidden tw-shadow-lg">
                                <img
                                    className="tw-scale-105 tw-transform"
                                    src="https://avatars.githubusercontent.com/u/68879242?v=4"
                                    alt="Profile picture"
                                />
                            </div>
                            <p className="lg:tw-mx-20 tw-text-base tw-text-gray-200">
                                Hello! I'm an in-progress self-taught CS student
                                who loves to create things. I'm looking for a
                                job experience as a web or backend developer,
                                any invite is welcome! I love to learn new
                                things such as compilers, emulators and
                                improving my web development stack (currently
                                focusing on React/Next and Node.js).
                            </p>
                        </div>
                    </div>
                </div>
                {/* End about */}

                {/* Projects */}
                <div className="wrapper tw-w-full tw-flex tw-flex-col tw-items-center tw-min-h-full tw-mb-16 md:tw-mb-20">
                    <div
                        id="projects"
                        className="tw-bg-primary-500 tw-group projects tw-container md:tw-max-w-3xl lg:tw-max-w-6xl tw-py-4 tw-px-4 tw-pb-6 tw-rounded-xl tw-shadow-lg"
                    >
                        <h2 className="section-title tw-ml-2 tw-mb-2 tw-font-extrabold tw-text-gray-900">
                            My Favorite Projects
                        </h2>

                        <div className="main-projects tw-grid tw-grid-flow-row tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-7 tw-gap-y-4">
                            <Card
                                title="PWDeck"
                                description="PWDeck (Password Deck) is a password manager with a CLI interface. You can create a deck (just a cool name for password vault) and manage your passwords in there."
                                badges={[badges.rust]}
                                footer_badges={[
                                    badges.github("protoshark/pwdeck"),
                                ]}
                            />

                            <Card
                                title="CHIP-8"
                                description="CHIP-8 is a emulator (formerly an interpreter) for the CHIP-8 language. It runs on web powered by rust's webassembly compilation. It can also run some games ported to CHIP-8, like Pong and Space Invaders."
                                badges={[
                                    badges.react,
                                    badges.rust,
                                    badges.wasm,
                                ]}
                                footer_badges={[
                                    badges.website(
                                        "https://protoshark.github.io/chip-8"
                                    ),
                                    badges.github("protoshark/chip8_old"),
                                ]}
                            />
                            <Card
                                title="Rustyboy"
                                description="Rustyboy is a gameboy emulator written in rust that runs on your browser."
                                badges={[badges.rust, badges.wasm, badges.js]}
                                footer_badges={[
                                    badges.github("protoshark/rustyboy"),
                                ]}
                                wip={true}
                            />
                        </div>
                    </div>
                    <div className="tw-relative  tw-flex tw-items-center tw-justify-center lg:tw-justify-start tw-col-span-1 md:tw-col-span-2 tw-py-8 md:tw-opacity-60  group-hover:tw-opacity-100 tw-transition-opacity">
                        <Link href="https://github.com/protoshark?tab=repositories">
                            <div className="tw-rounded-md tw-ring-2  tw-px-3 tw-py-2 tw-ring-gray-100 tw-cursor-pointer tw-text-gray-100 tw-opacity-40 md:tw-opacity-40 hover:tw-opacity-90 tw-transition-opacity tw-flex tw-items-center card-description  tw-z-10">
                                <span className=" tw-font-medium tw-text-xl tw-text-center tw-mt-1">
                                    other projects
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
                {/* End projects */}
            </main>
            {/* End main content  */}

            {/* Footer */}
            <footer
                id="footer"
                className="tw-bg-gradient-to-bl tw-border-gray-700 tw-border-l-2 tw-border-r-2 tw-border-t-2 tw-border-solid tw-from-gray-900 tw-to-gray-800 tw-h-1/3 tw-rounded-t-3xl"
            >
                <div className="footer-content tw-relative tw-h-full tw-pt-10 tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center  tw-text-gray-300">
                    <div className="center-footer tw-flex tw-items-center tw-justify-center md:tw-w-1/3">
                        Made with ❤️ in Brazil
                    </div>

                    <div className="right-footer md:tw-w-1/3 contact-email tw-flex tw-flex-row tw-items-center tw-justify-center tw-transition-colors ">
                        <div className="footer-item tw-flex tw-flex-row tw-items-center tw-px-2 hover:tw-text-primary-300">
                            <div className="email-icon ">
                                <IconMail />
                            </div>
                            <a
                                id="contact"
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
        </>
    )
}
