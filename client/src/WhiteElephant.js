import { ActivePlayers, PlayerView, TurnOrder } from 'boardgame.io/core';
import { randomGift } from './Gifts';
import { randomCard, effectMap } from './Cards';

export const WhiteElephant = {
    setup: ({ctx}) => ({ 
        gifts: setupGifts(ctx.numPlayers),
        giftsRemaining: ctx.numPlayers,
        players: setupHands(ctx.numPlayers)
    }),

    turn: {
        activePlayers: {currentPlayer: "action"},
        order: TurnOrder.ONCE,
        stages: {
            action: {
                moves: {
                    playCard: playCard,
                    stealGift: stealGift
                },
                next: "steal"
            },
            steal: {
                moves: {
                    stealGift: stealGift
                }
            }
        },
    },

    phases: {
        play: {
            moves: {
                playCard: playCard,
                stealGift: stealGift
            },
            start: true,
            endIf: ({ G }) => (G.giftsRemaining === 0),
            next: 'end',
        },
        end: {
            moves: {
                playCard: playCard
            }
        },
    },

    endIf: ({ G, ctx }) => {
        
    },
};

function setupGifts(numPlayers) {
    return [...Array(numPlayers)].map((_) => randomGift())
}

function setupHands(numPlayers) {
    const output = {}
    for(let i = 0; i < numPlayers; i++) {
        output[i] = [...Array(3)].map((_) => randomCard())
    }
    return output
}

function playCard({ G, playerID, events}, indexOfCard, indexOfGift = null) {
    const card = G.players[playerID][indexOfCard]
    const effect = effectMap[card.name]
    effect({G: G, gift: G.gifts[indexOfGift]})
    events.endStage()
}

function stealGift({G, playerID, events}, indexOfGift) {
    G.gifts[indexOfGift].owner = playerID
    events.endTurn()
}