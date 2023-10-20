const express = require("express");
const axios = require("axios");
const fs = require("fs");
const moment = require("moment");

const app = express();
app.use(express.json());

const allStudents = require("./data/stuObj").data;
const repos = require("./data/2023_10-19").data;
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
app.get("/database", (req, res) => {
  // console.log("GET /");
  res.json(entireDatabase);
});

app.get("/getAllRepos", (req, res) => {
  // console.log(req);
  const newToken = req.query.token;
  getAllRepoForAllStudents(allStudents, newToken);
  res.json(allStudents);
});

app.get("/createDataFile", (req, res) => {
  fs.writeFile(
    `./data/${getTodayDate()}.js`,
    `
  // const repos=${allStudents}
  const repos=${JSON.stringify(allStudents)}
  module.exports = { data: repos }; 
  `,
    function (err) {
      if (err) throw err;
      entireDatabase = allStudents;
      console.log("Saved!");
      res.json(entireDatabase);
    }
  );
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

  let todayDate = moment().format("YYYY-MM-DD hh|mm|ss A");

  console.log(todayDate);
  return todayDate;
};

// getTodayDate()

/* ============================ */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});
