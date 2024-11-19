import React from 'react';
import Gift from './Gift';

export function WhiteElephantBoard({ ctx, G, moves }) {
    console.log(G.gifts)
    G.gifts.map((gift) => console.log(gift))
    return (
        <>
        <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            alignItems: "center"
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
        </>
    )
}