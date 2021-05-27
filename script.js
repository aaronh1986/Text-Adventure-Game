const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {}

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
      if(showOption(option)) {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectOption(option));
        optionButtonsElement.appendChild(button);
      }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state);
}

function selectOption(option) {
  const nextTextNodeId = option.nextText;
  if(nextTextNodeId <= 0) {
      startGame()
  }
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'You wake up in a strange, moonlit room. Beside you is a jar of blue goo. You wonder what is going on.',
        options: [
            {
                text: 'Take goo and throw it',
                setState: {blueGoo: true},
                nextText: 2
            },
            {
                text: 'Leave the goo and run',
                nextText: 2,
            }
        ]
    },
    {
        id: 2,
        text: "Good job. You open an imposing, shadow emitting wooden door. Overhead a dark inside balcony looks down on you. A ravenous dog falls down on you from the balcony.",
        options: [
            {
              text: "Fist-fight the dog",
              requiredState: (currentState) => currentState.blueGoo,
              setState: {blueGoo: false, sword: true},
              nextText: 3
            },
            {
              text: "You are a trained social worker. Talk to the dog, try and understand it and soothe its aggresion.",
              requiredState: (currentState) => currentState.blueGoo,
              setState: {blueGoo: false, shield: true},
              nextText: 3
            },
            {
              text: "Show you're true colours.....RUN",
              nextText: 3
            },
        ]
    },
    {
        id: 3,
        text: "Good job. The moonlight casts the tower on your senses. It's too much to take in, what are you going to do???",
        options: [
            {
              text: "Brave the ghastly shapes, shifting and oozing and noisily floating.",
              nextText: 4
            },
            {
              text: "RUN",
              nextText: 5
            },
            {
              text: "Learn and assimilate",
              nextText: 6
            },
            {
                id: 4,
                text: "You realise it's actually you're apartment and the dog was the television that was left on.",
                options: [
                    {
                        text: 'Restart',
                        nextText: -1,
                    }
                ],          
            }
        ]
    }
]

startGame();