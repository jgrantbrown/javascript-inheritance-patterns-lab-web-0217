function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return("(" + this.x + "," + this.y + ")");
}

function Side(length) {
  this.length = length;
}

function Shape(){}

Shape.prototype.addToPlane = function (x,y) {
  this.position= new Point(x,y);
};

Shape.prototype.move = function (x,y) {
  this.position = new Point(x,y);
};

// CIrcle COnstructors inherits from shape
    function Circle (radius){
      Shape.call(this);
      this.radius = radius

    }

    Circle.prototype = Object.create(Shape.prototype)
    Circle.prototype.constructor = Circle;

    Circle.prototype.diameter = function() {
      return(this.radius*2)
    }

    Circle.prototype.area= function() {
      return(Math.PI * this.radius^2)
    }
    Circle.prototype.circumference=function(){
      return(2 * Math.PI * this.radius)
    }

// Polygon constructor sides is array of side lengths inherits from SHape
    function Polygon (sides){
      Shape.call(this);
      this.sides= sides
    }
    Polygon.prototype = Object.create(Shape.prototype);

    // Add all length of sides from sides array
    Polygon.prototype.perimeter = function() {
      var p = 0;
      for(var i=0;i< this.sides.length; i++) {
        p += this.sides[i].length;
      }
      return(p);
    }

    // Length in numofsides is count of the array sides
    Polygon.prototype.numberOfSides= function(){
      return (this.sides.length);
    }

// Quadrilateral constructor inherits from Polygon

  function Quadrilateral (sideOneLength, sideTwoLength, sideThreeLength, sideFourLength){
    Polygon.call(this,[new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength), new Side(sideFourLength)]);
  }

  Quadrilateral.prototype = Object.create(Polygon.prototype);
  Quadrilateral.prototype.constructor = Quadrilateral;

// Triangle constructor inherit form Polygon

  function Triangle(sideOneLength, sideTwoLength, sideThreeLength) {
    Polygon.call(this, [new Side(sideOneLength), new Side(sideTwoLength), new Side(sideThreeLength)])
  }

  Triangle.prototype = Object.create(Polygon.prototype);
  Triangle.prototype.constructor = Triangle;

// Recgtangle constructor inherit from Quadrilateral

  function Rectangle(width, height) {
    Quadrilateral.call(this, width, height, width, height);
    this.width = width;
    this.height = height;
  }
  Rectangle.prototype = Object.create(Quadrilateral.prototype);
  Rectangle.prototype.constructor = Rectangle
  Rectangle.prototype.area = function() {
    return this.width * this.height;
  }

// Square constructor inherits from Rectangle

  function Square(length){
    Rectangle.call(this,length,length)
    this.length= length
  }

  Square.prototype = Object.create(Rectangle.prototype);
  Square.prototype.constructor = Square

  Square.prototype.listProperties=function(){
    var props= "";
    for (var prop in this) {
    if(this.hasOwnProperty(prop)) {
      props += "this." + prop + " = " + this[prop] + "\n";
    }
  }
  return(props);
  }
