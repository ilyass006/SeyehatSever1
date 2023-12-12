

let img_id = document.getElementById("img_id_1");

let img_number = 1;

function slideShow()
{
    console.log(img_number);
    if(img_number >3) {img_number =1;}
    img_id.src = `a${img_number}.jpg`;
    img_number++;
}

setInterval(slideShow,1000);