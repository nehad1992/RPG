import {Type} from '../src/js/type.js';

describe('Type', () => {
    test('should be able to increase the vitality, strength, intelligence based on character', () => {
        let typeOfCharacter = 'warrior' ; 
        let type = new Type(typeOfCharacter);
        expect(type.name).toEqual("wizard");
    })
});