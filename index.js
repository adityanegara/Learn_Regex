const paragraph = document.getElementById('paragraph');
const inputSpeech = document.getElementById('inputSpeech');
const awkwardButton = document.getElementById('checkAwkwardButton');
const checkAwkwardResult = document.getElementById('checkAwkwardResult');

paragraph.innerHTML = 'Test awkwardness of your speech';

const checkAwkward = (string) => {
  const regexFormulaForAwkward = /uu[gh]h/gi;
  const numberOfAwkward = string.match(regexFormulaForAwkward).length;
  if (numberOfAwkward >= 3) {
    return true;
  }
  return false;
};

awkwardButton.addEventListener('click', () => {
  const speech = inputSpeech.value;
  if (checkAwkward(speech)) {
    checkAwkwardResult.innerHTML = 'Is Awkward';
  } else {
    checkAwkwardResult.innerHTML = 'Confident';
  }
});
