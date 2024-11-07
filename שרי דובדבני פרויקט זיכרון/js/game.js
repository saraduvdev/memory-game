const image = ['url("../img/1.jpg")', 'url("../img/2.webp")','url("../img/3.gif")','url("../img/4.gif")','url("../img/5.jpg")','url("../img/7.jpg")','url("../img/1.jpg")', 'url("../img/2.webp")','url("../img/3.gif")','url("../img/4.gif")','url("../img/5.jpg")','url("../img/7.jpg")']
let start = image;
let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let click = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let flag = true;
let x;
let count=0;



function comperdto() {
    let index
    let X;
    let Xindex
    let Y;
    let Yindex;
    
    for (index = 0; index < click.length; index++) {
        if (click[index] == 1)
        { X = start[index];
            Xindex = index;
            break;}
           


    }

    for (let i = index+1; i < click.length; i++) {
        if (click[i] == 1)
        {
            Y = start[i];
            Yindex = i;
            break;
        }
           


    }
    
    if (X == Y) {
        count++;
        


    }
    else
    {
        setTimeout(() => {
       document.getElementById(String(Xindex)).style.backgroundImage='url("../image/חשוב.jpg")'
       document.getElementById(String(Yindex)).style.backgroundImage='url("../image/חשוב.jpg")'
           
        }, 1230)
       
    }
    click[ Xindex]=0;
    click[Yindex]=0;
    if (count==6) {
        document.style.backgroundImage='url("../image/חשוב.jpg")'
           
        
    }


}

function createCard() {
    for (let index = 0; index <12; index++) {

        let element = document.createElement("button");
        element.setAttribute("id", index);
        element.className = "c";
        document.getElementById("game").appendChild(element);
        element.addEventListener("click", function () {
            let d=document.getElementById(String(index));
            x=d.id;
            element.style.backgroundImage= start[x];
            click[x] = 1;
            flag = !flag;
              
            if (flag==true)
            {comperdto();}
                
               

        })

    }
}

function Start() {
   
    flag = true;
    let game = document.getElementById('game');
    game.innerHTML = "";
    game.style.display = 'block'
   

    createCard();
    let j = 0, randomNumber, m = 0;
    d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//מערך שמסמל את מיקום התמונות שהוגרלו כדי שתמונה לא  תחזור על עצמה
    let k = [null, null, null, null, null, null, null, null, null, null, null, null]//מערך ששומר את התמונות שהוגרלו בצורה רנדומלית

    while (j < image.length) {//לולאה שמגרילה את התמונות
        let e = image[m];
        randomNumber = Math.floor(Math.random() * 12)
        while (d[randomNumber] == 1) {
            randomNumber = Math.floor(Math.random() * 12)
        }
        d[randomNumber] = 1;
        k[randomNumber] = e;
        m++;
        j++;

    }
    start = k;

}
function GameOpener() {
    debugger
    window.open("../html/game.html");
}