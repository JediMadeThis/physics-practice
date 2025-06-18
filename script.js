const siPrefixBtn = document.getElementById('siPrefixBtn');
const siPrefixBackBtn = document.getElementById('siPrefixBackBtn');
const prefixSelectedText = document.getElementById('prefixSelected');
const prefixAnswerBox = document.getElementById('prefixAnswerBox');

const prefixAnswerChoices = document.querySelectorAll(
  '.prefixAnswerChoices button'
);

siPrefixBtn.addEventListener('click', (_event) => {
  window.linkTransition('mainPage', 'siPrefixPage');
});

siPrefixBackBtn.addEventListener('click', (_event) => {
  window.linkTransition('siPrefixPage', 'mainPage', true);
});

const siPrefixes = {
  exa: 18,
  peta: 15,
  tera: 12,
  giga: 9,
  mega: 6,
  kilo: 3,
  hecto: 2,
  deca: 1,
  deci: -1,
  centi: -2,
  milli: -3,
  micro: -6,
  nano: -9,
  pico: -12,
  femto: -15,
  atto: -18,
};

let currentPrefix = '';
let siPrefixesPool = Object.assign({}, siPrefixes);

function generate() {
  if (currentPrefix) {
    console.log(`Removed current prefix: ${currentPrefix}`);
    delete siPrefixesPool[currentPrefix];
  }

  if (Object.keys(siPrefixesPool).length < 1) {
    siPrefixesPool = Object.assign({}, siPrefixes);
    console.log('Refreshed prefixes pool');
  }

  const prefix =
    Object.keys(siPrefixesPool)[
      Math.floor(Math.random() * Object.keys(siPrefixesPool).length)
    ];
  currentPrefix = prefix;

  console.log(`Prefix: ${prefix}`);
  console.log(`Prefix pool: ${Object.keys(siPrefixesPool).length}`);
  prefixSelectedText.textContent = currentPrefix;
}

generate();

prefixAnswerChoices.forEach((btn) => {
  btn.addEventListener('click', (_event) => {
    if (Number(btn.textContent) === siPrefixes[currentPrefix]) {
      console.log('Correct');

      btn.style.border = '3px solid #77ee77';
    } else {
      console.log('Wrong asf');
      btn.style.border = '3px solid #ee7777';
      document.getElementById(
        `answerPrefix${siPrefixes[currentPrefix]}`
      ).style.border = '3px solid #77ee77';
    }

    prefixAnswerBox.value = siPrefixes[currentPrefix];
    prefixAnswerChoices.forEach((btn1) => (btn1.disabled = true));

    setTimeout(() => {
      prefixAnswerChoices.forEach((btn1) => (btn1.disabled = false));
      prefixAnswerBox.value = '';

      btn.style.border = 'none';
      document.getElementById(
        `answerPrefix${siPrefixes[currentPrefix]}`
      ).style.border = 'none';
      prefixAnswerBox.textContent = '';

      generate();
    }, 100);
  });
});
