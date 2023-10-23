const Scroll = ({ children }) => {
    console.log(children)
    return (
        <div style={{ overflowY: "scroll", border: "5px solid black", height: "440px" }}>
            {children}
        </div>
    )
}

export default Scroll;