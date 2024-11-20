import React from 'react';
import Gift from './Gift';
import Card from './Card';

export function WhiteElephantBoard({ ctx, G, moves, playerID}) {
    console.log(G.players, playerID)
    return (
        <>
        <div style={{
            display: "flex",
            alignItems: "flex-start",
            height: "98vh",
            marginTop: "2vh",
        }}>
            <div style={{
                // height: "100vh",
                width: "20px",
                textAlign: "start",
                marginRight: "10px"
            }}>
                {ctx.playOrder.map((val, index) => {
                    if (index === ctx.playOrderPos) {
                        return (
                            <div style={{color: "green", fontWeight: "bold"}}>
                                {">" + val}
                            </div>
                        )
                    }
                    else {
                        return (
                            <div>
                                {val}
                            </div>
                        )
                    }
                })}
            </div>
            
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}>

                <div style={{
                    height: "80vh",
                    width: "380px",
                    border: "1px solid lightgray",
                    display: "flex",
                    alignItems: "start",
                    justifyContent: "center",
                    overflow:"scroll"
                }}>
                    <div style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "5px",
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        {G.gifts.map((gift, index) => {
                            return (
                                <div style={{cursor: "pointer"}} onClick={() => {
                                    moves.stealGift(index)
                                }}>
                                    <Gift gift={gift}/>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    width: "100%",
                    // backgroundColor: "lightblue",
                    marginBottom: "5%",
                    flexGrow: 1,
                    overflowY: "visible"
                }}>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(10px,max-content))",
                        width: "50%"
                    }}>
                        {G.players[playerID]?.map((card) => {
                            return (
                                <>
                                    <Card card={card}/>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}