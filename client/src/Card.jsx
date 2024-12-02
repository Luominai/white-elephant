import Draggable from "react-draggable"
import { useRef } from "react"

export default function Card({card}) {
    const threshold = useRef(null)

    return (
        <Draggable
        position={{
            x: 0, 
            y: 0
        }}
        onStop={(e, data) => {
            // if the card has moved far enough to be in frame, use it
            if (-1 * data.y >= threshold.current) {
                console.log("card activate")
            }
        }}
        onMouseDown={(e) => {
            // get the position of mouse relative to the card
            const rect = e.target.getBoundingClientRect();
            const y = e.clientY - rect.top;
            // do some math to figure out how much the card needs to move for the cursor to be in frame
            // by default, the card is 10px away from the frame
            threshold.current = 10 + y
        }}
        >   
            <div 
            style={{
                height: "150px",
                width: "100px",
                position: "relative",
                draggable: true
            }}
            >
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
                }}
                >
                    {card.name}
                </div>
            </div>
        </Draggable>
    )
}