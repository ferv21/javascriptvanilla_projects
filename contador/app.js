let count = 0;


const number = document.getElementById("number");
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
    btn.addEventListener("click" , (event) => {
        const styles= event.currentTarget.classList;
        if(styles.contains("btn-prev")){
            count--;
        } else if(styles.contains("btn-next")) {
            count++;
        }else {
            count = 0;
        }
        if(count > 0) {
            number.style.color = 'green';
        } else if(count < 0) {
            number.style.color = 'red'
        }else{
            number.style.color = 'black'
        }
        number.textContent = count;
    })
})


// const number = document.getElementById("number");
// const prevButton = document.getElementById("prevButton");
// const resetButton = document.getElementById("resetButton");
// const nextButton = document.getElementById("nextButton");

// let count = 0


// prevButton.addEventListener("click", () => {
//     number.textContent = count--;
// })

// resetButton.addEventListener("click", () => {
//     number.textContent = 0
// })

// nextButton.addEventListener("click", () => {
//     number.textContent = count++;
// })