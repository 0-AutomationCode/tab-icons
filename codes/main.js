const listOfIcons = ["automation.png", "tasks.png", "user.png"];

const tabIcon = $("#tab-icon");
const title = $("title");
const body = $("#body");
const iconsDiv = $("#icons");

iconsDiv.css({
  display: "flex",
});

listOfIcons.forEach((elem, i) => {
  const newIconDiv = $(`<button></button>`);
  const newIconImg = $(`<img/>`);
  const newIconTitle = $(`<span>${elem.slice(0, elem.length - 4)}</span>`);
  newIconDiv.append(newIconImg);
  newIconDiv.append(newIconTitle);

  newIconDiv.css({
    // "background-color": "red",
    margin: "10px",
    // border: "2px solid red",
    display: "flex",
    "font-size": "25px",
    "align-items": "center",
    "font-weight": "bold",
  });

  newIconImg.css({
    width: "35px",
    "margin-right": "5px",
  });

  newIconImg.attr("src", `./${elem}`);

  newIconDiv.on("click", function () {
    title.text(elem.slice(0, elem.length - 4));
    tabIcon.attr("href", `./${elem}`);
  });

  iconsDiv.append(newIconDiv);
});

body.append(listOfIcons);
