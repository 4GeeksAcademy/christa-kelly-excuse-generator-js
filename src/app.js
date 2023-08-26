/* eslint-disable */
import "bootstrap";
import "./index.html";

window.onload = () => {
  btn.addEventListener("click", excuse);
};

function excuse() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "peed on", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const whoNum = Math.floor(Math.random() * who.length);
  const actionNum = Math.floor(Math.random() * action.length);
  const whatNum = Math.floor(Math.random() * what.length);
  const whenNum = Math.floor(Math.random() * when.length);

  const excuseArray =
    who[whoNum] +
    " " +
    action[actionNum] +
    " " +
    what[whatNum] +
    " " +
    when[whenNum];

  const whoimg = document.getElementById("whoimage");
  const whopics = [
    "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
    "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2014/March/140317/2D274905391507-today-tech-grandmabetty-140317.jpg",
    "https://vetmed.tamu.edu/news/wp-content/uploads/sites/9/2021/11/Turtle-brumation-pet-talk-1024x767.jpeg",
    "https://cdn.britannica.com/07/183407-050-C35648B5/Chicken.jpg"
  ];
  whoimg.src = whopics[whoNum];

  const whatimg = document.getElementById("whatimage");
  const whatpics = [
    "https://upload.wikimedia.org/wikipedia/commons/1/15/Homework_-_vector_maths.jpg",
    "https://everydayrecycler.com/wp-content/uploads/2021/11/keys.jpg",
    "https://assets.fastly.carvana.io/home-assets/nba/civic.png"
  ];
  whatimg.src = whatpics[whatNum];

  document.getElementById("excuse").innerHTML = excuseArray;
}
