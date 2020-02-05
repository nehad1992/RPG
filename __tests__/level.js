import { Level } from './../src/js/level.js';

describe('Level', () => {

    test('Should be able to make a level object', () => {
      let id = 0;
      let experience = 100;

      let level = new Level();
      expect(level instanceof Level).toEqual(true);
    });
  });