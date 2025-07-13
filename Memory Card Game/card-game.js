const section = document.querySelector('section');
const playerLivesCount = document.querySelector('span') 
let  playerLive = 6;
//link text 
playerLivesCount.textContent = playerLive;
//Generate the data 
const getData = ()=> [
    {imgSrc:"./image/SAHIL PHOTO.jpg",
        name:"cherries"
    },  
    {imgSrc:"./image/ALI IMRAN PHOTO.jpg",
        name:"grapes"
    },
    {imgSrc:"./image/asifphoto.jpeg",
        name:"lemon"
    },
    {imgSrc:"./image/orange.png",
        name:"orange"
    },
    {imgSrc:"./image/pineapple.png",
        name:"pineapple"
    },
    {imgSrc:"./image/strawberry.png",
        name:"strawberry"
    },
    {imgSrc:"./image/tomato.png",
        name:"tomato"
    },
    {imgSrc:"./image/watermelon.png",
        name:"watermelon"
    },
    {imgSrc:"./image/SAHIL PHOTO.jpg",
        name:"cherries"
    },  
    {imgSrc:"./image/ALI IMRAN PHOTO.jpg",
        name:"grapes"
    },
    {imgSrc:"./image/asifphoto.jpeg",
        name:"lemon"
    },
    {imgSrc:"./image/orange.png",
        name:"orange"
    },
    {imgSrc:"./image/pineapple.png",
        name:"pineapple"
    },
    {imgSrc:"./image/strawberry.png",
        name:"strawberry"
    },
    {imgSrc:"./image/tomato.png",
        name:"tomato"
    },
    {imgSrc:"./image/watermelon.png",
        name:"watermelon"
    },
];

//randomize 

const randomize = () => {
    const cardData = getData();
    cardData.sort(()=> Math.random () - 0.5);
 return cardData;
};

//card Generator function 

const cardGenerator = ()=>{
    cardData = randomize();
    //Generate the HTML
    cardData.forEach((item) => {
    const card = document.createElement('div');
    const face = document.createElement('img');
    const back = document.createElement('div');
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    //Attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute('name', item.name);

    // Attach the cards to the section 
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);
    card.addEventListener('click', (e)=>{
    card.classList.toggle('toggleCard');
    checkCards(e);
    });
}); 
};
//Check Cards

const checkCards = (e)=>{
    const clickedCard = e.target;
    clickedCard.classList.add('flipped');
    const flippedCard = document.querySelectorAll('.flipped');
    const toggleCard = document.querySelectorAll('.toggleCard')
    //Logic
    if (flippedCard.length === 2){
        if(flippedCard[0].getAttribute('name') === flippedCard[1].getAttribute('name')){  
            flippedCard.forEach((card)=> {
            card.classList.remove('flipped');
            card.style.pointerEvents ="none"
        });   
    }
        else{ 
            flippedCard.forEach((card) => 
            {
           card.classList.remove("flipped")
          setTimeout(()=> card.classList.remove("toggleCard"),1000);
            });
            playerLive--;
            playerLivesCount.textContent = playerLive;
            if(playerLive === 0){
                restart("try again")
            }
        };
    };

 //run a check
 if(toggleCard.length === 16)
 {
    restart('you won')
 }
}
const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll('.card');
    section.style.pointerEvents ='none';
    cardData.forEach( (item,index) => {
    cards[index].classList.remove('toggleCard');

        //randomize
        setTimeout(()=>{
            
    cards[index].style.pointerEvents = "all";
    faces[index].src = item.imgSrc;
    cards[index].setAttribute('name',item.name)
    section.style.pointerEvents ='all'
    }, 1000);

    });
    playerLive= 6;
    playerLivesCount.textConten = playerLive;
    setTimeout(()=>window.alert(text),100);
};
cardGenerator()
 
