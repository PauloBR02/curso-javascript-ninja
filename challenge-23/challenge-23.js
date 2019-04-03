(function(win,doc){
  'use strict';
	/*
	Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
	As regras são:

	- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
	diretamente;
	- O input deve iniciar com valor zero;
	- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
	- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
	multiplicação(x) e divisão(÷);
	- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
	que irá limpar o input, deixando-o com valor 0;

	- A cada número pressionado, o input deve atualizar concatenando cada valor
	digitado, como em uma calculadora real;
	- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
	operação no input. Se o último caractere no input já for um símbolo de alguma
	operação, esse caractere deve ser substituído pelo último pressionado.
	Exemplo:
	- Se o input tem os valores: "1+2+", e for pressionado o botão de
	multiplicação (x), então no input deve aparecer "1+2x".
	- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
	input;
	- Ao pressionar o botão "CE", o input deve ficar zerado.
	*/
  var field = doc.querySelector( '#txtResult' );
  var regexNumbers = new RegExp( /[0-9]/ );
  var regexOperations = new RegExp( /[\-\+\*\/]/ );

  function performOperation( entry ){
    console.log(entry);
    if( regexNumbers.test(entry) ){
      field.value == 0 ? field.value = entry : field.value += entry;
    } else {
      if( field.value != 0 ){
        if (regexOperations.test( entry )){
          if( regexOperations.test( field.value.charAt( field.value.length - 1 )))
            field.value = field.value.slice(0,field.value.length-1);
          field.value += entry;
        } else if ( entry === "=") {
          showResult();
        } else {
          clearField();
        }
      }
    }
  }

  function showResult(){
    var input = field.value;
    var match;
    if(regexOperations.test(field.value.charAt(field.value.length-1)))
      field.value = field.value.slice(field.length, -1);
    while( regexOperations.test( field.value )){
      if(/\*/.test(field.value)){
        match = field.value.match(/(\d+)\*(\d+)/);
        field.value = field.value.replace(match[1] + '*' + match[2], match[1]*match[2]);
      } else if(/\//.test(field.value)){
        match = field.value.match(/(\d+)\/(\d+)/);
        field.value = field.value.replace(match[1] + '/' + match[2], match[1]/match[2]);
      } else if(/\-/.test(field.value)){
        match = field.value.match(/(\d+)\-(\d+)/);
        field.value = field.value.replace(match[1] + '-' + match[2], match[1]-match[2]);
      } else if(/\+/.test(field.value)){
        match = field.value.match(/(\d+)\+(\d+)/);
        field.value = field.value.replace(match[1] + '+' + match[2], match[1]+match[2]);
      }
    }
  }

  function clearField(){
    field.value = 0;
  }



  var elements = doc.querySelectorAll( 'input[type="button"]' );
  elements.forEach( function(item){
    item.addEventListener( 'click', function(){
      performOperation( this.value );
    });
  });


})( window,document );
