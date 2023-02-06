const tabIcon = $("#tab-icon");
const title = $("title");
const body = $("#body");
const iconsDiv = $("#icons");

const listOfIcons = [
  { fileName: "automation.png", url: "" },
  { fileName: "checklist.png", url: "" },
  { fileName: "task.png", url: "" },
  { fileName: "user-green.png", url: "" },
  // ====================
  {
    fileName: "table.png",
    url: "https://www.flaticon.com/free-icon/table_5865052?term=data+table&page=1&position=61&origin=search&related_id=5865052",
  },
  {
    fileName: "table_green.png",
    url: "https://www.flaticon.com/free-icon/table_5865052?term=data+table&page=1&position=61&origin=search&related_id=5865052",
  },

  {
    fileName: "tasks.png",
    url: "https://www.flaticon.com/free-icon/tasks_906334?term=tasks&page=1&position=10&origin=search&related_id=906334",
  },

  {
    fileName: "tasks2.png",
    url: "https://www.flaticon.com/free-icon/tasks_906334?term=tasks&page=1&position=10&origin=search&related_id=906334",
  },
  {
    fileName: "home_green.png",
    url: "https://www.flaticon.com/free-icon/home_25694?term=home&page=1&position=1&origin=search&related_id=25694",
  },

  {
    fileName: "telephone_call.png",
    url: "https://www.flaticon.com/free-icon/telephone-call_3059606?term=calls&page=1&position=16&origin=search&related_id=3059606",
  },

  { fileName: "office_building.png", url: "https://www.flaticon.com/free-icon/office-building_3688596?term=companies&page=1&position=19&origin=search&related_id=3688596" },

  { fileName: "manager.png", url: "https://www.flaticon.com/free-icon/man_2552801?term=manager&page=1&position=52&origin=search&related_id=2552801" },

  { fileName: "money_bag.png", url: "https://www.flaticon.com/free-icon/money-bag_2474496?term=money&page=1&position=70&origin=search&related_id=2474496" },

  { fileName: "information_system.png", url: "https://www.flaticon.com/free-icon/information-system_9552527?term=procedure&page=1&position=8&origin=search&related_id=9552527" },

  { fileName: "multiple_users_silhouette_green.png", url: "https://www.flaticon.com/free-icon/multiple-users-silhouette_33308?term=staff&page=1&position=4&origin=search&related_id=33308" },

  { fileName: "number_1.png", url: "https://www.flaticon.com/free-icon/number-1_3097244" },

  { fileName: "number_2.png", url: "https://www.flaticon.com/free-icon/2_3601634?term=2&page=1&position=1&origin=search&related_id=3601634" },


  { fileName: "suitcase.png", url: "https://www.flaticon.com/free-icon/suitcase_3281289?term=job&page=1&position=10&origin=search&related_id=3281289" },

  { fileName: "number_3.png", url: "" },
  { fileName: "number_4.png", url: "" },
  { fileName: "number_5.png", url: "https://www.flaticon.com/free-icon/number-5_3841730" },
  { fileName: "number_6.png", url: "https://www.flaticon.com/free-icon/six_3841731" },
  { fileName: "number_7.png", url: "https://www.flaticon.com/free-icon/seven_3841747" },
  { fileName: "number_8.png", url: "https://www.flaticon.com/free-icon/number-8_3841748" },
  { fileName: "number_9.png", url: "https://www.flaticon.com/free-icon/number-9_3841749" },
  { fileName: "letter_m.png", url: "https://www.flaticon.com/free-icon/letter-m_3097067?term=m&page=1&position=5&origin=search&related_id=3097067" },

  // =========================
  { fileName: ".png", url: "" },
  /*
  https://raw.githubusercontent.com/0-AutomationCode/tab-icons/main/.png
  */
];

iconsDiv.css({
  display: "flex",
  "flex-wrap": "wrap",
});

listOfIcons.forEach((elem, i) => {
  const newIconDiv = $(`<button></button>`);
  const newIconImg = $(`<img/>`);
  const newIconTitle = $(
    `<span>${elem.fileName.slice(0, elem.fileName.length - 4)}</span>`
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

  newIconImg.attr("src", `./${elem.fileName}`);

  newIconDiv.on("click", function () {
    title.text(elem.fileName.slice(0, elem.length - 4));
    tabIcon.attr("href", `./${elem.fileName}`);
  });

  iconsDiv.append(newIconDiv);
});

body.append(listOfIcons);
