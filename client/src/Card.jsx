import { useState } from "react"

export default function Card({card}) {
    const [style, setStyle] = useState({})

    return (
        <div
        onMouseEnter={() => {
            setStyle({top: "-30px"})
        }}
        onMouseLeave={() => {
            setStyle({})
        }}
        >   
            <div style={{
                height: "150px",
                width: "100px",
                position: "relative"
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
                    ...style
                }}
                // onMouseEnter={() => {
                //     setStyle({top: "-30px"})
                // }}
                // onMouseLeave={() => {
                //     setStyle({})
                // }}
                >
                    {card.name}
                </div>
            </div>
        </div>
    )
}