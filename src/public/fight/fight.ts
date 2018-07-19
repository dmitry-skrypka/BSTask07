import Fighter from "./fighter";
import ImprovedFighter from "./improvedFighter";

// import improvedFighter from "./improvedFighter";

async function fight(player1: Fighter, player2: ImprovedFighter, ...rest: number[]) {


    for (let power of rest) {
        player1.hit(player2, power);
        if (player2.health <= 0) {
            await player1.knockout(player2);
            return;
        }
        player2.doubleHit(player1, power);
        if (player1.health <= 0) {
            await player2.knockout(player1);
            return;
        }
    }

    const draw = await new Fighter("draw", 0, 0).knockout("draw");
    console.log(draw)
}


export default fight;
