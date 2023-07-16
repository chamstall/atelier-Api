// Beginning
let url = "https://api.adviceslip.com/advice";

fetch(url)
.then(response => response.json())
.then(data =>{
    let card = document.querySelector(".card");
    card.innerHTML = `Tip of the day : ${data.slip.advice}`
})
// End

    // let url = "https://jsonplaceholder.typicode.com/photos";
    
    // fetch(url)
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data);
    //     // premiere card
    //     let img1 = document.querySelector("#img1");
    //     img1.src = data[0].url
    //     let p1 = document.querySelector('#p1');
    //     p1.innerHTML = data[0].title

    //     // deuxieme card
    //     let img2 = document.querySelector("#img2");
    //     img2.src = data[1].url
    //     let p2 = document.querySelector('#p2');
    //     p2.innerHTML = data[1].title

    //     // troiseme card
    //     let img3 = document.querySelector("#img3");
    //     img3.src = data[2].url
    //     let p3 = document.querySelector('#p3');
    //     p3.innerHTML = data[2].title

    //     // quatrieme card
    //     let img4 = document.querySelector("#img4");
    //     img4.src = data[3].url
    //     let p4 = document.querySelector('#p4');
    //     p4.innerHTML = data[3].title

    //     //cinquieme card
    //     let img5 = document.querySelector("#img5");
    //     img5.src = data[4].url
    //     let p5 = document.querySelector('#p5');
    //     p5.innerHTML = data[4].title

    //     // sixieme card
    //     let img6 = document.querySelector("#img6");
    //     img6.src = data[5].url
    //     let p6 = document.querySelector('#p6');
    //     p6.innerHTML = data[5].title

    //     // septieme card
    //     let img7 = document.querySelector("#img7");
    //     img7.src = data[6].url
    //     let p7 = document.querySelector('#p7');
    //     p7.innerHTML = data[6].title

    //     // huitieme card
    //     let img8 = document.querySelector("#img8");
    //     img8.src = data[7].url
    //     let p8 = document.querySelector('#p8');
    //     p8.innerHTML = data[7].title

    //     // neuvieme card
    //     let img9 = document.querySelector("#img9");
    //     img9.src = data[8].url
    //     let p9 = document.querySelector('#p9');
    //     p9.innerHTML = data[8].title

    //     // dixieme card
    //     let img10 = document.querySelector("#img10");
    //     img10.src = data[9].url
    //     let p10 = document.querySelector('#p10');
    //     p10.innerHTML = data[9].title
    // })
    // .catch(error=>{
    //     console.log("une erreur ses produites lors de la recuperation des données", error);
    // })



