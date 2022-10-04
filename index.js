import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/dd44it/a-tiny-JS-world
   Web app: https://dd44it.github.io/a-tiny-JS-world
   */

class Creature {
   constructor(name, species, age, gender){
      this.name = name;
      this.species = species;
      this.age = age;
      this.gender = gender;
   }
}

class Human extends Creature {
   constructor(name, age, leg, gender, nationality, country){
      super(name, 'human', age, gender);
      this.leg = leg;
      this.nationality = nationality;
      this.country = country;
      this.achievement = [];
   }
   introduce(){
      return `Hello my name is ${this.name} and I'm ${this.age} years old.`;
   }
   showCountryInfo(){
      return `I from ${this.country} and I'm ${this.nationality}`;
   }
}

class Man extends Human {
   constructor(name, age, nationality, country, achievement){
      super(name, age, 2, 'male', nationality, country, achievement);
   }
}
class Women extends Human {
   constructor(name, age, nationality, country, achievement){
      super(name, age, 2, 'female', nationality, country, achievement);
   }
}

const person1 = new Man('Stepan', 33,'Ukrainian', 'Ukraine')
const person2 = new Women('Hanna', 26,'Ukrainian', 'Ukraine')

console.log(person1)
console.log(person2)
