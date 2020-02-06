import $ from 'jquery';
import { Character } from './js/character';
import { Type } from './js/type';



$(document).ready(function() {
    let type = new Type('warrior');
    let character = new Character(2,2,2, type);
    character.setCurrentExperience(100);

   // console.log(character.skills[0]() + " char skills");
});