// const open = document.getElementById("button-one");
// const close = document.getElementById("button-two");
// const modal = document.getElementById("modal-container");

// open.addEventListener("click", () => {
//     modal.classList.add("show");
// })

// close.addEventListener("click", () => {
//     modal.classList.remove("show");
// })

const openMenu = document.getElementById("img-hamburger");
const closeMenu = document.getElementById("img-close");
const mobileModal = document.getElementById("modal-mobile-menu");

openMenu.addEventListener("click", () => {
    mobileModal.classList.add("show");
    closeMenu.classList.add("show");
    openMenu.classList.remove("show");
})
 
closeMenu.addEventListener("click", () => {
    mobileModal.classList.remove("show");
    openMenu.classList.add("show");
    closeMenu.classList.remove("show");
})

 const thanksModal = document.getElementById("thanks");
 const selectReward = document.querySelectorAll(".select");
 const closeReward = document.getElementById("close-reward");

 
selectReward.forEach(select => {
    select.addEventListener("click", () => {
        thanksModal.classList.add("show");
        overlay.classList.add("show");
    })

})

 
closeReward.addEventListener("click", () => {
    thanksModal.classList.remove("show");
    overlay.classList.remove("show");
})

const backProject = document.getElementById("back-project");
const closeModal = document.getElementById("close-modal");
const showModal = document.getElementById("back-modal");
const overlay = document.getElementById("overlay");


backProject.addEventListener("click", () => {
    showModal.classList.add("show");
    overlay.classList.add("show");
})

closeModal.addEventListener("click", () => {
    showModal.classList.remove("show");
    overlay.classList.remove("show");
})


const radioBtn = document.querySelectorAll(".radio");
const enterPledge = document.querySelectorAll(".enter-pledge");
const modalBorder = document.querySelectorAll(".modal-border");

for (let i = 0; i < radioBtn.length; i++) {
    radioBtn[i].addEventListener("click", (e) => {
        clearPledge();
        modalBorder[i].style.border = "2px solid hsl(176, 50%, 47%)";
        enterPledge[i].innerHTML = `
        <hr>
        <div class="flex-pledge">        
        <p>Enter your pledge</p>
        <div class="input-pledge">
            <input type="text" class="pledge-input">
            <button onClick="showThanks()">Continue</button>
        </div>
        </div>
        `
    });    
};

function clearPledge() {
    for (let i = 0; i < radioBtn.length; i++) {        
        enterPledge[i].innerHTML = "";
        modalBorder[i].style.border = "1px solid black";
        
    }
}

function showThanks() {
    thanksModal.classList.add("show");
    overlay.classList.add("show");
    showModal.classList.remove("show");
    clearPledge()
}

const flexBookmark = document.getElementById("flex-bookmark");
const bookmark = document.getElementById("bookmark");

flexBookmark.addEventListener("click", () => {
    checkBookmark();
})

let bookmarks = false;

function checkBookmark() {
    bookmarks = !bookmarks

    bookmarks 
     ? (bookmark.innerHTML = "Bookmarked") 
     : (bookmark.innerHTML = "Bookmark");
};





// const continueBtn = document.getElementsByClassName("continue-btn");


// for (let i = 0; i < continueBtn.length; i++) {
//     continueBtn[i].addEventListener("click", () => {        
//         thanksModal.classList.add("show");
//         overlay.classList.add("show");
//         clearPledge();
//     })
    
// }


// const radioBtn = document.getElementsByClassName(".radio");
// const stands = document.getElementsByClassName("stands");
// const enterPledge = document.getElementsByClassName(".enter-pledge");

// for (let i = 0; i < radioBtn.length; i++) {
//     radioBtn[i].addEventListener("click", () => {
//         for (let i = 0; i < enterPledge.length; i++) {
//             enterPledge[i].classList.add("show");
            
//         }
//     })
    
// }






 
 


 


