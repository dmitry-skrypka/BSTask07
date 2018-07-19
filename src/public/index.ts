import fight from "./fight/fight";

import Fighter from "./fight/fighter";
import ImprovedFighter from "./fight/improvedFighter";
// create two instances
const f1 = new Fighter("Fighter", 100, 1);

const f2 = new ImprovedFighter("ImprovedFighter", 100, 1);

// call fight function

// debugger
// Fight function(Fighter, improvedFighter, ...damage points)
fight(f1, f2, 10, 11, 20, 38);
