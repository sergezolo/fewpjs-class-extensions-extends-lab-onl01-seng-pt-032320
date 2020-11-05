class Polygon {
    constructor(array) {
      this.array = array;
    }
    get countSides(){
        return this.array.length;
    }
    get perimeter(){
        return this.array.reduce((a, b) => a + b, 0)
    }
}
 
class Triangle extends Polygon {
    get isValid(){
        if (this.countSides === 3){
            let a = this.array[0];
            let b = this.array[1];
            let c = this.array[2];
            return ((a + b > c) && (b + c > a) && (c + a > b))
        } else {
            return false;
        }
    }
}
 
class Square extends Polygon {
    get isValid(){
        if (this.countSides === 4){
            let a = this.array[0];
            let b = this.array[1];
            let c = this.array[2];
            let d = this.array[3];
            return (a === b && b === c && c === d)
        } else {
            return false;
        }
    }
    get area(){
        if (this.isValid){
            return (this.array[0] ** 2)
        }
    }
}