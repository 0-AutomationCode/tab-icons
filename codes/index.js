const fs = require("fs");
const path = require("path");
const directory = "./";
// =========================
// const arrRemovedFiles = [".gitignore"];

const arrFiles = [];
// =========================
const getAllFilesName = () => {
  fs.readdir(directory, (err, files) => {
    files.forEach((file) => {
      let fileDetails = fs.lstatSync(path.resolve(directory, file));
      if (fileDetails.isDirectory()) {
        // console.log("Directory: " + file);
      } else {
        if (file.split(".")[1] === "png") {
          arrFiles.push(file);
        }
      }
    });
    console.log(arrFiles);
  });
};
// =========================
getAllFilesName();
console.log(arrFiles);

const listOfIcons = ["automation.png", "tasks.png", "user.png"];



// =========================

/* 






fs.readdir(directory, (err, files) => {
    const arrFiles = [];
    files.forEach((file) => {
      // get the details of the file
      let fileDetails = fs.lstatSync(path.resolve(directory, file));
      // check if the file is directory
      if (fileDetails.isDirectory()) {
        console.log("Directory: " + file);
      } else {
        console.log("File: " + file);
      }
    });
  });
*/
