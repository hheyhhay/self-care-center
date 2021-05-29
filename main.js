affirmations = [
"I forgive myself and set myself free.",
"I believe I can be all that I want to be.",
"I am in the process of becoming the best version of myself.",
"I have the freedom & power to create the life I desire.",
"I choose to be kind to myself and love myself unconditionally.",
"My possibilities are endless.",
"I am worthy of my dreams.",
"I am enough.",
"I deserve to be healthy and feel good.",
"I am full of energy and vitality and my mind is calm and peaceful.",
"Every day I am getting healthier and stronger.",
"I honor my body by trusting the signals that it sends me.",
"I manifest perfect health by making smart choices."
];
mantras = [
  "Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
  "Don'\t let yesterday take up too much of today.",
  "Every day is a second chance.",
  "Tell the truth and love everyone.",
  "I am free from sadness.",
  "I am enough.",
  "In the beginning it is you, in the middle it is you and in the end it is you.",
  "I love myself.",
  "I am present now.",
  "Inhale the future, exhale the past.",
  "This too shall pass.",
  "Yesterday is not today.",
  "The only constant is change.",
  "Onward and upward.",
  "I am the sky, the rest is weather."
];



// Varibles
var recieveBtn = document.querySelector('.recieve-message');
var messageDisplay = document.querySelector('.print-message');
var deleteBtn = document.querySelector('.delete-message');
var usedAffirmations = [];
var usedMantras = [];
var currentMessage ="";
var checkedBox = "";


//eventListeners
recieveBtn.addEventListener('click', displayNewMessage);
deleteBtn.addEventListener('click', deleteMessage);

//functions

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};

function pickMessage() {
  var messageOptions = document.getElementsByName('message-choice');

  for (var i = 0; i<messageOptions.length; i++){
      if(messageOptions[i].checked) {
          checkedBox = messageOptions[i].value;
          } if (checkedBox === 'affirmation') {
            currentMessage = affirmations[getRandomIndex(affirmations)];
              if (!usedAffirmations.includes(currentMessage)) {
                usedAffirmations.push(currentMessage);
                return messageDisplay.innerText = currentMessage;
              } else if (usedAffirmations.includes(currentMessage)) {
                  if (usedAffirmations.length < affirmations.length) {
                    currentMessage = affirmations[getRandomIndex(affirmations)];
                    usedAffirmations.push(currentMessage);
                    return messageDisplay.innerText = currentMessage
                  } else if (usedAffirmations.length >= affirmations.length) {
                    usedAffirmations = [];
                    currentMessage = '✨ Have displayed all the Affirmation Messages, restarting loop now.✨'
                  }return messageDisplay.innerText = currentMessage;
              }
        } else if (checkedBox === 'mantra') {
            currentMessage = mantras[getRandomIndex(mantras)];
            if (!usedMantras.includes(currentMessage)){
                usedMantras.push(currentMessage);
                return messageDisplay.innerText = currentMessage;
          } else if (usedMantras.includes(currentMessage)){
                if (usedMantras.length < mantras.length) {
                    currentMessage = mantras[getRandomIndex(mantras)];
                    usedMantras.push(currentMessage);
                    return messageDisplay.innerText = currentMessage;
              } else if (usedMantras.length >= mantras.length) {
                    usedMantras = [];
                    currentMessage = 'Have displayed all the Mantra Messages, restarting loop now';
                    return messageDisplay.innerText = currentMessage;
                    }
                  }
                }
            }
};

function displayNewMessage(){
  messageDisplay.classList.remove("hidden");
  deleteBtn.classList.remove("hidden");
  document.querySelector('.meditation-bell').classList.add("hidden");
  pickMessage();
};

function deleteMessage(){
  if (checkedBox === 'affirmation') {
    for (var i = 0; i<affirmations.length; i++){
      if (affirmations[i].includes(currentMessage)) {
        affirmations.splice(i, 1);
      }
    }
  } else if (checkedBox === 'mantra') {
      for (var i = 0; i<mantras.length; i++) {
        if( mantras[i].includes(currentMessage)) {
          mantras.splice(i, 1)
          console.log('mantras', mantras);
        }
      }
  }
  messageDisplay.innerText = `✨ The message:
                            ${currentMessage}
                            has been deleted ✨`;
};
