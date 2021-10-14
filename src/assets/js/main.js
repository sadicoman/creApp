"use strict";

let ramulus = document.querySelector("#ramulus");
let phyllium = document.querySelector("#phyllium");
let dataValues = document.querySelectorAll("section[data-filter]");

// let boutons = document.querySelectorAll(".btn");

// for(let bouton of boutons){
//     bouton.addEventListener("click", (e) =>{

//     }   

// }

ramulus.addEventListener("click", (e) =>{
    ramulus.classList.add("disabled");
    phyllium.classList.toggle("disabled");//Tu enlèves la classe ou la rajoute
    for(let dataValue of dataValues){
        let btnRamulus = ramulus.getAttribute("data-filter");
        let filter = dataValue.getAttribute("data-filter").toLowerCase();//Récupère la valeur du data-filter en minuscule
        if(filter.includes(btnRamulus)){//Si la valeur de filter inclu la valeur stockée dans term
            dataValue.classList.remove("user--hide");//Tu enlèves la classe user--hide
            dataValue.classList.remove("disabled");//Tu enlèves la classe 
        }else{//Sinon
            dataValue.classList.add("user--hide");//tu ajoutes la classe user--hide
            dataValue.classList.add("disabled");//tu ajoutes la classe
        }
    }
});

phyllium.addEventListener("click", (e) =>{
    ramulus.classList.remove("disabled");//Tu enlèves la classe ou la rajoute
    phyllium.classList.toggle("disabled");
    for(let dataValue of dataValues){
        let btnPhyllium = phyllium.getAttribute("data-filter");
        let filter = dataValue.getAttribute("data-filter").toLowerCase();//Récupère la valeur du data-filter en minuscule
        if(filter.includes(btnPhyllium)){//Si la valeur de filter inclu la valeur stockée dans term
            dataValue.classList.remove("user--hide");//Tu enlèves la classe user--hide
            dataValue.classList.remove("disabled");//Tu enlèves la classe 
        }else{//Sinon
            dataValue.classList.add("user--hide");//tu ajoutes la classe user--hide
            dataValue.classList.add("disabled");//tu ajoutes la classe
        }
    }
}); 



/*-------------------------------------------------------------------------*/

let partage = document.querySelector(".section--partage");
if (partage){
    (function(){

        var popupCenter = function(url, title, width, height){
            var popupWidth = width || 640;
            var popupHeight = height || 320;
            var windowLeft = window.screenLeft || window.screenX;
            var windowTop = window.screenTop || window.screenY;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth;
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            var popupLeft = windowLeft + windowWidth / 2 - popupWidth / 2 ;
            var popupTop = windowTop + windowHeight / 2 - popupHeight / 2;
            var popup = window.open(url, title, 'scrollbars=yes, width=' + popupWidth + ', height=' + popupHeight + ', top=' + popupTop + ', left=' + popupLeft);
            popup.focus();
            return true;
        };
        
        document.querySelector('.share_facebook').addEventListener('click', function(e){
            e.preventDefault();
            var url = this.getAttribute('data-url');
            var shareUrl = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url);
            popupCenter(shareUrl, "Partager sur facebook");
        });
    })();    
}

