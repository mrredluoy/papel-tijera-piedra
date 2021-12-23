const btn=document.querySelectorAll('.imagen')
const displayHumano=document.getElementById('displayIMG')
const cardMaquina=document.querySelectorAll('.imagenM')
const cardsArray=[].slice.call(cardMaquina);
const imgMaquina=document.getElementById('maquina')
const[piedra,tijera,papel]=btn;
const vidasHumanas=document.getElementById('vidaHumana')
const vidaMaquina=document.getElementById('vidaMaquina')
const totalvidasH=vidasHumanas.children
const totalvidasM=vidaMaquina.children
const mesenger=document.getElementById('mesenger')
const sonido=document.getElementById('sonido')
const mFINAL=document.getElementById('Mfinal')

sonido.play();
 let activar=false
 let piedraACTIVATION=true,
     tijeraACTIVATION=true,
     papelACTIVATION=true ;

function promesa(){
   return new Promise((resolver)=>{
     setTimeout(()=>{
       let clasemaquina=imgMaquina.classList.item('')
       let claseHUMANO=displayHumano.classList.item('')      
       if(clasemaquina!==null){
         clasemaquina=clasemaquina.toLowerCase();
         if (clasemaquina==claseHUMANO) {
           mesenger.textContent='Quedaron empates'
            displayHumano.setAttribute('src',"img/interrogacion.png")
            imgMaquina.setAttribute('src',"img/interrogacion.png")
            displayHumano.classList.remove(`${claseHUMANO}`)
            imgMaquina.classList.remove(`${(clasemaquina).toUpperCase()}`)
            tijera.style.border='none'
            piedra.style.border='none'
            papel.style.border='none'
            cardsArray.forEach(element => {
               element.style.border='none';
            });
            papelACTIVATION=true
            piedraACTIVATION=true
            tijeraACTIVATION=true
           
         }else if ((clasemaquina=='tijera'&&claseHUMANO=='papel')||(clasemaquina=='papel'&&claseHUMANO=='piedra')|| (clasemaquina=='piedra'&&claseHUMANO=='tijera')){
              mesenger.textContent='Gana Maquina'
              displayHumano.setAttribute('src',"img/interrogacion.png")
              imgMaquina.setAttribute('src',"img/interrogacion.png")
              displayHumano.classList.remove(`${claseHUMANO}`)
              imgMaquina.classList.remove(`${(clasemaquina).toUpperCase()}`)
              tijera.style.border='none'
              piedra.style.border='none'
              papel.style.border='none'
              cardsArray.forEach(element => {
                element.style.border='none';
             });
             vidasHumanas.removeChild(totalvidasH[0])
             papelACTIVATION=true
             piedraACTIVATION=true
             tijeraACTIVATION=true            
             if (vidasHumanas.children.length<5) {
               vidasHumanas.classList.add('peligro')
             }
              if(vidasHumanas.children.length<2){
               vidasHumanas.classList.add('peligro1')
             }
            if(vidaMaquina.children.length<5){
               vidaMaquina.classList.add('peligro')
            }
            if(vidaMaquina.children.length<2){
               vidaMaquina.classList.add('peligro1')
             } 
            if(vidaMaquina.children.length==0){
               papelACTIVATION=false
               piedraACTIVATION=false
               tijeraACTIVATION=false
               mesenger.textContent='You Win'
               mFINAL.textContent='FELICIDADES  HACERTASTE BIEN'
            } 
            if(vidasHumanas.children.length==0){
               papelACTIVATION=false
               piedraACTIVATION=false
               tijeraACTIVATION=false         
               mesenger.textContent='Game Over'
               mFINAL.textContent='PARECE NO TUVISTE SUERTE'
             } 
             
         }else {
            mesenger.textContent='Ganaste'
            displayHumano.setAttribute('src',"img/interrogacion.png")
            imgMaquina.setAttribute('src',"img/interrogacion.png")
            displayHumano.classList.remove(`${claseHUMANO}`)
            imgMaquina.classList.remove(`${(clasemaquina).toUpperCase()}`)
            tijera.style.border='none'
            piedra.style.border='none'
            papel.style.border='none'
             cardsArray.forEach(element => {
                element.style.border='none';
             });
             vidaMaquina.removeChild(totalvidasM[0])
             papelACTIVATION=true
             piedraACTIVATION=true
             tijeraACTIVATION=true
             if (vidasHumanas.children.length<5) {
               vidasHumanas.classList.add('peligro')
             }
              if(vidasHumanas.children.length<2){
               vidasHumanas.classList.add('peligro1')
             }
            if(vidaMaquina.children.length<5){
               vidaMaquina.classList.add('peligro')
            }
            if(vidaMaquina.children.length<2){
               vidaMaquina.classList.add('peligro1')
             } 
            if(vidaMaquina.children.length==0){
               papelACTIVATION=false
               piedraACTIVATION=false
               tijeraACTIVATION=false
               mesenger.textContent='You Win'
               mFINAL.textContent='FELICIDADES  HACERTASTE BIEN'
              
            } 
            if(vidasHumanas.children.length==0){
               papelACTIVATION=false
               piedraACTIVATION=false
               tijeraACTIVATION=false
               mesenger.textContent='Game Over'
               mFINAL.textContent='PARECE NO TUVISTE SUERTE'
              
             } 
         }
 
       
       }else{
            resolver()
       }
     
     },2500)
   })
}
 
piedra.addEventListener('click',e=>{

   if(piedraACTIVATION==true){
      tijeraACTIVATION=false
      papelACTIVATION=false
      mesenger.textContent='...'
    let claaaa=piedra.id
 displayHumano.setAttribute('src',"img/piedra1.png")
 displayHumano.classList.add(`${claaaa}`)
 piedra.style.border='5px solid  #f1063c'
 
 maquina()
promesa()
         .then(promesa)
         .then(promesa)
         .then(promesa)
         .then(promesa) 
         .then(promesa) 



   }
})

papel.addEventListener('click',e=>{

 
   if (papelACTIVATION==true) {
      tijeraACTIVATION=false
      piedraACTIVATION=false
      mesenger.textContent='...'
    let claaaa=papel.id
    displayHumano.setAttribute('src',"img/papel1.png")
    displayHumano.classList.add(`${claaaa}`)
    papel.style.border='5px solid  #f1063c'
    maquina() 
    promesa()
    .then(promesa)
    .then(promesa)
    .then(promesa)
    .then(promesa)
    .then(promesa)   
   }
 })   



tijera.addEventListener('click',e=>{

 if ( tijeraACTIVATION==true) {
   papelACTIVATION=false
   piedraACTIVATION=false
   mesenger.textContent='...' 
    let claaaa=tijera.id
    displayHumano.setAttribute('src',"img/tijera1.png")
    displayHumano.classList.add(`${claaaa}`)
    tijera.style.border='5px solid  #f1063c'
    maquina()    
    promesa()
    .then(promesa)
    .then(promesa)
    .then(promesa)
    .then(promesa) 
    .then(promesa)  
   
}  
    

})



 function maquina(){

  let interval=setInterval(() => {

    let ramdom=Math.floor(Math.random()*(15-0+1)+0)  
     
    for(let i=0;i<3;i++){       
        setTimeout(()=>{
             cardsArray[i].style.border='5px solid  #f1063c'
        },100)
         if (ramdom===i) {
           let pintar= cardsArray[i].getAttribute('src');
           let clase= cardsArray[i].id;
           imgMaquina.setAttribute('src',pintar)
           imgMaquina.classList.add(`${clase}`)          
           activar==true
           clearInterval(interval)
           
         break
        }  

        setTimeout(()=>{
            cardsArray[i].style.border='none'
           },200)        
    }
          
 },300); 


};






