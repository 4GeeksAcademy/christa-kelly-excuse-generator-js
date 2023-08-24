/* eslint-disable */
import "bootstrap";
import "./index.html";

window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
};

let generateExcuse = () => {
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

  return (
    who[whoNum] +
    " " +
    action[actionNum] +
    " " +
    what[whatNum] +
    " " +
    when[whenNum]
  );
};
