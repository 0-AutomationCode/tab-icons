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
