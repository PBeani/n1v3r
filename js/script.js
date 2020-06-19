document.addEventListener('DOMContentLoaded', function(){
  var lines = [
    {
      text: 'oi fê,',
      startDelay: 3000,
      typeDelay: 300, 
    },
    {
      text: 'feeeeeeeeliz aniversauroooooooooo!',
      startDelay: 1000,
      typeDelay: 100, 
    },
    {
      text:  '<3',
      startDelay: 1000,
      typeDelay: 200, 
    }
  ];

  function writeText(index = 0, lineIndex = 0) {
    if (lineIndex === lines.length) {
      showGift();
      return;
    }

    var el = document.querySelectorAll('.type-area p')[lineIndex];
    var prev = document.querySelector('main p.current');
    
    if (prev) {
      prev.classList.remove('current');
    }
    
    el.classList.add('current');

    var textToType = lines[lineIndex].text;
    
    if (index === textToType.length) {
      ++lineIndex;
      return setTimeout(function () {
        writeText(0, lineIndex)
      }, (lines[lineIndex] || { startDelay: 1000 }).startDelay);
    }

    setTimeout(function() {
      el.firstChild.innerHTML = textToType.substr(0, index + 1);
      return writeText(++index, lineIndex);
    }, lines[lineIndex].typeDelay);
  }

  function showGift() {
    setTimeout(function() {
      document.querySelector('.type-area').classList.add('invisible');

      setTimeout(function() {
        document.querySelector('.gift-cat').classList.add('visible');
      }, 1000);
    }, 1000);
  }

  function showMessage() {
    document.querySelector('.letter-holder').classList.add('visible');
    var textList = document.querySelectorAll('.letter span');
    setTimeout(function() {
      showLetterP(textList, 0);
    }, 1000);
  }

  function showLetterP(textList, index) {
    if (index === textList.length) {
      showBox()
    } else {
      var current = textList[index];
      current.classList.add('visible');

      setTimeout(function() {
        showLetterP(textList, ++index);
      }, 4000);
    }
  }

  function showBox() {
    document.querySelector('.box-holder').classList.add('visible');
  }

  function showPaper() {
    document.querySelector('.paper-holder').classList.add('visible');
    setTimeout(function() {
      document.querySelector('.paper-holder span').classList.add('visible');
      setTimeout(function() {
        document.querySelector('.paper-holder .hearth').classList.add('visible');
      }, 2000);
    }, 1000);
  }

  var firstText = document.querySelectorAll('.type-area p')[0];
  firstText.classList.add('current');
  firstText.firstChild.innerHTML = " ";

  document.querySelector('.gift').addEventListener('click', showMessage);
  document.querySelector('.wood-box').addEventListener('click', showPaper);
  setTimeout(function() {
    document.querySelector('.dinos').classList.add('visible');  
    setTimeout(writeText, lines[0].startDelay);
  }, 1000);
});