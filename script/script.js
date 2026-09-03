// BUTTON ANIMATION

const btns = document.querySelectorAll('button');

btns.forEach((btn) => {
    btn.addEventListener("mousedown", () => {
        btn.classList.add('jello-horizontal')
    });

    btn.addEventListener("mouseout", () => {
        btn.classList.remove('jello-horizontal')
    });
})

// ===============call-Icon========================
const callImage = document.querySelector('.call-image')

callImage.addEventListener("mousedown", () => {
    callImage.classList.add('jello-horizontal')
});

callImage.addEventListener("mouseout", () => {
    callImage.classList.remove('jello-horizontal')
});

// ====================================
// ==============TYPING ==========================
const typingIn = document.querySelector('.typingIn');
const text = typingIn.textContent;
typingIn.textContent = '';

let index = 0;

function type() {
    if (index < text.length) {
        typingIn.textContent += text.charAt(index);

        index++;

        setTimeout(() => {
            type()
        }, 60);
    }
}

type()

// ====================================MENU BAR

const menuBarContainer = document.querySelector('.menu-bar-container');
const menu = document.querySelector('.menu');
const closeBar = document.querySelector('.close');
const navLinkPopOut = document.querySelector('.nav-link-pop-out');
const navLink1s = document.querySelectorAll('.nav-link-1');

menuBarContainer.addEventListener('click', () => {
    menuBarContainer.classList.toggle('clicked');
    if (menuBarContainer.classList.contains('clicked')) {
        closeBar.classList.remove('opacity-0');
        menu.classList.add('opacity-0');
        navLinkPopOut.classList.add('show-nav-link');
    } else {
        closeBar.classList.add('opacity-0');
        menu.classList.remove('opacity-0');
        navLinkPopOut.classList.remove('show-nav-link');
    }
})

// navLink1s.forEach((navLink1) => {
//     navLink1.addEventListener('click', () => {
//         navLinkPopOut.classList.remove('show-nav-link');
//         closeBar.classList.add('opacity-0');
//         menu.classList.remove('opacity-0');
//     })
    
// })
