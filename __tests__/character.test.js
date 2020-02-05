import { Character } from './../src/js/character.js';

describe('Character', () => {

  test('Should be able to make a character object', () => {
    let vitality = 5;
    let strength = 5;
    let intelligence = 10;
    let character = new Character(vitality, intelligence, strength);
    expect(character instanceof Character).toEqual(true);
  });
});