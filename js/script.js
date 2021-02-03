let sale = {
    2020: 40,
    4545: 10,
    1234: 50
}

let btn = document.querySelector("#btn");

btn.onclick = function(){
    let code = document.querySelector("#code").value;
    // console.log(sale[code]);
    if (sale[code]) {
        alert("скидка")
    }else{
        alert("нет скидки")
    }
}