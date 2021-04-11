const Tooltip = ({ position, width, children }) => {
    return (
        <span
            className={`tooltip tooltip-${position} tw-text-xs tw-font-bold`}
            style={{ width }}
        >
            {children}
        </span>
    )
}

export default Tooltip
