export default function Tooltip({ position, width, text }) {
    return <span className={`tooltip tooltip-${position} tw-text-xs tw-font-bold`} style={{width}}>{text}</span>
}
