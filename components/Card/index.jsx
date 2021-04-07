import { wip as WipBadge } from "../../utils/badges"

export default function Card({
    badges,
    title,
    description,
    footer_badges,
    wip,
}) {
    return (
        <div
            id="card"
            className="tw-relative tw-pb-8  tw-bg-gray-900  tw-flex tw-flex-col  tw-rounded-lg tw-shadow-xl"
        >
            {/* <div className="project-image tw-h-40 tw-flex tw-items-center tw-bg-gradient-to-tl tw-from-gray-900 tw-to-yellow-900" /> */}

            <div className="projectInitial tw-overflow-hidden tw-opacity-40 tw-select-none tw-absolute tw-w-full tw-h-full tw-bg-gradient-to-br tw-from-gray-500 tw-to-gray-800 tw-grid tw-bg-clip-text">
                <h1
                    className="tw-text-gray-900 tw-uppercase tw-ml-20 tw-text-opacity-60 tw-whitespace-nowrap tw-place-self-end tw-mb-12"
                    style={{ fontSize: "12rem" }}
                >
                    {title}
                </h1>
            </div>

            <section className="card-description tw-px-2 tw-pt-8 tw-z-10">
                <div className="project-name tw-flex tw-flex-row tw-justify-between tw-items-center">
                    <h3>{title}</h3>

                    <div className="badges tw-text-gray-200 tw-flex">
                        {wip && (
                            <div className="badge has-tooltip tw-rounded-full tw-bg-opacity-40 tw-bg-yellow-400 tw-p-2 tw-mx-1 tw-text-yellow-400">
                                {WipBadge.icon}
                                {WipBadge.tooltip}
                            </div>
                        )}

                        {badges &&
                            badges.map((badge) => (
                                <div key={badge.name} className="badge has-tooltip tw-rounded-full tw-bg-opacity-40 tw-bg-gray-600 tw-p-2 tw-mx-1">
                                    {badge.icon}
                                    {badge.tooltip}
                                </div>
                            ))}
                    </div>
                </div>

                <p className="card-description-text tw-py-3 tw-text-gray-400">
                    {description}
                </p>
                <div className="card-footer tw-absolute tw-bottom-0 tw-right-0 tw-flex tw-flex-row tw-pb-2 tw-pr-2">
                    {footer_badges && (
                        <div className="badges tw-text-yellow-800 tw-flex">
                            {footer_badges.map((badge) => (
                                <a
                                    key={badge.name}
                                    target="_blank"
                                    rel="noopener"
                                    href={badge.link}
                                    className="badge has-tooltip tw-rounded-full tw-bg-yellow-400 tw-p-2 tw-mx-1"
                                >
                                    {badge.icon}
                                    {badge.tooltip}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </section>
        </div>
    )
}
