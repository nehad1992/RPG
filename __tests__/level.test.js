import { Level } from '../src/js/level.js';

describe('Level', () => {

    test('Should be able to make a level object', () => {
      let id = 1;
      let experience = 100;

      let level = new Level();
      expect(level instanceof Level).toEqual(true);
    });

    test('Should be able to make a persist id and experience to the level object', () => {
        let id = 1;
        let experience = 100;

        let level = new Level(id, experience);
        let idFromLevelObject = level.id;
        let experienceFromLevelObject = level.experience;
    
        expect(id).toEqual(idFromLevelObject);
        expect(experience).toEqual(experienceFromLevelObject);
      });
      test('should be able to change experience with change in level number', () => {
        let levelId = 1;
        let experience = 100 ;
        let firstLevel =  new Level(levelId, experience);
        
        firstLevel = firstLevel.changeLevel(); 
        expect(firstLevel.experience).toEqual(200);
        expect(firstLevel.id).toEqual(2);
      });
      test('should be able to change experience with change in level number', () => {
        let levelId = 1;
        let experience = 100 ;
        let firstLevel =  new Level(levelId, experience);
        
        let experienceFromLevelObject = firstLevel.getExperience();
        expect(experience).toEqual(experienceFromLevelObject);
      });
  });