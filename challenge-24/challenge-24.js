(function(win, doc){

  /*
  Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
  o código, conforme vimos na aula anterior. Quebrar as responsabilidades
  em funções, onde cada função faça somente uma única coisa, e faça bem feito.

  - Remova as duplicações de código;
  - agrupe os códigos que estão soltos em funções (declarações de variáveis,
  listeners de eventos, etc);
  - faça refactories para melhorar esse código, mas de forma que o mantenha com a
  mesma funcionalidade.
  */




  var $visor = doc.querySelector('[data-js="visor"]');
  var $buttonsNumbers = doc.querySelectorAll('[data-js="button-number"]');
  var $buttonsOperations = doc.querySelectorAll('[data-js="button-operation"]');
  var $buttonCE = doc.querySelector('[data-js="button-ce"]');
  var $buttonEqual = doc.querySelector('[data-js="button-equal"]');

  function initialize(){
    initEvents();
  }

  function initEvents(){
    forEachArray($buttonsNumbers, handleClickNumber);
    forEachArray($buttonsOperations, handleClickOperation);

    $buttonCE.addEventListener('click', handleClickCE, false);
    $buttonEqual.addEventListener('click', handleClickEqual, false);
  }

  function forEachArray($inputs, func){
    Array.prototype.forEach.call($inputs, function(button) {
      button.addEventListener('click', func, false);
    });
  }

  function handleClickNumber() {
    $visor.value += this.value;
  }

  function handleClickOperation() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    $visor.value += this.value;
  }

  function handleClickCE() {
    $visor.value = 0;
  }

  function isLastItemAnOperation(number) {
    var operations = ['+', '-', 'x', '÷'];
    var lastItem = number.split('').pop();
    return operations.some(function(operator) {
      return operator === lastItem;
    });
  }

  function removeLastItemIfItIsAnOperator(number) {
    if(isLastItemAnOperation(number)) {
      return number.slice(0, -1);
    }
    return number;
  }

  function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    visorMatchValues();
  }

  function visorMatchValues(){
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(calculateAllValues);
  }

  function switchOperator( operator, firstValue, lastValue, lastOperator){
    switch(operator) {
        case '+':
          return addition(firstValue, lastValue, lastOperator);
        case '-':
          return subtraction(firstValue, lastValue, lastOperator);
        case 'x':
          return multiplication(firstValue, lastValue, lastOperator);
        case '÷':
          return division(firstValue, lastValue, lastOperator);
      }
  }

  function addition(firstValue, lastValue, lastOperator){
    return Number(firstValue) + Number(lastValue);
  }

  function subtraction(firstValue, lastValue, lastOperator){
    return Number(firstValue) - Number(lastValue);
  }

  function multiplication(firstValue, lastValue, lastOperator){
    return Number(firstValue) * Number(lastValue);
  }

  function division(firstValue, lastValue, lastOperator){
    return Number(firstValue) / Number(lastValue);
  }

  function calculateAllValues(accumulated, actual) {
      var firstValue = accumulated.slice(0, -1);
      var operator = accumulated.split('').pop();
      var lastValue = removeLastItemIfItIsAnOperator(actual);
      var lastOperator = isLastItemAnOperation(actual) ? actual.split('').pop() : '';
      return switchOperator( operator, firstValue, lastValue ) + lastOperator;
    }

  initialize();
})(window,document);
