export class Type {
    constructor(typeOfCharacter) {
         this.name = typeOfCharacter;
        if(name === 'warrior') {
            this.vitality = 10;
            this.strength = 10;
            this.intelligence = 1;
        } else {
            this.vitality = 5;
            this.strength = 5;
            this.intelligence = 10;
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