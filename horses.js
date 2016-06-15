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
    //
    // function Horse(opts) {
    //   this.name = opts.name;
    //   this.speed = opts.speed;
    //   this.healthWeapon = opts.healthWeapon;
    //   this.balanceWeapon = opts.balanceWeapon;
    //   this.healthWeaponAffect = Math.floor(Math.random() * (14) + 20);
    //   this.balanceWeaponAffect = Math.floor(Math.random() * (14) + 20);
    // }
    // Horse.prototype.affectBalance = function(char) {
    //   char.balance = char.balance - this.balanceWeaponAffect;
    // }
    // Horse.prototype.affectHealth = function(char) {
    //   char.health = char.health - this.healthWeaponAffect;
    // }
  }
}
