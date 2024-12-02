import React from 'react';
import TurnOrder from './TurnOrder';
import GiftPile from './GiftPile';
import Hand from './Hand';

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
            <TurnOrder ctx={ctx}/>
            
            <div style={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}>
                <GiftPile G={G} moves={moves}/>
                <Hand G={G} playerID={playerID} moves={moves}/>
            </div>
        </div>
        </>
    )
}