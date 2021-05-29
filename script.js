const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('option-buttons');

let state = {};

function startGame() {
  state = {};
  showTextNode(1);
}

function showTextNode(textNodeIndex) {

}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: "You wake up in a strange place and you see a jar of blue goo near you.",
        options: [
            {
                text: "Take the goo",
            },
            {
                text: "Leaveth the goo",
            }
        ]
    }
]

startGame();

