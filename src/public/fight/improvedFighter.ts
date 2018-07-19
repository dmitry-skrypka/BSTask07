import Fighter from "./fighter";

export default class ImprovedFighter extends Fighter {
    doubleHit(enemy: Fighter, points: number) {
        super.hit(enemy, points * 2);
    }
}
