const blue = "blue";
const red = "red";
const green = "green";
const orange = "orange";

const colors = [
  red,
  green,
  blue,
  orange,
  red,
  green,
  blue,
  orange,
  red,
  green,
  blue,
  orange,
];

const patterns = [];

const createNewPattern = () => {
  const array = [...colors];
  patterns.push([]);
  for (let i = 1; i <= 4; i++) {
    const lastArray = patterns[patterns.length - 1];
    lastArray.push([]);
    for (let i = 1; i <= 3; i++) {
      const randomIndex = Math.floor(Math.random() * array.length);
      const randomItem = array[randomIndex];
      array.splice(randomIndex, 1);
      lastArray[lastArray.length - 1].push(randomItem);
    }
  }
  console.log(patterns[patterns.length - 1]);
};

createNewPattern();
createNewPattern();
createNewPattern();
createNewPattern();


const spreadPatterns = () => {
  const body = $(`body`);
  const containerDiv = $(`<div class="container"><div>`);

  patterns.forEach((pattern) => {
    const patternDiv = $(`<div class="pattern"><div>`);

    pattern.forEach((colPattern) => {
      const colPatternDiv = $(`<div class="col-pattern"><div>`);

      colPattern.forEach((oneColor) => {
        const oneColorDiv = $(`<div class=${oneColor}><div>`);

        colPatternDiv.append(oneColorDiv);
      });

      patternDiv.append(colPatternDiv);
    });

    containerDiv.append(patternDiv);
  });
  body.append(containerDiv);
  console.log("containerDiv:",containerDiv)
};

spreadPatterns()
console.log("patterns:",patterns);