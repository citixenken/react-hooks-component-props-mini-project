import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  let displayedEmoji = "";
  let coffeeInterval = 5;
  let bentoInterval = 10;

  if (minutes < 30) {
    for (let min = 0; min < minutes; min += coffeeInterval) {
      displayedEmoji += "☕️";
    }
  } else {
    for (let min = 0; min < minutes; min += bentoInterval) {
      displayedEmoji += "🍱";
    }
  }
  return (
    <article>
      <h3>{title} </h3>

      <small>
        {" "}
        {date} • {displayedEmoji} {minutes} minutes to read{" "}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
