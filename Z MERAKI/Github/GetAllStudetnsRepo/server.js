const express = require("express");
const axios = require("axios");
const app = express();

/* ============================ */

app.use(express.json());

//  TODO ============================

const createStudentsObj = (names, usernames) => {
  const result = {};

  names.forEach((student, i) => {
    result[student] = {
      displayName: student,
      githubORG: `C9-` + usernames[i],
      githubUsername: usernames[i],
    };
  });

  return result;
};

const createStudentsArray = (names, usernames) => {
  const result = [];

  names.forEach((student, i) => {
    result.push({
      displayName: student,
      githubORG: `C9-` + usernames[i],
      githubUsername: usernames[i],
    });
  });

  return result;
};

const studentsDisplayNames = [
  "A01_Shishani",
  "A02_Khraim",
  "A03_Adel",
  "A04_Alaa",
  "A05_Anas",
  "A06_Aya",
  "A07_Ayham",
  "A08_Bushra",
  "A09_Deyaa",
  "A10_Hadeel",
  "A11_Hamza",
  "A12_Hani",
  "A13_Ibraheem",
  "A14_Malek",
  "A15_Shboul",
  "A16_Odat",
  "A17_Saqqa",
  "A18_Sondos",
  "A19_YousefA",
];

const githubUsernames = [
  "Abdalrhmanalshishani",
  "abdkhraim",
  "Adelaljibeiti",
  "Alaaalnseirat",
  "anasalomar",
  "AyaAlomarii",
  "ayhamotoom",
  "Bushraamarat",
  "deyaaaldeen",
  "hadeelHazimeh",
  "odehhamza",
  "haniisalah",
  "ibraheemalwan",
  "Malekqandeel",
  "Mohammadshboul",
  "MohammedOdat",
  "RafatBSaqqa",
  "SondosAlrifae",
  "usfaql",
];

const allStudents = createStudentsArray(studentsDisplayNames, githubUsernames);

// console.log(allStudents);
// ! ============================

const GitHubMainAPI = "https://api.github.com";

const getAllRepos = (studentObj, studentGitHubOrganization) => {
  var options = {
    headers: {
      Authorization: `Bearer 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`,
    },
  };

  const endpoint = `${GitHubMainAPI}/orgs/${studentGitHubOrganization}/repos`;

  // console.log("URL:", endpoint);
  axios
    .get(endpoint, options)
    .then((response) => {
      // console.log("RESPONSE: ", response);
      // console.log("DATA: ", response.data);

      const resultObj = {};

      response.data.forEach((e, i) => {
        const { name, private } = e;
        resultObj[name] = private ? "YES" : "NO";
        // console.log(e.name);
      });
      studentObj.repos = resultObj;

      console.log("result TRUE: ", resultObj);
      return "DONEEEEEE";
    })
    .catch((err) => {
      console.log("ERR: ", err);
    });
};

const getAllRepoForOneStudent = async (student) => {
  const { displayName, githubORG, githubUsername } = student;

  student.test = await getAllRepos(student, githubORG);

  console.log("HEREEEEEEE");

  console.log("SSSSSSS", student);
};

getAllRepoForOneStudent(allStudents[0]);
getAllRepoForOneStudent(allStudents[1]);

console.log(allStudents[0]);

/* ============================ */

app.get("/", (req, res) => {
  console.log("GET /");
  res.json("SERVER IS WORKING");
});

app.get("/2", (req, res) => {
  const stu = createStudents(studentsDisplayNames, githubUsernames);
  console.log(stu);
  res.json(stu);
});

app.get("/3", (req, res) => {
  res.json(allStudents);
});

/* ============================ */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});
