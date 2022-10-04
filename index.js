import { print } from './js/lib.js';
/* Refer to https://github.com/OleksiyRudenko/a-tiny-JS-world for the task details
   Complete the below for code reviewers' convenience:

   Code repository: https://github.com/dd44it/a-tiny-JS-world
   Web app: https://dd44it.github.io/a-tiny-JS-world
   */

class Creature {
   constructor(name, species, age, gender, saying){
      this.name = name;
      this.species = species;
      this.age = age;
      this.gender = gender;
      this.achievement = [];
      this.saying = saying;
   }
   getData(){
      return ['name', 'species', 'age', 'gender', 'saying'];
   }
   showData(){
      return this.getData().map(data => `${data}: <b>${this[data] }</b>`);
   }
   introduce(){
      return `Hello my name is ${this.name} and I'm ${this.age} years old.`;
   }
   addAchievement(achievements){
      for(let achieve of achievements){
         this.achievement.push(achieve);
      }
   }
   showAchievement(){
      return this.achievement.length ? `Achievement, creature by ${this.name}: ${this.achievement.join('. ')}` : `This creature ${this.name} doesn't exist any achievements`
   }
}

class Human extends Creature {
   constructor(name, age, leg, gender, nationality, country, saying){
      super(name, 'human', age, gender, saying);
      this.leg = leg;
      this.nationality = nationality;
      this.country = country;
   }
   showCountryInfo(){
      return `I from ${this.country} and I'm ${this.nationality}`;
   }
   getData(){
      return super.getData().concat('leg', 'nationality', 'country')
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

class Cat extends Creature{
   constructor(name, gender, age, saying){
      super(name, 'animal', gender, age, saying)
      this.leg = 4;
   }
}
class Dog extends Creature{
   constructor(name, gender, age, saying){
      super(name, 'animal', gender, age, saying)
      this.leg = 4;
   }
}



const person1 = new Man('Stepan', 33,'Ukrainian', 'Ukraine', 'Привіт');
const person2 = new Women('Hanna', 26,'Ukrainian', 'Ukraine', 'Добрий вечір');
const person3 = new Man('Bill', 42, 'British', 'Great Britain', 'Hello everybody!');

person3.addAchievement(['Initiated a company-sponsored mentor program to help 15 at-risk teenagers in the area', 'Increased revenue by 10% using data analysis best practices'])

const catBarsic = new Cat('Barsik', 'male', 3, 'meow-meow');
const dogOlivia = new Dog('Olivia', 'female', 8, 'woof-woof');

const listPerson = [person1, person2, person3, catBarsic, dogOlivia];

listPerson.forEach(person => {
   print(person.showData());
   print(person.showCountryInfo ? person.showCountryInfo() : '');
   print(`${person.showAchievement ? person.showAchievement() : ''}  <hr>`);
})

