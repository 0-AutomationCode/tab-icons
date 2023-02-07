const tabIcon = $("#tab-icon");
const title = $("title");
const body = $("#body");
const iconsDiv = $("#icons");

const listOfIcons = [
  "call.png",
  "companies.png",
  "dollar.png",
  "home.png",
  "letter-m (4).png",
  "letter_a_blue.png",
  "letter_m.png",
  "letter_m_blue.png",
  "m (1).png",
  "m (2).png",
  "m.png",
  "letter-m (5).png",
  "number_1_blue.png",
  "number_2_blue.png",
  "number_5.png",
  "number_6.png",
  "number_7.png",
  "number_8.png",
  "staff.png",
  "suitcase_blue.png",
  "table.png",
  "tasks.png",

  // BLUE:  #00FFFF
  // GREEN: #00FF00

  // =========================

  ".png",
  ".png",
  ".png",
  ".png",
  ".png",
  // =========================

  ".png",
  ".png",
  ".png",
  ".png",
  ".png",
  ".png",

  /*
  https://raw.githubusercontent.com/0-AutomationCode/tab-icons/main/.png
  */
];

iconsDiv.css({
  display: "flex",
  "flex-wrap": "wrap",
});

listOfIcons.forEach((elem, i) => {
  const fileName = elem;
  const newIconDiv = $(`<button></button>`);
  const newIconImg = $(`<img/>`);
  const newIconTitle = $(
    `<span>${fileName.slice(0, fileName.length - 4)}</span>`
  );
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

  newIconImg.attr("src", `./${fileName}`);

  newIconDiv.on("click", function () {
    title.text(fileName.slice(0, fileName.length - 4));
    tabIcon.attr("href", `./${fileName}`);
  });

  iconsDiv.append(newIconDiv);
});

body.append(listOfIcons);
