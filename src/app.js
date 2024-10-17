/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "hola"];
  let adj = ["great", "big", "mundo"];
  let noun = ["jogger", "racoon", "soyJesus"];
  let extensions = [".com", ".net", ".es"];

  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++)
        for (let d = 0; d < noun.length; d++) {
          let result = pronoun[a] + adj[b] + noun[c] + extensions[d];
          console.log(result);
        }
    }
  }
};
