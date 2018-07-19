"use strict";
Object.defineProperty(exports, "__esModule", {value: true});

class Fighter {
    constructor(name, health, power) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    setDamage(damage) {
        let newHealth = this.health - damage;
        console.log(this.health);
        console.log(`${this.name} HP: ${newHealth}`);
        return (this.health = newHealth);
    }

    hit(enemy, point) {
        let damage = point * this.power;
        return enemy.setDamage(damage);
    }

    knockout(fighter) {
        return new Promise(function (resolve) {
            console.log("time is over");
            setTimeout(function () {
                resolve(fighter);
            }, 1500);
        }).then(function (fighter) {
            if (fighter === "draw") {
                console.log("Draw! Fight is over.");
            }
            else
                console.log(`${fighter.name} Loss!`);
        }.bind(this));
    }
}

exports.default = Fighter;
//# sourceMappingURL=fighter.js.map