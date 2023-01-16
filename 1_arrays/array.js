const array = ['Bryan', 'Juliana', 'Kelly'];
console.log(array);
console.log(array.lengtn)
array.push('Ana')
console.log(array)

//vamos a construir un array de 0 con sus respectivos métodos ->
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  //Acceso a datos:
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.data;
  }

}

const myArray = new MyArray();
myArray.push('Alian');
console.log(myArray.data)
myArray.push('José');
console.log(myArray.data)
console.log("1: ", myArray.get(1))
