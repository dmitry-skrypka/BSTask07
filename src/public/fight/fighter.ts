// Create class Fighter
export interface IFighter {

    health: number;
    power: number;
    hit: (enemy: Fighter, point: number) => number;
    knockout: (fighter: any) => {};
}


export default class Fighter implements IFighter {


    constructor(private name: string, public health: number, public power: number) {

    }

    hit(enemy: Fighter, point: number): number {
        let damage: number = point * this.power;
        return enemy.setDamage(damage);
    }

    knockout(fighter: any) {
        return new Promise(function (resolve) {
            console.log("time is over");
            setTimeout(function () {
                resolve(fighter);
            }, 1500);
        }).then(
            function (fighter: any): void {
                if (fighter === "draw") {
                    console.log("Draw! Fight is over.");
                } else console.log(`${fighter.name} Loss!`);
            }.bind(this)
        );
    }

    private setDamage(damage: number): number {

        let newHealth: number = this.health - damage;
        console.log(this.health);
        console.log(`${this.name} HP: ${newHealth}`);
        return (this.health = newHealth);
    }


}


