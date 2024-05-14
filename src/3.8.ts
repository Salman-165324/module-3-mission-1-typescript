{
  class Person {

    getSleep () {

        console.log("Sleep 8 hours"); 
    }
  }

  class Student extends Person {

    getSleep(): void {
         console.log("Sleeps 6 hours")
    }
  }

  class Developer extends Person{

    getSleep(): void {
        console.log("Sleeps 4 hours")
    }
  }


  class Shape {

      calculateArea():number {
        return 0;
      }
  }

  class Rectangle extends Shape{

    width: number; 
    height: number; 

    constructor (width: number, height: number){
        super(); 
        this.width = width; 
        this.height = height; 
    }

    calculateArea(): number {
        
        return this.width * this.height; 
    }
  }

  class Circle extends Shape {

    radius: number; 

    constructor(radius: number){
        super(); 
        this.radius = radius; 
    }

    calculateArea(): number {
        
        return Math.PI * this.radius **2; 
    }
  }
  const person1 = new Developer() ;

  const person2 = new Student () ;
  
  person1.getSleep(); 
  person2.getSleep(); 

  const rectangle1 = new Rectangle(5, 6); 
  console.log(rectangle1.calculateArea()); 

  const circle1 = new Circle(10); 
  console.log(circle1.calculateArea());



}