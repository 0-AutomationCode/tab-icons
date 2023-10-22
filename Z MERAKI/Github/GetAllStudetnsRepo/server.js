const express = require("express");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");

const app = express();
app.use(express.json());

const allStudents = require("./data/23-10-19 Students Object").data;
const repos = require("./data/logic/dataTest").data;
/* ============================ */
const GITHUB_API = "https://api.github.com";
const OLD_TOKEN = "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";

// ! =========== GET ALL REPOS =================
const getAllRepoForOneStudent = async (student, token = OLD_TOKEN) => {
  var options = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const endpoint = `${GITHUB_API}/orgs/${student.githubORG}/repos`;

  // console.log("URL:", endpoint);
  axios
    .get(endpoint, options)
    .then((response) => {
      const resultObj = {};

      response.data.forEach((e, i) => {
        const { name, private } = e;
        resultObj[name] = private ? "YES" : "NO";
      });

      student.repos = resultObj;

      // console.log("result TRUE: ", resultObj);
      return "DONEEEEEE";
    })
    .catch((err) => {
      // console.log("ERR: ", err);
      console.log("ERR: ", student.displayName);
    });
};

const getAllRepoForAllStudents = (obj) => {
  // console.log("HEREEEEEEEEEEEEEEEEEEEE", obj);
  for (const student in obj) {
    // console.log(student);
    getAllRepoForOneStudent(obj[student]);
  }
};
// getAllRepoForAllStudents(allStudents);
// getAllRepoForOneStudent(allStudents.A01_Shishani);
// getAllRepoForOneStudent(allStudents.A02_Khraim);
// console.log(allStudents);

// TODO ============================

app.get("/getAllRepos", (req, res) => {
  // console.log(req);
  const newToken = req.query.token;
  getAllRepoForAllStudents(allStudents, newToken);
  res.json(allStudents);
});

// !- important ============================

let lastFileCreated;

app.get("/createDataFile", (req, res) => {
  lastFileCreated = getTodayDate();
  fs.writeFile(
    `./data/${lastFileCreated}.js`,
    `
  // const repos=${allStudents}
  const repos=${JSON.stringify(allStudents)}
  module.exports = { data: repos }; 
  `,
    function (err) {
      if (err) throw err;
      entireDatabase = allStudents;
      console.log("Saved!");
      res.json({
        message: `CREATED DATA FILE WITH THE TITLE: ${lastFileCreated}`,
        data: allStudents,
      });
    }
  );
});

app.get("/showDatabase", (req, res) => {
  lastFileCreated = getTodayDate();
  const entireData = require(`./data/${lastFileCreated}.js`).data;

  console.log("GET /");
  res.json(entireData);
});

let entireDatabase;

const getTodayDate = () => {
  /*
  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  // This arrangement can be altered based on how we want the date's format to appear.
  let todayDate = `${year}-${month}-${day}`;
  console.log(todayDate); // "2023-10-19"
  */

  // let todayDate = moment().format("YYYY-MM-DD hh-mm-ss A");
  let todayDate = moment().format("YYYY-MM-DD");

  console.log(todayDate);
  return todayDate;
};

// getTodayDate()

/* ============================ */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});
