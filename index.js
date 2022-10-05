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
      return this.getData().map(data => {
         return this[data] ? `${data}: <b>${this[data]}</b>` : ` ${data}: <i>unknown</i>`
      });
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
   constructor(name, age, gender, nationality, country, saying){
      super(name, 'human', age, gender, saying);
      this.leg = 2;
      this.nationality = nationality;
      this.country = country;
   }
   showCountryInfo(){
      return  `I from ${this.country ? this.country : 'unknown country'} and I'm ${this.nationality ? this.nationality : 'stateless'}`;
   }
   getData(){
      return super.getData().concat('leg', 'nationality', 'country')
   }
}

class Man extends Human {
   constructor(name, age, nationality, country, saying, achievement){
      super(name, age, 'male', nationality, country, saying, achievement);
   }
}
class Women extends Human {
   constructor(name, age, nationality, country, saying, achievement,){
      super(name, age, 'female', nationality, country, saying, achievement);
   }
}

class Animal extends Creature {
   constructor(name, age, gender, saying){
      super(name, 'animal', gender, age, saying);
   }
}
class Cat extends Animal {
   constructor(name, gender, age, saying){
      super(name, gender, age, saying);
      this.leg = 4;
      this.type = 'cat';
   }
   getData(){
      return super.getData().concat('leg', 'type');
   }
}
class Dog extends Animal {
   constructor(name, gender, age, saying){
      super(name, gender, age, saying);
      this.leg = 4;
      this.type = 'dog';
   }
   getData(){
      return super.getData().concat('leg', 'type');
   }
}
class Shark extends Animal {
   constructor(name, gender, age, saying){
      super(name, gender, age, saying);
      this.gills = 1;
      this.type = 'shark';
   }
   getData(){
      return super.getData().concat('gills', 'type');
   }
}
class CatWomen extends Women{
   constructor(name, age){
      super(name, age);
      this.species = 'cat-human';
      this.saying = new Cat().saying;
   }
}



const person1 = new Man('Stepan', 33,'Ukrainian', 'Ukraine', 'Привіт');
const person2 = new Women('Hanna', 26,'Ukrainian', 'Ukraine', 'Добрий вечір');
const person3 = new Man('Bill', 42, 'British', 'Great Britain', 'Hello everybody!');

person3.addAchievement(['Initiated a company-sponsored mentor program to help 15 at-risk teenagers in the area', 'Increased revenue by 10% using data analysis best practices'])

const catBarsic = new Cat('Barsik', 'male', 3, 'meow-meow');
const dogOlivia = new Dog('Olivia', 'female', 8, 'woof-woof');
const sharkArnold = new Shark('Arnold', 'male', 38, 'br-br');
sharkArnold.addAchievement(['This shark ate 5 people', 'This shark created 1500 children']);
const catWomenKira = new CatWomen('Kira', 25);
const listPerson = [person1, person2, person3, catBarsic, dogOlivia, sharkArnold, catWomenKira];

listPerson.forEach(person => {
   print(person.showData());
   print(person.showCountryInfo ? person.showCountryInfo() : '');
   print(`${person.showAchievement ? person.showAchievement() : ''}  <hr>`);
})

