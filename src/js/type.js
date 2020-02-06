export class Type {
    constructor(typeOfCharacter) {
         this.name = typeOfCharacter;
         this.vitality;
         this.strength;
         this.intelligence;
         this.skills;
        if(this.name === 'warrior') {
            this.vitality = 10;
            this.strength = 10;
            this.intelligence = 1;
            this.skills = [ (function swingSword() {
                return 2 * 2;
            }),
             (function throwSword(strength) {
                console.log(strength * 3);
            })
        ];
        } else {
            this.vitality = 5;
            this.strength = 5;
            this.intelligence = 10;
            this.skills = [ (function fireball(intelligence) {
                console.log(intelligence * 3);
            }), (function blizzard(intelligence) {
                console.log(intelligence * 5);
            })];
        }
    }
    getVitality() {
        return this.vitality;
    }
    getStrength () {
        return this.strength;
    }
    getIntelligence() {
        return this.intelligence;
    }
    
}