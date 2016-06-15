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
    var trashStr = prompt("time to trash talk!")
    myChar.trashBoat(trashStr);

  },
  showBoating: function(){
    var showBoatStr = prompt("time to Showboat!")
    myChar.trashBoat(showBoatStr);
  }
  fight: function(){
    choose attack
    calculate health
    check for death
    showboating
  },
  gameOver: function(){
    check score(health)
    declare winner
    ((go to next enemy?))
    // play again if lose or win???

  }

}
