import { Character } from './../src/js/character.js';

describe('Character', () => {

  test('Should be able to make a character object', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    let character = new Character(vitality, intelligence, strength);
    expect(character instanceof Character).toEqual(true);
  });

  test('Should be able to make a persist the vitality, intelligence, and strength values to a Character object', () => {
    let vitality = 5;
    let intelligence = 10;
    let strength = 5;
    
    let character = new Character(vitality, intelligence, strength);
    let vitalityFromCharacterObject = character.vitality;
    let intelligenceFromCharacterOject = character.intelligence;
    let strengthFromCharacterObject = character.strength;

    expect(vitality).toEqual(vitalityFromCharacterObject);
    expect(intelligence).toEqual(intelligenceFromCharacterOject);
    expect(strength).toEqual(strengthFromCharacterObject);
  });
});