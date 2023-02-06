const listOfIcons = ["automation.png", "tasks.png", "user.png"];

const tabIcon = $("#tab-icon");
const title = $("title");
const body = $("#body");
const icons = $("#icons");

listOfIcons.forEach((elem, i) => {
  const newIcon = $(`<button>${elem}</button>`);

  newIcon.css({
    "background-color": "red",
    margin: "5px",
  });

  newIcon.on("click", function () {
    title.text(elem);
    tabIcon.attr("href", `./${elem}`);
  });

  icons.append(newIcon);
});

body.append(listOfIcons);
