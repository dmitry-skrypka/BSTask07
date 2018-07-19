"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const fighter_1 = require("./fighter");

class ImprovedFighter extends fighter_1.default {
    doubleHit(enemy, points) {
        super.hit(enemy, points * 2);
    }
}

exports.default = ImprovedFighter;
//# sourceMappingURL=improvedFighter.js.map