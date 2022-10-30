const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const coBtn = document.querySelector('.co-btn');

const wrapperRect = wrapper.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();

yesBtn.addEventListener('click', ()=>{
    question.innerHTML = 'Its a Date ;)';
});
noBtn.addEventListener('click', ()=>{
    question.innerHTML = 'Smarty... still wanna date?';
});
coBtn.addEventListener('click', ()=>{
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=vishjeph520@gmail.com&su=RegardingYourRequestForDate&body=DearLove&bcc=vishmeena520@gmail.com');
});

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() *(wrapperRect.width - noBtnRect.width)) +1;
    const j = Math.floor(Math.random() * (wrapperRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = i + 'px';
});