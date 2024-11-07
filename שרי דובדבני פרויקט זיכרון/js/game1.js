

const image = ['url("../image/20.png")','url("../image/21.webp")','url("../image/22.jpg")','url("../image/23.jpg")','url("../image/24.png")','url("../image/25.jpg")','url("../image/26.jpg")','url("../image/27.webp")','url("../image/28.jpg")','url("../image/30.webp")','url("../image/31.jpg")','url("../image/32.png")','url("../image/20.png")','url("../image/21.webp")','url("../image/22.jpg")','url("../image/23.jpg")','url("../image/24.png")','url("../image/25.jpg")','url("../image/26.jpg")','url("../image/27.webp")','url("../image/28.jpg")','url("../image/30.webp")','url("../image/31.jpg")','url("../image/32.png")','url("../image/20.png")','url("../image/21.webp")','url("../image/22.jpg")','url("../image/23.jpg")','url("../image/24.png")','url("../image/25.jpg")','url("../image/26.jpg")','url("../image/27.webp")','url("../image/28.jpg")','url("../image/30.webp")','url("../image/31.jpg")','url("../image/32.png")']

let d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let click = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
       document.getElementById(String(Xindex)).style.backgroundImage='url("../img/disney.jpg")'
       document.getElementById(String(Yindex)).style.backgroundImage='url("../img/disney.jpg")'
           
        }, 1230)
       
    }
    click[ Xindex]=0;
    click[Yindex]=0;
    if (count==6) {
        document.style.backgroundImage='url("../img/disney.jpg")' 
    }
}

function createCard() {
    for (let index = 0; index <24; index++) {

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
    d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];//מערך שמסמל את מיקום התמונות שהוגרלו כדי שתמונה לא  תחזור על עצמה
    let k = [null, null, null, null, null, null, null, null, null, null, null, null,null, null, null, null, null, null, null, null, null, null, null, null]//מערך ששומר את התמונות שהוגרלו בצורה רנדומלית

    while (j < image.length && j < img.length ) {//לולאה שמגרילה את התמונות
        let e = image[m];
        randomNumber = Math.floor(Math.random() * 24)
        while (d[randomNumber] == 1) {
            randomNumber = Math.floor(Math.random() * 24)
        }
        d[randomNumber] = 1;
        k[randomNumber] = e;
        m++;
        j++;
    }
    start = k;
}







