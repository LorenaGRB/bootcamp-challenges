//CON FUNCIONES
// const audio = document.getElementById("audio");
// const play = document.getElementById("play");
// let pause = false
// play.onclick = ()=>{
//     console.log('click')
//     if(!pause){
//         audio.play();console.log('play')
//         pause = true
//     }else{
//         audio.pause();
//         pause = false
//     }
// }


//CON CLASES
// class Reproductor {
//     constructor(audio,play) {
//         this.audio = audio;
//         this.play = play;
//     }
    
//     static handleClick=()=>{
//         let pause = false
//         play.onclick = ()=>{
//             console.log('click')
//             if(!pause){
//                 audio.play();console.log('play')
//                 pause = true
//             }else{
//                 audio.pause();
//                 pause = false
//             }
//         }
//     }
// }
// const clase = new Reproductor(document.getElementById("audio"),document.getElementById("play")) ;
// Reproductor.handleClick()


//CON OBJETO
// const init = {
//     audio :document.getElementById("audio"),
//     play : document.getElementById("play"),
//     handleClick : ()=>{
//         console.log('click')
//         if(!pause){
//             init.audio.play();console.log('play');
//             this.pause = true
//         }else{
//             init.audio.pause();
//             this.pause = false
//         }
//     }
// }
// var pause = false;
// init.play.onclick = init.handleClick


//usando Prototype
//entiendo que son los prototypes, pero no se como aplicarlo al reproductor de musica. 
