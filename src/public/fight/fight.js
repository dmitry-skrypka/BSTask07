"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : new P(function (resolve) {
                resolve(result.value);
            }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {value: true});
const fighter_1 = require("./fighter");

function fight(player1, player2, ...rest) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let power of rest) {
            player1.hit(player2, power);
            if (player2.health <= 0) {
                yield player1.knockout(player2);
                return;
            }
            player2.doubleHit(player1, power);
            if (player1.health <= 0) {
                yield player2.knockout(player1);
                return;
            }
        }
        const draw = yield new fighter_1.default("draw", 0, 0).knockout("draw");
        console.log(draw);
    });
}

exports.default = fight;
//# sourceMappingURL=fight.js.map