import { useState } from "react"

export default function Card({card}) {
    const [style, setStyle] = useState({})
    const [storedPos, setStoredPos] = useState({})
    const [offset, setOffset] = useState({})
    const [dragging, setDragging] = useState(false)

    return (
        <div
        onMouseEnter={() => {
            setStyle({top: "-30px"})
        }}
        onMouseLeave={() => {
            setStyle({})
            setDragging(false)
        }}
        onMouseDown={(e) => {
            setStyle({position: "absolute", top: -30, left: 0})
            setDragging(true)
        }}
        onMouseMove={(e) => {
            if (dragging) {
                console.log(e.movementX, e.movementY)
                setStyle({...style, top: style.top += e.movementY, left: style.left += e.movementX})
            }
        }}
        >   
            <div style={{
                height: "150px",
                width: "100px",
                position: "relative",
            }}>
                <div style={{
                    height: "150px",
                    width: "100px",
                    border: "1px solid black",
                    backgroundColor: "white",
                    textAlign: "center",
                    fontSize: "12px",
                    position: "relative", 
                    transition: "top .2s",
                    top: "10px",
                    cursor: "pointer",
                    ...style,
                    ...offset
                }}
                >
                    {card.name}
                </div>
            </div>
        </div>
    )
}