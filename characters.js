//object literal & constructer function

//define attr & protypes

var charObject = {
  init: function() {

    function Character(opts) {
      this.name = opts.name;
      this.health = 100;
      this.balance = 100;
      this.lance = opts.lance;
    }
    Character.prototype.trashBoating = function(str) {
      console.log(`${this.name}: ${str}`);
    }
    
  }
}
