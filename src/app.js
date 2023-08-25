/* eslint-disable */
import "bootstrap";
import "./index.html";

window.onload = () => {
  function excuse() {
    let who = ["The dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed on", "crushed", "broke"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when I finished",
      "during my lunch",
      "while I was praying"
    ];

    let whoNum = Math.floor(Math.random() * who.length);
    let actionNum = Math.floor(Math.random() * action.length);
    let whatNum = Math.floor(Math.random() * what.length);
    let whenNum = Math.floor(Math.random() * when.length);

    let excuseArray = [
      who[whoNum] +
        " " +
        action[actionNum] +
        " " +
        what[whatNum] +
        " " +
        when[whenNum]
    ];

    let img = document.getElementById("image");
    let pics = [
      "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
      "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2014/March/140317/2D274905391507-today-tech-grandmabetty-140317.jpg",
      "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2021/11/Turtle-brumation-pet-talk-1024x767.jpeg",
      "https://cdn.britannica.com/07/183407-050-C35648B5/Chicken.jpg"
    ];

    img.src = pics[whoNum];
    document.getElementById("excuse").innerHTML = excuseArray;
  }
  btn.addEventListener("click", excuse);
};
