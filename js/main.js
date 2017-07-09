(function() {
  'use strict';

  var words = [
    {'en': 'read', 'ja': '読む'},
    {'en': 'write', 'ja': '書く'},
    {'en': 'eat', 'ja': '食べる'},
    {'en': 'run', 'ja': '走る'},
    {'en': 'walk', 'ja': '歩く'},
  ];

  var card = document.getElementById('card');
  var btn = document.getElementById('btn');
  var cardFront = document.getElementById('card-front');
  var cardBack = document.getElementById('card-back');

  card.addEventListener('click', function(){
    flip();
  });

  btn.addEventListener('click', function(){
    next();
  });

  function next() {
    if (card.className === 'open') {
      card.addEventListener('transitionend', setCard);
      flip();
    } else {
      setCard();
    }
  }

  function setCard() {
    var num = Math.floor(Math.random() * words.length);
    cardFront.innerText = words[num]['en'];
    cardBack.innerText = words[num]['ja'];
    card.removeEventListener('transitionend', setCard);
  }

  setCard();

  function flip() {
    card.className = card.className === '' ? 'open' : '';
  }
})();
