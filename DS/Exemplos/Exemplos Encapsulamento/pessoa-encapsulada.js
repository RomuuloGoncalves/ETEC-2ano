
class Pessoa {
	#nome;
	constructor(nome) {
		this.#nome = nome;
	}

	get nome() {
		alert("Passando pelo Get !!!!!!");
		return this.#nome.toUpperCase();
	}

	set nome(nome) {

		alert("Passando pelo set");

		if (typeof nome != 'string')  {
			throw "O nome deve ser uma string";
			return;
		}

		this.#nome = nome.trim();
	}
}

p = new Pessoa("Arnaldo");

// p.nome = "José";
//

let n = p.nome;

alert(n);

// alert(p.nome);










/*

	// p.nome = 123.456;

class Person {
    constructor(name) {
        var _name = name
		this.setName = function(name) { _name = name; }
        this.getName = function() { return _name; }
    }
}


p = new Person("Edimundo");

document.write(p.name);
document.write(p.getName());



class Something {
  #property;

  constructor(){
    this.#property = "test";
  }

  #privateMethod() {
    return 'hello world';
  }

  getPrivateMessage() {
      return this.#property;
  }
}

const instance = new Something();
console.log(instance.property); //=> undefined
console.log(instance.privateMethod); //=> undefined
console.log(instance.getPrivateMessage()); //=> test
// console.log(instance.#property); //=> Syntax error

*/



// https://stackoverflow.com/questions/22156326/private-properties-in-javascript-es6-classes
// https://medium.com/javascript-scene/encapsulation-in-javascript-26be60e325b4



