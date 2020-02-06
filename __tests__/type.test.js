import {Type} from '../src/js/type.js';

describe('Type', () => {
    test('should be able to determine the character', () => {
        let typeOfCharacter = 'warrior' ; 
        let type = new Type(typeOfCharacter);
        expect(type.name).toEqual(typeOfCharacter)
    })
});