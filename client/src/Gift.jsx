import present from "./assets/present.png"
import { useState } from "react"

export default function Gift({gift}) {
    const [style, setStyle] = useState({})

    const image = gift.revealed ? gift.image : present
    const name = gift.revealed ? gift.name : "???"
    const price = gift.revealed ? gift.price : "???"
    
    return (
        <div 
        style={{
            display: "flex", flexDirection: "column", justifyContent: "center",
            height: "160px", width: "160px",
            position: "relative",
            border: "1px solid black",
            transition: "box-shadow .2s",
            ...style
        }}
        onMouseEnter={() => {
            setStyle({boxShadow: "inset 0px 0px 5px green"})
        }}
        onMouseLeave={() => {
            setStyle({})
        }}
        onMouseDown={() => {
            setStyle({backgroundColor: "lightgray"})
        }}
        onMouseUp={() => {
            setStyle({backgroundColor: "white"})
        }}
        >
            <img src={image} style={{
                maxHeight: "70%", maxWidth: "70%",
                margin: "auto",
                marginBottom: "0px"
            }}></img>
            <div style={{
                textAlign: "center"
            }}>
                {name}
            </div>
            <div style={{
                position: "absolute", 
                bottom: "85%", 
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
            }}>
                <div style={{
                    marginLeft: "5%"
                }}>
                    {gift.owner}
                </div>
                <div style={{
                    fontWeight: "bold", color: "green",
                    textAlign: "end",
                    marginRight: "5%"
                }}>
                    {price}
                </div>
            </div>
        </div>
    )
}