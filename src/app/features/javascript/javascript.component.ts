import { Component } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss'],
})
export class JavascriptComponent {
  /*
    Para las funciones saludar, esPar y hacerAlgo, se realiza la validacion mediante javascript
  */
  // Primer Ejercicio
  saludar(name: any): void {
    if (!name) {
      alert('El nombre no puede ser nulo o indefinido.');
      return;
    }
    if (typeof name !== 'string') {
      alert('El nombre debe ser un string.');
      return;
    }
    alert(name);
  }

  // Segundo Ejercicio
  esPar(array: any): void {
    if (!array || !Array.isArray(array)) {
      alert('El array no puede ser nulo o indefinido.');
      return;
    }

    if (!array.every((element) => typeof element === 'number')) {
      alert('Todos los elementos del array deben ser números.');
      return;
    }

    let filterArray = array.filter((element: number) => element % 2 == 0);
    alert(filterArray.toString());
  }

  // Tercer Ejercicio
  hacerAlgo(callback: Function): void {
    if (typeof callback !== 'function') {
      console.error('El argumento proporcionado debe ser una función.');
      return;
    }

    setTimeout(() => {
      callback();
      console.log('La función de callback ha sido ejecutada.');
    }, 3000);
  }
  hacerAlgoCallback(): void {
    console.log('¡Hola, mundo!');
  }

  // Cuarto Ejercicio
  transformar(array: any): void {
    if (array.length !== 5) {
      console.error('El array debe contener exactamente 5 elementos.');
      return;
    }

    if (!array.every((element: number) => typeof element === 'number')) {
      console.error('Todos los elementos del array deben ser números.');
      return;
    }

    console.log('Array original:', array);
    const transformedArray = array.map((element: number) => element * 5);
    console.log('Array transformado:', transformedArray);
  }

  obtenerPost(id: number): void {
    fetch('https://jsonplaceholder.typicode.com/todos/' + id)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Hubo un error:', error));
  }

  funcionProgramada(): void {
    const mensajeRepetitivo = setInterval(() => {
      console.log('Hola');
    }, 1000);

    setTimeout(() => {
      clearInterval(mensajeRepetitivo);
      console.log('Funcion detenida');
    }, 5000);
  }
}
