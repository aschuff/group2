//object literal & constructer function

//define attr & protypes

var charObject = {
  init: function() {

    function Character(opts) {
      this.name = opts && opts.name ? opts.name : "Thor";
      this.health = 100;
      this.balance = 100;
      this.lance = opts && opts.name ? opts.lance : "Rusty Lance";
    }
    Character.prototype.trashBoating = function(str) {
      console.log(`${this.name}: ${str}`);
    }

  }
}
