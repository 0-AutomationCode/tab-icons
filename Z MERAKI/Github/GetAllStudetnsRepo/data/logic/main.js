// console.log("DATA: ", data);

const GITHUB_URL = "https://www.github.com";

const cohortNumber = "C9";
const stage1HW = [
  "W01D01_Intro_To_JS",
  "W01D02_Functions",
  "W01D03_Conditionals",
  "W02D01_Scopes",
  "W02D02_Arrays",
  "W02D03_Objects",
  "W03D01_Iteration_P1",
  "W03D02_Iteration_P2",
  "W03D03_Recursion",
  "W04D01_CB_HOF",
  "W04D02_OOP",
  "W04D03_HTML",
  "W05D01_CSS_Introduction",
  "W05D02_CSS_Layouts",
  "W05D03_DOM",
  "W06D01_jQuery",
];

const columnTitles = ["Display_Name", "LEFT \n REPOS", ...stage1HW];

const entireTable = $("#table-container");

// =========== initTable

const initTable = () => {
  // Array of column titles

  // Create the table structure
  var table = $("<table>");
  var thead = $("<thead>");
  var tbody = $("<tbody>");
  var tr = $("<tr>");

  // Create table header with column titles
  $.each(columnTitles, function (index, colTitle) {
    if (colTitle == "Display_Name") {
      tr.append($("<th>").text(colTitle));
      tr.append($("<th>").text("ORG"));
    } else {
      tr.append($("<th>").text(colTitle));
      tr.append($("<th>").text("PRIVATE \n STATUS"));
    }
  });

  thead.append(tr);
  table.append(thead);

  // Create a sample row (you can add more rows similarly)
  // tr = $("<tr>");
  // $.each(columnTitles, function (index, value) {
  //   tr.append($("<td>").text("Value " + (index + 1)));
  // });

  tbody.append(tr);

  table.append(tbody);

  // Append the table to the container div

  entireTable.append(table);
};

initTable();

// !=========== fill data

/* 
 A01_Shishani: {
    displayName: "A01_Shishani",
    githubORG: "C9-Abdalrhmanalshishani",
    githubUsername: "Abdalrhmanalshishani",
    repos: {
      W02D02_Arrays: "YES",
      W02D03_Objects: "YES",
      W01D01_Intro_To_JS: "YES",
    },
  },
*/
fillTableWithDataForOneStudents = (studentObj) => {
  // console.log(studentObj);
  const { displayName, githubORG, githubUsername, repos } = studentObj;
  const tBody = $(entireTable.children().children()[1]);

  const newtr = $("<tr>");

  // console.log(newtr[0]);
  let newtrLeft = $("<tr>");
  let newtrStatus = $("<tr>");

  const leftRepos = {};
  // TODO get LEFT Repo
  for (const repoTitle in repos) {
    if (!columnTitles.includes(repoTitle)) {
      leftRepos[repoTitle] = repos[repoTitle];
    }
  }

  // Check the repo status
  $.each(columnTitles, function (index, colTitle) {
    // console.log(colTitle);
    if (colTitle == "Display_Name") {
      // console.log("DDDDDD", displayName);

      newtr.append(`<td >${displayName}</td>`);
      newtr.append(`<td>${githubORG}</td>`);

      // console.log(newtr[0]);
    } else if (colTitle == "LEFT \n REPOS") {
      let finalResult = [];
      for (const repoTitle in leftRepos) {
        // finalResult.push(`<span>${repoTitle}-${leftRepos[repoTitle]}</span>`)

        finalResult.push(
          `<a href="${GITHUB_URL}/${githubORG}/${repoTitle}/settings" target="_blank">${repoTitle}</a>`
        );
      }
      newtr.append(`<td class="multipleLine">${finalResult.join("")}</td>`);

      // console.log("HERE");
      // console.log(leftRepos);

      // const leftReposTitle = Object.keys(leftRepos).join("\n");
      // const leftReposStatus = Object.values(leftRepos).join("\n");

      // const leftReposTitle = Object.keys(leftRepos).map((e, i) => {
      //   return `<span>${e}</span>`;
      // });
      // const leftReposStatus = Object.values(leftRepos).join("\n");

      // newtr.append(`<td class="multipleLine">${leftReposTitle.join("")}</td>`);
      // newtr.append(`<td class="multipleLine">${leftReposStatus}</td>`);
    } else {
      let isRepoExist = "404";
      let isRepoPrivate = "N/A";

      if (repos[colTitle]) {
        isRepoExist = "EXIST";
        isRepoPrivate = repos[colTitle] == "YES" ? "YES" : "NO";
        delete leftRepos[colTitle];
      }
      newtr.append(
        `<td class='${
          isRepoExist == "EXIST" ? "exist" : "notExist"
        }'>${isRepoExist}</td>`
      );
      newtr.append(
        `<td class='${
          (isRepoPrivate == "YES" && "private") ||
          (isRepoPrivate == "NO" && "public") ||
          (isRepoPrivate == "N/A" && "notApplicable")
        }'>${isRepoPrivate}</td>`
      );
    }
  });

  newtrLeft;
  newtrStatus;
  console.log(leftRepos);

  tBody.append(newtr);
};

// fillTableWithDataForOneStudents(data.A06_Aya);

const fillTableWithData = (studentsObj) => {
  for (const stuDisplayName in studentsObj) {
    fillTableWithDataForOneStudents(studentsObj[stuDisplayName]);
  }
};

// `repos` for real data
// `data` for tested data
fillTableWithData(repos);

const todayDate = "2023-10-22";
$(`#title`).text(`cohortNumber-${$("#title").text()} => ${todayDate}`);
$(`title`).text(`${todayDate}`);

// const CSSapplied
