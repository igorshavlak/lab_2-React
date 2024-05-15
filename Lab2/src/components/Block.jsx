
export default function Block({bg_color, children}) {
    const classes = bg_color + " w-1/2 relative";
    return (
        <div className={classes}>
            {children}
        </div>
    )
}