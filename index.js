window.onload = function(){
  var tens = 0;
  var senconds = 0;
  var Interval;
  var appendTens = document.getElementById('tens');
  var appendSeconds = document.getElementById('seconds');
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');

  buttonStart.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(startTime,10);
  }

  buttonStop.onclick = function(){
    clearInterval(Interval);
  }

  buttonReset.onclick = function(){
    clearInterval(Interval);
    tens = '00';
    senconds = '00';
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = senconds;
  }

  function startTime(){
    tens++;
    if(tens <=  9){
      appendTens.innerHTML = '0' + tens;
    }

    if(tens > 9){
      appendTens.innerHTML = tens;
    }

    if(tens >99){
      senconds++;
      appendSeconds.innerHTML = '0'+senconds;
      tens='00';
      appendTens.innerHTML = tens;
    }

    if(senconds>9){
      appendSeconds.innerHTML =senconds;
    }
  }
}