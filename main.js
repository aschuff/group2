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
      var chosenHorse = $(this)
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

}
