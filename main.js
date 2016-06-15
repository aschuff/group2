// david test
$(document).ready(function(){
  joust.init();
})

var joust = {
  myChar: {},
  enemy: {},
  init: function() {
    joust.styling();
    joust.events();
    charObject.init();
    horseObject.init();
  },

  styling: function() {

  },

  events: function() {
    joust.title();
    joust.chooseChar();
    joust.trashTalk();
    joust.fight();
    joust.gameOver();
  },

  title: function() {
    $('.title-screen').show();
  },

  chooseChar: function() {
    $('.character-screen').show();
      var charName = prompt("Choose your character's name");
      console.log(charName);

    $('.lance-img').on('click', function(){
      event.preventDefault();
      var chosenLance = $(this)
    }

    $('.horse-img').on('click', function(){
      event.preventDefault();
      var chosenHorse = this.chooseHorse($(this).data("horseName"));
      //uhhh... ?
    }
  },
  trashTalk: function(){
    prompt...
  },
  fight: function(){
    choose attack
    calculate health
    check for death
    showboat
  },
  gameOver: function(){
    // check score(health)
    if (myChar > enemy) {
      alert('You Won!')
    }else if (myChar < enemy) {
      alert('You have been defeated.')
    }else {
      alert('Looks like a tie!')
    }
    declare winner
    ((go to next enemy?))
    // play again if lose or win???
    prompt('Would you like to play again?')
  }
  chooseHorse: function(whichHorse){
    var horse = horseObject;
    if (whichHorse === "Mr. Ed"){
        horse = new Horse({speed: 100, name: "Mr. Ed", healthWeapon: "Super-sonic", balanceWeapon: "Rainbow Fart"});
      }
    else if (whichHorse === "Penelope"){
      horse = new Horse({speed:100, name: "Penelope", healthWeapon: "Laser Eyes", balanceWeapon: "Thunder Wings"});
    }
    else if (whichHorse === "Hector"){
      horse = new Horse({speed:100, name: "Hector", healthWeapon: "Fire Breath", balanceWeapon: "Stank Eye"})
    }
    return horse;
  }
}
