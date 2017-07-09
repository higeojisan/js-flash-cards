(function() {
  'use strict';

  var cards = [
    ['write', '書く'],
    ['read', '読む'],
    ['run', '走る'],
    ['sleep', '寝る']
  ];

  var count = 0;
  var lastNum = cards.length - 1;
  var card = document.getElementById('card');
  var nextBtn = document.getElementById('nextbtn');
  var prevBtn = document.getElementById('prevbtn');

  // 初回読み込み時
  window.onload = function() {
    card.innerText = cards[0][0];
    nextBtn.style.display = 'block';
  };

  // NEXTボタンを押したとき
  nextBtn.addEventListener('click', function() {
    count++;
    if (count == 0) {
      nextBtn.style.display = 'block';
      prevBtn.style.display = 'none';
    }
    if (count < lastNum) {
      nextBtn.style.display = 'block';
      prevBtn.style.display = 'block';
    }
    if (count == lastNum) {
      nextBtn.style.display = 'none';
      prevBtn.style.display = 'block';
    }
    card.innerText = cards[count][0];
  });

  // PREVボタンを押したとき
  prevBtn.addEventListener('click', function() {
    count--;
    if (count == 0) {
      nextBtn.style.display = 'block';
      prevBtn.style.display = 'none';
    }
    if (count < lastNum) {
      nextBtn.style.display = 'block';
      prevBtn.style.display = 'block';
    }
    if (count == lastNum) {
      nextBtn.style.display = 'none';
      prevBtn.style.display = 'block';
    }
    card.innerText = cards[count][0];
  });

})();
