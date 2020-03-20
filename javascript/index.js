const asfd = 123;
var skf = 123;

// console.log("hello world!dsaf");

// const info = {
//     name : "yeonjun",
//     age : 19,
//     gender : "male",

// }

// function Hello(name){
//     console.log("Hello " + name);
// }

// console.log(info);

// Hello('Jun');

// console.log(document);
// console.error("error!");
// const head = document.getElementsByTagName("h1");
// console.log(head);
// const title = document.getElementById("title");
// title.innerHTML = 'hi from js';
// title.style.color = "white"
// console.log(title);
// console.dir(document);
// document.title = "Hello Im javascript!";
// const title2 = document.querySelector("#title");
// const asdf = document.querySelector(".asdf");
// console.log(asdf);

// function handleClick(event){
//     title.style.color = 'black';
    
// }

// title.addEventListener('click', handleClick);

/*
 == equal operator

 10 == '10' true
 '값'이 같은지 판단

 === strict equal operator

 10 === '10' false
 '값'과 '타입'이 같은지 판단

*/

// if('nicolas' === 'nicolaslas'){
//     console.log('true');
// } 
// else if (10 === '10'){
//     console.log('false');
// }
// else{
//     console.log('false');
// }

/*
or ||
and &&
*/

// if(20 > 5 && '10' === 10){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

// const age = prompt('how old are you?'); 

// if (age > 20 && age <= 21){
//     console.log("you can drink but you should not");
// }
// else if(age > 21){
//     console.log('go ahed');
// }

// else{
//     console.log("you can't drink");
// }

// const title = document.querySelector('#title');

// const base_color = 'rgb(52, 73, 94)';
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if(currentColor === base_color){
//         title.style.color = OTHER_COLOR;
//     }
//     else{
//         title.style.color = base_color;
//     }
// }

// function init(){
//     title.style.color = base_color;
//     title.addEventListener('mouseenter', handleClick);
// }

// init();

// function handleonline(){
//     console.log("lallalalal");
// }


// window.addEventListener("online", handleonline);

const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

function handleClick() {
    // const hasClass = title.classList.contains(CLICKED_CLASS);

    // if(!hasClass){
    //     title.classList.add(CLICKED_CLASS);
    // }
    // else {
    //     title.classList.remove(CLICKED_CLASS);
    // }
    
    title.classList.toggle(CLICKED_CLASS);

}

function init() {
    title.addEventListener('click', handleClick);
}

init();