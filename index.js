let ran; 
let flag = true;
if(flag = true){
    ran = Math.floor((Math.random() * 13) + 1);
    
    document.querySelector(".center img").src = "./images/" + ran + ".jpg";
    flag = false
}
let ran1 = Math.floor((Math.random() * 13) + 1);

let val; 


document.querySelector(".rightBottom").addEventListener("click", function() {
    val = document.querySelector(".up").classList.value; 
    valFun();
});


document.querySelector(".leftBottom").addEventListener("click", function() {
    val = document.querySelector(".down").classList.value; 
    valFun(); 
});

function valFun() {
    
    ran1 = Math.floor((Math.random() * 13) + 1);
   
    document.querySelector(".center img").src = "./images/" + ran1 + ".jpg";

    
    let totalAmount = Number(document.querySelector(".leftTop .TotalAmmount").textContent);

    if (val === "up" && ran1 > ran) {
       
        document.querySelector(".TotalWon").textContent = Number(document.querySelector(".TotalWon").textContent) + (0.10 * totalAmount);
        document.querySelector(".leftTop .TotalAmmount").textContent = totalAmount - (0.10 * totalAmount);
    } else if (val === "down" && ran1 < ran) {
        
        document.querySelector(".TotalWon").textContent = Number(document.querySelector(".TotalWon").textContent) + (0.10 * totalAmount);
        document.querySelector(".leftTop .TotalAmmount").textContent = totalAmount - (0.10 * totalAmount);
    } else {
        
        document.querySelector(".leftTop .TotalAmmount").textContent = totalAmount - (0.10 * totalAmount);
    }


    ran = ran1;
}
