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
    $('.title-screen').show
  },

  chooseChar: function() {
    $('.character-screen').show
    prompt..... for name
    $('.lance-img').on('click', function(){
      choose lance (from pictures)
    }
    $('.horse-img').on('click', function(){
      choose horse (from pictures)
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
    check score(health)
    declare winner
    ((go to next enemy?))
    play again if lose or win???
  }

}
