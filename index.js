//1) Verificar se um número é primo
function numeroPrimo(number) {
        if (number < 2) {
          return false;
        }

        for (let i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) {
            return false;
          }
        }
      
        return true;
      }
const primos = [];

for (let i = 1; i <= 1000; i++) {
  if (numeroPrimo(i)) {
    primos.push(i);
  }
}
      //exemplo
      numeroPrimo(12) //false
      numeroPrimo(5) //true
      primos        // lista os números primos de 1 até 1000

//2) Inverter uma string
function inverterString(str) {
    var splitString = str.split("");
    
    var reverseArray = splitString.reverse(); 

    var joinArray = reverseArray.join(""); 
    
    return joinArray;
}
//exemplo
inverterString("Marcelo") //'olecraM'

//3) Encontrar o maior elemento em um vetor
function maiorElemento(matrix) {
    let maxElement = matrix[0][0];
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] > maxElement) {
          maxElement = matrix[i][j];
        }
      }
    }
  
    return maxElement;
  }
  //exemplo
  const matrix = [
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
  ];
  maiorElemento(matrix) //12

//4)
function MinMaxMed(numbers) {
  let min = numbers[0];
  let max = numbers[0];
  let sum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    const currentNumber = numbers[i];

    if (currentNumber < min) {
      min = currentNumber;
    }

    if (currentNumber > max) {
      max = currentNumber;
    }

    sum += currentNumber;
  }

  const average = sum / numbers.length;

  return {
    min,
    max,
    average
  };
}
//exemplo
const numbers = [5, 2, 9, 1, 7];
MinMaxMed(numbers) //{min: 1, max: 9, average: 4.8}

//5) Contar a frequência de elementos em uma matriz
function contarFrequencia(matrix) {
  const frequency = {};

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const element = matrix[i][j];

      if (frequency[element]) {
        frequency[element]++;
      } else {
        frequency[element] = 1;
      }
    }
  }

  return frequency;
}
//exemplo
const matrix = [
  [1, 2, 3],
  [4, 2, 1],
  [3, 4, 4]
];
contarFrequencia(matrix) //{1: 2, 2: 2, 3: 2, 4: 3}

//6) Validar uma senha
function senhaValida(p){
    var retorno = false;
    var letrasMaiusculas = /[A-Z]/;
    var letrasMinusculas = /[a-z]/; 
    var numeros = /[0-9]/;
    if(p.length < 8){
    return retorno;
    }
    var auxMaiuscula = 0;
    var auxMinuscula = 0;
    var auxNumero = 0;
    for(var i=0; i<p.length; i++){
    if(letrasMaiusculas.test(p[i]))
    auxMaiuscula++;
    else if(letrasMinusculas.test(p[i]))
    auxMinuscula++;
    else if(numeros.test(p[i]))
    auxNumero++;
    }
    if (auxMaiuscula > 0){
    if (auxMinuscula > 0){
    if (auxNumero > 0){
    retorno = true;
    }
    }
    }
    return retorno;
}
//exemplo
senhaValida("Teste1234") //true
senhaValida("teste12")  //false
senhaValida("Teste12") //false

//7) Remover elementos duplicados de uma matriz
function removerDuplicados(matriz) {
    const elementosVistos = {};
    return matriz.filter((elemento) => {
      if (elementosVistos[elemento]) {
        return false;
      }
      elementosVistos[elemento] = true;
      return true;
    });
  }
  //exemplo
  const matriz = [1, 2, 2, 3, 1, 4];
  removerDuplicados(matriz) //(4) [1, 2, 3, 4]

//8) Verificar se uma string é um palíndromo
function palindromo(str) {
    const formattedStr = str.toLowerCase().replace(/\s/g, '');
  
    const reversedStr = formattedStr.split('').reverse().join('');
  
    return formattedStr === reversedStr;
  }
  //exemplo
  palindromo("ovo")   //true
  palindromo("vivi") //false

//9) Calcular fatorial de um número
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      let fatorial = 1;
      for (let i = 2; i <= numero; i++) {
        fatorial *= i;
      }
      return fatorial;
    }
  }
  //exemplo
  calcularFatorial(5) //120

//10) Verificar se uma palavra é um anagrama
function saoAnagramas(palavra1, palavra2) {
    const formattedPalavra1 = palavra1.toLowerCase().replace(/\s/g, '');
    const formattedPalavra2 = palavra2.toLowerCase().replace(/\s/g, '');
  
    if (formattedPalavra1.length !== formattedPalavra2.length) {
      return false;
    }
  
    const charsPalavra1 = formattedPalavra1.split('');
    const charsPalavra2 = formattedPalavra2.split('');
  
    charsPalavra1.sort();
    charsPalavra2.sort();
  
    for (let i = 0; i < charsPalavra1.length; i++) {
      if (charsPalavra1[i] !== charsPalavra2[i]) {
        return false;
      }
    }
  
    return true;
  }
  //exemplo
  saoAnagramas("vida", "davi")  //true
  saoAnagramas("teto", "olho") //false

//11) Converter temperatura
function celsiusParaFahrenheit(tempCelsius) {
    var tempFahrenheit = tempCelsius * 1.8 + 32;
    return tempFahrenheit;
  }
  //exemplo
  celsiusParaFahrenheit(25) //77

//12) Verificar se um número é um quadrado perfeito
function quadradoPerfeito(numero) {
    const raizQuadrada = Math.sqrt(numero);
    return raizQuadrada === Math.floor(raizQuadrada);
  }
  //exemplo
  quadradoPerfeito(5)  //false
  quadradoPerfeito(4) //true

//13) Contar a quantidade de vogais em uma string
  function contarVogais(str) {
    const formattedStr = str.toLowerCase().replace(/\s/g, '');
  
    let count = 0;
    for (let i = 0; i < formattedStr.length; i++) {
      const char = formattedStr[i];
      if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
        count++;
      }
    }
  
    return count;
  }
  //exemplo
  contarVogais("Nao Sei") //4

  //14) Verificar se um número é um número primo de Fibonacci
  function primo(number) {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  function fibonacci(numero) {
    let a = 0;
    let b = 1;
  
    while (b < numero) {
      const temp = a + b;
      a = b;
      b = temp;
    }
  
    return b === numero;
  }
  function primoFibonacci(numero) {
    return primo(numero) && fibonacci(numero);
  }
  //exemplo
  primoFibonacci(7)  //false
  primoFibonacci(5) //true

  //15) Geração de cores aleatórias
  function gerarCorAleatoria() {
    const caracteresHex = '0123456789ABCDEF';
    let cor = '#';

    for (let i = 0; i < 6; i++) {
      const indiceAleatorio = Math.floor(Math.random() * 16);
      cor += caracteresHex[indiceAleatorio];
    }

    return cor;
  }
  const corAleatoria = gerarCorAleatoria();
  const corAleatoriaDiv = document.querySelector('.cor-aleatoria');
  corAleatoriaDiv.textContent = corAleatoria;
  corAleatoriaDiv.style.backgroundColor = corAleatoria;
//A página está no HTML, aqui só está o código de demonstração


