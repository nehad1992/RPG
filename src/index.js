import $ from 'jquery';
import { Character } from './js/character';



$(document).ready(function() {
    let character = new Character(2,2,2);
    character.setCurrentExperience(100);

});