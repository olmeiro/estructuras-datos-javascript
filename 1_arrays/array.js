
// https://platzi.com/comentario/2067005/
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

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftIndex(index);

    return item;
  }

  //debemos manejar el cambio de indices al eliminar elementos
  shiftIndex(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }

  //remove first element from an array:
  shift() {
    if (this.length === 0) {
      return undefined
    }

    const itemDeleted = this.data[0]

    for (let i = 0; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }

    this.length--
    delete this.data[this.length]
    return itemDeleted;
  }

  //adds one element to the beggining
  unshift(item) {
    if (!item) {
      return this.length;
    }

    if (this.length === 0) {
      this.data[0] = item;
      this.length++;
      return this.length;
    }

    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }

    this.data[0] = item;

    this.length++;
    return this.length;
  }

  unshift2(item) {
    for (let i = 0; i < this.length; i++) {
      this.data[this.length - i] = this.data[this.length - (i + 1)];
    }
    this.data[0] = item;
    this.length++;
    return this.data;
  }

  //adds one o more elements:
  unshifElements(...item) {
    if (item.length === 1) {
      // "agrengando UNICO elemento"
      const finalKey = this.length
      for (let i = finalKey; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = item[0];
      this.length++;

    } else {
      // "moviendo-reasignando" elementos antiguos hacia adelante
      for (let i = 0; i < this.length; i++) {
        this.data[i + item.length] = this.data[i];
      }
      // agregando nuevos elementos, en las primeras posiciones del "vector"
      for (let j = 0; j < item.length; j++) {
        this.data[j] = item[j]
        // el conteo o longitud final del "vector"
        this.length++
      }
    }
    return this.length
  }

  slice(index, many) {
    let objectDelete = {}
    for (let i = 0; i < many; i++) {
      objectDelete[index + i] = this.data[index + i]
      delete this.data[index + i];
      this.length--;
    }
    this.data = this.shiftIndex(this.data);
    return objectDelete;
  }
}

const nums = new MyArray();
nums.push(1)
nums.push(2)
nums.push(3)
console.log(nums)
nums.unshift(7)
console.log(nums)
// nums.unshift2(8)
// console.log(nums)
// nums.unshifElements(9, 10)
// console.log(nums)

const myArray = new MyArray();
myArray.push('Alian');
console.log(myArray.data)
myArray.push('José');
console.log(myArray.data)
console.log("1: ", myArray.get(1))
console.log(myArray)
myArray.pop();
console.log(myArray)
myArray.push('Diego');
myArray.push('Karen');
console.log(myArray)
myArray.delete(1)
console.log(myArray)
myArray.pop();
console.log(myArray)
myArray.unshift('Juan')
myArray.unshift('Adrian')
console.log(myArray)
