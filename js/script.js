" use strict ";
class Pet{
  constructor(name){
    this.name = name;
  }
  speak(){
    return "Hello";
  }
}
class Dog extends Pet {
  speak(){
    return "Bark";
  }
}
class Cat extends Pet {
  speak(){
    return  "Meow";
  }
}
class Bird extends Pet{
  speak(){
    return "Sqwak";
  }
}
class Dragon extends Pet {
  speak(){
    return "Fire";
  }
}

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird, dragon)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var speech;
     switch (type) {
        case "dog":
        var d = new Dog(name);
          speech = d.speak();
          break;
        case "cat":
        var d = new Cat(name);
          speech = d.speak();
          break;
        case "bird":
        var d = new Bird(name);
          speech = d.speak();
          break;
        case "dragon":
        var d = new Dragon(name);
          speech = d.speak();
          break;
        default:
        var d = new Pet(name);
          speech = d.speak();
          break;

      }
      var textOut = type + ": " + name + "says " + speech+"<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
