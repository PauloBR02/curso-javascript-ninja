(function(win,doc){

  /*
  Essa semana você terá dois desafios:
  1) Revisar todo o contéudo passado até aqui, e ver se você realmente entendeu
  tudo o que foi passado! Se tiver dúvidas, anote, e então abra issues,
  ou comente no seu pull request mesmo, que eu irei ajudá-lo a entender
  o que não ficou tão claro das aulas anteriores.
  É essencial que você entenda todo o conteúdo que foi passado até aqui,
  para que possamos prosseguir para a parte mais avançada do curso :D

  2) Estudar eventos!
  Acesse a página do MDN:
  https://developer.mozilla.org/en-US/docs/Web/Events#Categories

  Tente aplicar na prática alguns dos eventos que estão ali e coloque nesse
  desafio os experimentos legais que você conseguir desenvolver :D
  */
  function initialize(){
    var $inputFocusBlur = doc.querySelector('#inputFocusBlur');
    var $formReset = doc.querySelector('[data-js="formReset"]');
    var $spanPrint= doc.querySelector('[data-js="spanPrint"]');
    var $inputClipboard= doc.querySelector('[data-js="inputClipboard"]');
    var $spanClipboard= doc.querySelector('[data-js="spanClipboard"]');
    var $inputKeyboard= doc.querySelector('[data-js="inputKeyboard"]');
    var $spanKeyboard= doc.querySelector('[data-js="spanKeyboard"]');
    var $divMouse = doc.querySelector('[data-js="divMouse"]');
    var $buttonMouse = doc.querySelector('[data-js="buttonMouse"]');
    initializeNetworkEvents();
    initializeFocusEvents($inputFocusBlur);
    initializeFormEvents($formReset);
    initializePrintEvents($spanPrint);
    initializeClipboardEvents($inputClipboard, $spanClipboard);
    initializeKeyboardEvents($inputKeyboard, $spanKeyboard);
    initializeMouseEvents($buttonMouse, $divMouse);
  }

  function initializeNetworkEvents(){
    win.addEventListener('online', function(){
      alert('Legal, voltamos online! :)');
    });
    win.addEventListener('offline', function(){
      alert('Ops, parece que a conexão caiu.');
    });
  }

  function initializeFocusEvents($input){
    $input.addEventListener('focus', function(){
      this.style.fontSize = "xx-large";
    });
    $input.addEventListener('blur', function(){
      this.style.fontSize = "medium";
    });
  }

  function initializeFormEvents($form){
    $form.addEventListener('reset', function(){
      alert('Form resetado!');
    });
    $form.addEventListener('submit', function(event){
      event.preventDefault();
      alert('preventDefault executado!');
    });
  }

  function initializePrintEvents($span){
    win.addEventListener('beforeprint', function(){
      $span.innerHTML = "Print window opened!";
    })
    win.addEventListener('afterprint', function(){
      $span.innerHTML = "Print window closed!";
    })
  }

  function initializeClipboardEvents($input, $span){
    $input.addEventListener('cut', function(){
      $span.innerHTML = "Text has been cut";
    });
    $input.addEventListener('copy', function(){
      $span.innerHTML = "Text has been copied";
    });
    $input.addEventListener('paste', function(){
      $span.innerHTML = "Text has been pasted";
    });
  }

  function initializeKeyboardEvents($input, $span){
    $input.addEventListener('keydown', function(event){
      $span.innerHTML = 'Tecla pressionada: ' + event.key;
    });
  }

  function initializeMouseEvents($button, $div){
    $button.addEventListener('click', function(){
      var newDiv = doc.createElement('div');
      newDiv.style.width='100px';
      newDiv.style.height='100px';
      newDiv.style.backgroundColor='#f00';
      newDiv.addEventListener('click', changeColor);
      $div.appendChild(newDiv);
    });
  }

  function changeColor(){
    var colors = ['rgb(255, 0, 0)', 'rgb(0, 255, 0)', 'rgb(0, 0, 255)'];
    this.style.backgroundColor = colors[colors.indexOf(this.style.backgroundColor) + 1]
    ? colors[colors.indexOf(this.style.backgroundColor) + 1]
    : colors[0];
  };

  initialize();
})(window,document);
