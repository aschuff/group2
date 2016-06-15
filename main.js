// david test
$(document).ready(function(){
  joust.init();
})

var joust = {
  myChar: {},
  myHorse: {},
  enemy: {},
  enemyHorse: {},

  init: function() {
    joust.styling();
    joust.events();
  },

  styling: function() {

  },

  events: function() {
    joust.title();
  },

  title: function() {
    //start new game
    $('#newGame').on('click', function(event){
      event.preventDefault();
      $('.titleInWindow').fadeIn().css({"-webkit-transform":"translate(0,-600px)"});
    })
    //to char page
    $('.toCharPage').on('click', function(event){
      event.preventDefault();
      $('.titleInWindow').fadeOut().css({"-webkit-transform":"translate(0,-600px)"});
      joust.chooseChar();
    })

  },

  chooseChar: function() {
    // show inputs for name and lance, and horses
    // var charName = prompt("Choose your character's name");
      //console.log(charName);
      $('.username').on('click', function(event){
            event.preventDefault();
            var $username = $('input[name="name"]').val();
            console.log($username);
            var createChar = charObject.init();
            myChar = createChar($username);
            $(".username").fadeOut();
          });
      $('.lancename').on('click', function(event){
            event.preventDefault();
            var $lancename = $('input[name="lance"]').val();
            console.log($lancename);
            $(".lancename").fadeOut();
            $(".toLancePage").fadeIn();
          });

    // $('.lance-img').on('click', function(){
    //   event.preventDefault();
    //   var chosenLance = $(this)
    // });

    $('.horse-img').on('click', function(){
      event.preventDefault();
      var chosenHorse = this.chooseHorse($(this).data("horseName"));
      //uhhh... ?
    });
  },
  trashTalk: function(){
    var trashStr = prompt("time to trash talk!")
    myChar.trashBoating(trashStr);

  },
  showBoating: function(){
    var showBoatStr = prompt("time to Showboat!")
    myChar.trashBoating(showBoatStr);
  },
  fight: function(){
    // choose attack
    // calculate health
    // check for death
    // showboating
  },
  gameOver: function(){
    // check score(health)
    if (myChar > enemy) {
      alert('You Won! Play again?')
    }else if (myChar < enemy) {
      alert('You have been defeated. Play again?')
    }else {
      alert('Looks like a tie! Play again?')
    }
    // declare winner
    // ((go to next enemy?))
    // play again if lose or win???

    prompt('Would you like to play again?');
  },
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
