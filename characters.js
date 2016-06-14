//object literal & constructer function

//define attr & protypes 

var charObject = {
  init: function() {

    function Character(opts) {
      this.name = opts.name;
    }

    Character.prototype.sayHello = function() {

    }
  }
}
