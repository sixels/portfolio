import Head from "next/head"
import {
    FiGithub as IconGH,
    FiMail as IconMail,
    FiGlobe as IconGlobe,
} from "react-icons/fi"

import Card from "../components/Card"
import Sidebar from "../components/Sidebar"

import * as badges from "../utils/badges"

export default function Home() {
    return (
        <div className="tw-w-full tw-max-w-screen tw-h-full tw-relative tw-flex tw-flex-col">
            <Head>
                <title> Protofolio </title>
                <link
                    rel="preload"
                    href="/fonts/Epilogue/Epilogue.woff2"
                    as="font"
                    crossOrigin=""
                />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width, user-scalable=no"
                />
            </Head>

            <Sidebar />

            {/* Main content */}
            <main className="tw-min-h-full tw-ml-16 content tw-text-gray-100">
                {/* Hero */}
                <div
                    id="about"
                    className="hero tw-h-4/5 tw-flex tw-flex-col tw-justify-center tw-bg-gradient-to-b tw-from-gray-900 tw-to-gray-800"
                >
                    <section className="hero-text tw-container md:tw-mx-auto tw-mb-18 tw-px-6 tw-pt-28 md:tw-px-12">
                        <h1 className="tw-text-4xl tw-mb-1 tw-font-extrabold">
                            Hey, I'm{" "}
                            <a className=" tw-text-yellow-400">Protoshark</a>
                        </h1>
                        <p className="tw-max-w-2xl md:tw-max-w-xl tw-font-medium tw-text-lg">
                            I love to create things to learn something new. I'm
                            always trying my best to put the effective and the
                            pleasant together in each of my projects!
                        </p>
                    </section>
                </div>
                {/* End hero */}

                {/* Projects */}
                <div
                    id="projects"
                    className="wrapper tw-min-h-full tw-grid tw-place-items-center"
                >
                    <div className="tw-bg-yellow-500 projects tw-container md:tw-max-w-3xl lg:tw-max-w-6xl tw-mx-auto tw-my-8 lg:tw-my-0 tw-py-4 tw-px-4 tw-pb-3 tw-rounded-xl tw-shadow-xl">
                        <h2 className="section-title tw-ml-2 tw-mb-2 tw-font-extrabold tw-text-yellow-900">
                            My Favorite Projects
                        </h2>

                        <div className="main-projects tw-grid tw-grid-flow-row tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-x-6 tw-gap-y-4">
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
                                title="Cello"
                                description="Cello is a linux floating Window Manager designed under the KISS concept."
                                badges={[badges.clang]}
                                footer_badges={[
                                    badges.github("vnteles/cellowm"),
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

                            <a
                                id="card"
                                href="/projects"
                                target="_blank"
                                rel="noopener"
                                className="tw-cursor-pointer tw-relative tw-py-8 tw-overflow-hidden tw-bg-gray-200 tw-bg-opacity-100 tw-flex tw-flex-col  tw-rounded-lg tw-shadow-xl"
                            >
                                <section className="card-description tw-grid tw-place-items-center tw-px-2 tw-pt-4 tw-z-10">
                                    <h1 className="more tw-text-gray-900 tw-text-5xl tw-text-center ">
                                        Check Out{" "}
                                        <a className="tw-text-yellow-500 tw-p-0 tw-m-0">
                                            More!
                                        </a>
                                    </h1>
                                </section>
                            </a>
                        </div>
                    </div>
                </div>
                {/* End projects */}

                {/* Skills */}
                <div
                    id="skills"
                    className="wrapper tw-min-h-full tw-grid"
                >
                    <div className="skills tw-py-4 tw-container tw-px-4 tw-mx-auto md:tw-max-w-3xl lg:tw-max-w-6xl">
                        <h2 className="section-title tw-ml-2 tw-mb-2 tw-font-extrabold tw-text-red-200">
                            Skills
                        </h2>

                        javascript
                    </div>
                </div>
                {/* End skills */}

                {/* Footer */}
                <footer
                    id="footer"
                    className="tw-bg-gradient-to-bl tw-border-gray-700 tw-border-l-2 tw-border-t-2 tw-border-solid tw-from-gray-900 tw-to-gray-800 tw-h-1/3 tw-rounded-tl-3xl"
                >
                    <div className="footer-content tw-relative tw-h-full tw-pt-10 tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-items-center  tw-text-gray-600">
                        <div className="center-footer tw-flex tw-items-center tw-justify-center md:tw-w-1/3">
                            Made with ❤️ in Brazil
                        </div>

                        <div className="right-footer md:tw-w-1/3 contact-email tw-flex tw-flex-row tw-items-center tw-justify-center tw-transition-colors ">
                            <div className="footer-item tw-flex tw-flex-row tw-items-center tw-px-2 hover:tw-text-yellow-300">
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
