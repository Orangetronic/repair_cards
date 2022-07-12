const cards = []

const cardDefinitions = [
  {
    "value": "Ace",
    "suit": "Hearts",
    "content": "Spare Parts"
  },
  {
    "value": "2",
    "suit": "Hearts",
    "content": "Mindful"
  },
  {
    "value": "3",
    "suit": "Hearts",
    "content": "Role Model"
  },
  {
    "value": "4",
    "suit": "Hearts",
    "content": "Legistation"
  },
  {
    "value": "5",
    "suit": "Hearts",
    "content": "Ingrained "
  },
  {
    "value": "6",
    "suit": "Hearts",
    "content": "Knowledge"
  },
  {
    "value": "7",
    "suit": "Hearts",
    "content": "Save"
  },
  {
    "value": "8",
    "suit": "Hearts",
    "content": "Community"
  },
  {
    "value": "9",
    "suit": "Hearts",
    "content": "Character"
  },
  {
    "value": "10",
    "suit": "Hearts",
    "content": "Can I Fix It"
  },
  {
    "value": "Jack",
    "suit": "Hearts",
    "content": "It Was Nana's"
  },
  {
    "value": "Queen",
    "suit": "Hearts",
    "content": "Why Not?"
  },
  {
    "value": "King",
    "suit": "Hearts",
    "content": "Love the Planet "
  },
  {
    "value": "Ace",
    "suit": "Clubs",
    "content": "Nø Updates"
  },
  {
    "value": "2",
    "suit": "Clubs",
    "content": "Nø Safety "
  },
  {
    "value": "3",
    "suit": "Clubs",
    "content": "Nø Repairer  "
  },
  {
    "value": "4",
    "suit": "Clubs",
    "content": "Nø Rights to Repair"
  },
  {
    "value": "5",
    "suit": "Clubs",
    "content": "Nø Choice "
  },
  {
    "value": "6",
    "suit": "Clubs",
    "content": "Nø Information"
  },
  {
    "value": "7",
    "suit": "Clubs",
    "content": "Nø Access"
  },
  {
    "value": "8",
    "suit": "Clubs",
    "content": "Nø Training"
  },
  {
    "value": "9",
    "suit": "Clubs",
    "content": "Nø Money"
  },
  {
    "value": "10",
    "suit": "Clubs",
    "content": "Nø Confidence "
  },
  {
    "value": "Jack",
    "suit": "Clubs",
    "content": "Nø Incentive "
  },
  {
    "value": "Queen",
    "suit": "Clubs",
    "content": "Nø Time"
  },
  {
    "value": "King",
    "suit": "Clubs",
    "content": "Nø Desire"
  },
  {
    "value": "Ace",
    "suit": "Spades",
    "content": "Bodge "
  },
  {
    "value": "2",
    "suit": "Spades",
    "content": "Slow Down"
  },
  {
    "value": "3",
    "suit": "Spades",
    "content": "Use String"
  },
  {
    "value": "4",
    "suit": "Spades",
    "content": "Plan Ahead"
  },
  {
    "value": "5",
    "suit": "Spades",
    "content": "Collaborate"
  },
  {
    "value": "6",
    "suit": "Spades",
    "content": "Self Help"
  },
  {
    "value": "7",
    "suit": "Spades",
    "content": "Repurpose"
  },
  {
    "value": "8",
    "suit": "Spades",
    "content": "Home"
  },
  {
    "value": "9",
    "suit": "Spades",
    "content": "Share"
  },
  {
    "value": "10",
    "suit": "Spades",
    "content": "Local"
  },
  {
    "value": "Jack",
    "suit": "Spades",
    "content": "Maintain"
  },
  {
    "value": "Queen",
    "suit": "Spades",
    "content": "Necessity"
  },
  {
    "value": "King",
    "suit": "Spades",
    "content": "Control"
  },
  {
    "value": "Ace",
    "suit": "Diamonds",
    "image": true,
    "content": "Broken TVs in a pile"
  },
  {
    "value": "2",
    "suit": "Diamonds",
    "image": true,
    "content": "PC tower converted into a coffee maker"
  },
  {
    "value": "3",
    "suit": "Diamonds",
    "image": true,
    "content": "Mac tower used as a mailbox"
  },
  {
    "value": "4",
    "suit": "Diamonds",
    "image": true,
    "content": "CD case used to keep a bagel sandwich fresh"
  },
  {
    "value": "5",
    "suit": "Diamonds",
    "image": true,
    "content": "Computer monitor converted into a cat bed"
  },
  {
    "value": "6",
    "suit": "Diamonds",
    "image": true,
    "content": "VCR converted into a toaster"
  },
  {
    "value": "7",
    "suit": "Diamonds",
    "image": true,
    "content": "A glass mug with half drunk tea sits on a floppy disk used as a coaster. A stack of floppy disk coasters sits next to the mug"
  },
  {
    "value": "8",
    "suit": "Diamonds",
    "image": true,
    "content": "A hand holds a barbell made from CDs"
  },
  {
    "value": "9",
    "suit": "Diamonds",
    "image": true,
    "content": "Two mac towers converted into a bench"
  },
  {
    "value": "10",
    "suit": "Diamonds",
    "image": true,
    "content": "A telephone booth without a telephone and in its place is a small tree."
  },
  {
    "value": "Jack",
    "suit": "Diamonds",
    "image": true,
    "content": "A motherboard sits in a firepit with flames spraying out below it"
  },
  {
    "value": "Queen",
    "suit": "Diamonds",
    "image": true,
    "content": "A very long cat cable on fire"
  },
  {
    "value": "King",
    "suit": "Diamonds",
    "image": true,
    "content": "A laptop sits in intense flames, its screen melted off and steam coming from the keyboard"
  },
  {
    "value": "J1",
    "suit": "Joker",
    "image": true,
    "content": "Stained glass window by contemporary artist repairing windows destroyed in in WWII in the Cathedral of Saint Cyr-Sainte Julitte"
  },
  {
    "value": "J2",
    "suit": "Joker",
    "image": true,
    "content": "Stained glass window by contemporary artist repairing windows destroyed in in WWII in the Cathedral of Saint Cyr-Sainte Julitte"
  }
]

const cardsContainer = document.getElementById("cards-container")

cardDefinitions.forEach(function (cardDefinition, index) {
  const card = document.createElement('div') 
  card.innerHTML = `
    <div class="content">
      <div class="front">
        <!-- Content here is displayed using the background image -->
      </div>
      <div class="back" style="background-image: 
        url(/backgrounds/RA_logo.png),
        url(/backgrounds/cropped_${index}.jpg);
        ">
        ${
          cardDefinition.image
          ? `<img src="/${cardDefinition.suit}/${cardDefinition.value}.svg" alt="${cardDefinition.content}" />`
          : `<h2>${cardDefinition.content}</h2>`
        }
        <legend>
          ${
            cardDefinition.suit !== "Joker"
              ? `${cardDefinition.value} of ${cardDefinition.suit}`
              : "Joker"
          }
        </legend>
      </div>
    </div>
  `
  
  card.classList.add('card')
  card.setAttribute("data-suit", cardDefinition.suit)
  card.setAttribute("data-value", cardDefinition.value)
  card.onclick = () => {
    console.log("hullo?")
    if (card.classList.contains("flipped")) {
      card.classList.remove("flipped")
    } else {
      card.classList.add("flipped")
    }
  }
  
  cards.push(card)
  
})

showAll()


let shuffled = [...cards]
shuffle()


function drawThree () {
  shuffle()
  const [one, two, three, ...rest] = shuffled
  show([one, two, three])
}

function show (cardsToShow) {
  clearDeck()
  for (const card of cardsToShow) {
    cardsContainer.appendChild(card)
  }
}

function showAll() {
  show(cards)
}

function showShuffled () {
  show(shuffled)
}

function shuffleAndShow () {
  shuffle()
  showShuffled()
}

function shuffle () {
  shuffled.sort(
    () => Math.random() > 0.5 ? 1 : -1
  )
}

function clearDeck() {
  cardsContainer.innerHTML = ""
  
}

function revealThree () {
  let flippable = cards.filter(card => !card.classList.contains("flipped"))
  if (flippable.length <=3) {
    revealAll()
  } else {
    let first
    let count = 0
    while (count < 3) {
      const toFlip = flippable[Math.floor(Math.random() * flippable.length)]
      toFlip.classList.add("flipped")
      if (!first) first = toFlip
      count++
    }
    first.scrollIntoViewIfNeeded()
  }
}

function revealAll () {
  for (const card of cards) {
    card.classList.add("flipped")
  }
}

function hideAll() {
  for (const card of cards) {
    if (card.classList.contains("flipped")) card.classList.remove("flipped")
  }
}
  
var running = false
function flipOrNext () {
  running = true
  let visibleCards = document.getElementsByClassName("card")
  if (visibleCards.length !== 3)  {
    drawThree()
    return setTimeout(() => {
      flipOrNext()
    }, 3000)
    visibleCards = document.getElementsByClassName("card")
  }
  let unflipped = [...visibleCards].filter(card => !card.className.includes("flipped"))
  if (unflipped.length == 0) {
    hideAll()
    drawThree()
  } else {
    unflipped[0].classList.add("flipped")
  }
  setTimeout(() => {
    if (running) flipOrNext()
  }, 3000)
}

