import React from 'react';
import Gift from './Gift';

export function WhiteElephantBoard({ ctx, G, moves }) {
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
                textAlign: "end",
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
                height: "100%"
            }}>

                <div style={{
                    height: "60vh",
                    maxWidth: "380px",
                    border: "1px solid lightgray",
                    display: "flex",
                    alignItems: "start",
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
                                    {Gift({gift: gift})}
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    width: "100%",
                    backgroundColor: "lightblue",
                    marginTop: "5%", marginBottom: "5%",
                    flexGrow: 1
                }}>
                    hello
                </div>
            </div>
        </div>
        </>
    )
}