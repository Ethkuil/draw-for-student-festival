const NUM_OF_KEYWORDS = 22;
const NUM_OF_NUMS = 36;

const BLINK_INTERVAL = 500; // ms. same below
const NUM_OF_PIC_IN_A_DRAW = 8;
const DRAW_DURATION = BLINK_INTERVAL * NUM_OF_PIC_IN_A_DRAW;
const INTERVAL_BEFORE_SHOWING_NUM = 2000;

const STYLE_OF_NUM = {
  1: { "left-of-center": "71%", "left-of-up-right": "93%", "top-of-up-right": "6%" },
  2: { "left-of-center": "59%", "left-of-up-right": "89.5%", "top-of-up-right": "6%" },
  3: { "left-of-center": "59%", "left-of-up-right": "90%", "top-of-up-right": "7%" },
  4: { "left-of-center": "64%", "left-of-up-right": "91%", "top-of-up-right": "6%" },
  5: { "left-of-center": "65%", "left-of-up-right": "92%", "top-of-up-right": "6%" },
  6: { "left-of-center": "61%", "left-of-up-right": "90%", "top-of-up-right": "6%" },
  7: { "left-of-center": "69%", "left-of-up-right": "92.5%", "top-of-up-right": "6%" },
  8: { "left-of-center": "63%", "left-of-up-right": "90.5%", "top-of-up-right": "6%" },
  9: { "left-of-center": "60%", "left-of-up-right": "89%", "top-of-up-right": "6%" },
  10: { "left-of-center": "60%", "left-of-up-right": "90%", "top-of-up-right": "6%" },
  11: { "left-of-center": "62%", "left-of-up-right": "90.5%", "top-of-up-right": "6%" },
  12: { "left-of-center": "60%", "left-of-up-right": "90%", "top-of-up-right": "6%" },
  13: { "left-of-center": "59%", "left-of-up-right": "89%", "top-of-up-right": "6%" },
  14: { "left-of-center": "61.5%", "left-of-up-right": "90.5%", "top-of-up-right": "6%" },
  15: { "left-of-center": "55.5%", "left-of-up-right": "88%", "top-of-up-right": "6%" },
  16: { "left-of-center": "66%", "left-of-up-right": "92%", "top-of-up-right": "6%" },
  17: { "left-of-center": "65%", "left-of-up-right": "91.5%", "top-of-up-right": "6%" },
  18: { "left-of-center": "69%", "left-of-up-right": "93%", "top-of-up-right": "6.5%" },
  19: { "left-of-center": "61.5%", "left-of-up-right": "90%", "top-of-up-right": "6.5%" },
  20: { "left-of-center": "61%", "left-of-up-right": "90%", "top-of-up-right": "6.5%" },
  21: { "left-of-center": "57%", "left-of-up-right": "88.5%", "top-of-up-right": "6%" },
  22: { "left-of-center": "69%", "left-of-up-right": "93%", "top-of-up-right": "6%" },
}

// no blink and interval, just show the prize
function debugFirstSecondPrize() {
  var keywordId = 1;
  document.body.style.backgroundImage = "url(./images/firstSecondPrize/" + keywordId + ".png)";
  // @ts-ignore
  document.getElementById("center-num").style.left = STYLE_OF_NUM[keywordId]["left-of-center"];
  // @ts-ignore
  document.getElementById("up-right-num").style.left = STYLE_OF_NUM[keywordId]["left-of-up-right"];
  // @ts-ignore
  document.getElementById("up-right-num").style.top = STYLE_OF_NUM[keywordId]["top-of-up-right"];
  var num = Math.floor(Math.random() * NUM_OF_NUMS + 1); // 1 ~ NUM_OF_NUMS
  setNumContent(num.toString());
}

function drawThirdPrize() {
  hideDrawBtn();
  setNumContent("");
  var timer = setInterval(function () {
    var keywordId = Math.floor(Math.random() * NUM_OF_KEYWORDS + 1); // 1 ~ NUM_OF_KEYWORDS
    document.body.style.backgroundImage = "url(./images/thirdPrize/" + keywordId + ".png)";
  }, BLINK_INTERVAL);
  setTimeout(function () {
    clearInterval(timer);
    showBackBtn();
  }, DRAW_DURATION);
}

function drawFirstSecondPrize() {
  hideDrawBtn();
  setNumContent("");
  var keywordId;
  var timer = setInterval(function () {
    keywordId = Math.floor(Math.random() * NUM_OF_KEYWORDS + 1); // 1 ~ NUM_OF_KEYWORDS
    document.body.style.backgroundImage = "url(./images/firstSecondPrize/" + keywordId + ".png)";
  }, BLINK_INTERVAL);
  setTimeout(function () {
    clearInterval(timer); // stop drawing keyword
    // set position for 2 numbers
    // @ts-ignore
    document.getElementById("center-num").style.left = STYLE_OF_NUM[keywordId]["left-of-center"];
    // @ts-ignore
    document.getElementById("up-right-num").style.left = STYLE_OF_NUM[keywordId]["left-of-up-right"];
    // @ts-ignore
    document.getElementById("up-right-num").style.top = STYLE_OF_NUM[keywordId]["top-of-up-right"];
    setNumContent("?");
    setTimeout(function () {
      var num = Math.floor(Math.random() * NUM_OF_NUMS + 1); // 1 ~ NUM_OF_NUMS
      setNumContent(num.toString());
      showBackBtn();
    }, INTERVAL_BEFORE_SHOWING_NUM);
  }, DRAW_DURATION);
}

function setNumContent(num) {
  // @ts-ignore
  document.getElementById("center-num").innerHTML = num;
  // @ts-ignore
  document.getElementById("up-right-num").innerHTML = num;
}

function showBackBtn() {
  // @ts-ignore
  document.getElementById("backBtn").style.visibility = "visible"
}

function hideDrawBtn() {
  for (let i = 1; i <= 3; i++) {
    // @ts-ignore
    document.getElementById("btn" + i.toString()).style.visibility = "hidden"
  }
}

function back() {
  setNumContent("");
  // @ts-ignore
  document.getElementById("backBtn").style.visibility = "hidden"
  document.body.style.backgroundImage = "url(./images/bg.png)"
  for (let i = 1; i <= 3; i++) {
    // @ts-ignore
    document.getElementById("btn" + i.toString()).style.visibility = "visible"
  }
}
