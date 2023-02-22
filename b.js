const body = $("#body");
const toc = $("#toc");

/*
console.log($('body'))
console.log(console.log($('body')))
*/

// ============

const divAdd = $("#divAdd");
const inputAdd = $("#inputAdd");
const btnAdd = $("#btnAdd");
let counter = 1;
inputAdd.val(`<p> ADD NEW PAR: ${counter}</p>`);

btnAdd.on("click", () => {
  divAdd.append($(`${inputAdd.val()}`));
  counter += 1;
  inputAdd.val(`<p> ADD NEW PAR: ${counter}</p>`);
});

const googleCalender = `<iframe src="https://calendar.google.com/calendar/embed?src=m.jouza3%40gmail.com&ctz=Asia%2FAmman" style="border: 0"
width="800" height="600" frameborder="0" scrolling="no"></iframe>`;

const googleExample =
  "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FAmman&showTitle=1&showDate=1&showNav=1&mode=AGENDA&title=Jouza%20Calender&showPrint=1&src=bS5qb3V6YTNAZ21haWwuY29t&src=ZW4uam8jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23D50000&color=%23A79B8E";

// ==================
// as code

const googleURI = "https://calendar.google.com/calendar/embed?";

const googleSRC =
  "&src=bS5qb3V6YTNAZ21haWwuY29t&src=ZW4uam8jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23A79B8E";

const googleCalenderAttObj = {
  mode: "AGENDA",
  height: "600",
  width: "200",
  showDate: 1,
  showNav: 1,
  showTabs: 0,
  showCalendars: 1,
  showPrint: 0,
  showTitle: 0,
  title: "Jouza",
  wkst: 1,
  bgcolor: "%23ffffff",
  ctz: "Asia%2FAmman",
};

const iframeElem = $("#iframe");

const gArr = Object.keys(googleCalenderAttObj);
const allAttr = gArr.reduce((acc, key, i) => {
  // console.log(acc);
  return acc + `&${key}=${googleCalenderAttObj[key]}`;
}, "");

const changeSrc = (width) => {
  iframeElem.attr("src", googleURI + allAttr + googleSRC);
  console.log(iframeElem.css("width"));
  iframeElem.css("width", typeof width == "number" ? width : inputAdd.val());
};
changeSrc(310);

const btnChange = $("#btnChange");
btnChange.on("click", changeSrc);
