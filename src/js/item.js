export class Item {
    constructor(strengthReq, intelligenceReq) {
        this.strengthReq = strengthReq;
        this.intelligenceReq = intelligenceReq;
        this.strength = strengthReq * 2;
        this.intelligence = intelligenceReq * 2;
    }

    getStrength() {
        return this.strength;
    }
    getIntelligence() {
        return this.intelligence;
    }

    getStrengthReq() {
        return this.strengthReq;
    }
    getIntelligenceReq() {
        return this.intelligenceReq;
    }

}