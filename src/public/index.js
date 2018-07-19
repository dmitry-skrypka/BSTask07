"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
const fight_1 = require("./fight/fight");
const fighter_1 = require("./fight/fighter");
const improvedFighter_1 = require("./fight/improvedFighter");
const f1 = new fighter_1.default("Fighter", 100, 1);
const f2 = new improvedFighter_1.default("ImprovedFighter", 100, 1);
fight_1.default(f1, f2, 10, 11, 20, 38);
//# sourceMappingURL=index.js.map