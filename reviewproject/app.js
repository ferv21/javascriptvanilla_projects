const reviews = [
    {
        id:1,
        name:"Brie Larsson",
        job:"Atriz",
        img:"https://images.unsplash.com/photo-1613483811450-01309af4902d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        text:"Lorem Ipsum taratatayadwtdarj idjawduihaw doihpawiudhaw oiwahdpauwhfupáw áwoihedáuwh"
    },
    {
        id:2,
        name:"Joao Pedro",
        job:"Web Developer",
        img:"https://images.unsplash.com/photo-1628548366581-7b0273c6a5ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80",
        text:"Lorem Ipsum taratatayadwtdarj idjawduihaw doihpawiudhaw oiwahdpauwhfupáw áwoihedáuwh"
    },
    {
        id:3,
        name:"Maria Joana",
        job:"Merendeira",
        img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        text:"Lorem Ipsum taratatayadwtdarj idjawduihaw doihpawiudhaw oiwahdpauwhfupáw áwoihedáuwh"
    },
    {
        id:4,
        name:"Nicolas Ferreira",
        job:"Ministro",
        img:"https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        text:"Lorem Ipsum taratatayadwtdarj idjawduihaw doihpawiudhaw oiwahdpauwhfupáw áwoihedáuwh"
    }
]

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
   showPerson();
});

const showPerson = () => {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextButton.addEventListener("click", () => {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
})

prevButton.addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length - 1;
    }
    showPerson();
})
randomBtn.addEventListener("click" , () => {
    currentItem = Math.floor(Math.random() * reviews.length);
    console.log(currentItem);
    showPerson();
})