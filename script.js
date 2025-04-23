var text_color;

calcTextColor;
window.addEventListener('resize', calcTextColor);


function calcTextColor() {
  if (window.matchMedia("(max-width: 600px)").matches) {
    text_color = "white"
  } else {
    text_color = "black"
  }
}

const carouselText = [
  { text: "Mitchell Billard", color: text_color },
  { text: "a Software Developer", color: text_color },
  { text: "a Pipeline TD", color: text_color },
];

$(document).ready(async function () {
  carousel(carouselText, "#feature-text");
});

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while (i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++;
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
  while (letters.length > 0) {
    await waitForMs(100);
    letters.pop();
    $(eleRef).html(letters.join(""));
  }
}

async function carousel(carouselList, eleRef) {
  var i = 0;
  while (true) {
    updateFontColor(eleRef, carouselList[i].color);
    await typeSentence(carouselList[i].text, eleRef);
    await waitForMs(1500);
    await deleteSentence(eleRef);
    await waitForMs(500);
    i++;
    if (i >= carouselList.length) {
      i = 0;
    }
  }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css("color", color);
}

function waitForMs(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

$(document).ready(function() {
  // Show or hide the sticky footer button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 200) {
      $('.go-to-top').fadeIn(200);
    } else {
      $('.go-to-top').fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $('.go-to-top').click(function(event) {
    event.preventDefault();

    $('html, body').animate({scrollTop: 0}, 300);
  })
});