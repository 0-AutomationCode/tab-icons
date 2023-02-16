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
  counter+=1
  inputAdd.val(`<p> ADD NEW PAR: ${counter}</p>`);
});


const googleCalender=`<iframe src="https://calendar.google.com/calendar/embed?src=m.jouza3%40gmail.com&ctz=Asia%2FAmman" style="border: 0"
width="800" height="600" frameborder="0" scrolling="no"></iframe>`