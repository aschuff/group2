//object literal & constructer function

//define attr & protypes

var horseObject = {
  init: function() {

    class Horse {
      constructor(opts) {
        this.name = opts.name;
        this.speed = opts.speed;
        this.healthWeapon = opts.healthWeapon;
        this.balanceWeapon = opts.balanceWeapon;
        this.healthWeaponAffect = Math.floor(Math.random() * (14) + 20);
        this.balanceWeaponAffect = Math.floor(Math.random() * (14) + 20);
      }

      affectBalance(char){
        char.balance = char.balance - this.balanceWeaponAffect;
      }
      affectHealth(char){
        char.health = char.health - this.healthWeaponAffect;
      }
    }

    function createHorse(props) {
      return new Horse(props);
    }


    return createHorse;
  }
}
