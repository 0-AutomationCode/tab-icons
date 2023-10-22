// console.log("DATA: ", data);

const cohortNumber = "C9";
const GITHUB_URL = "https://www.github.com";

const DISPLAY_NAME_TITLE = "Display_Name";
const LEFT_REPOS_TITLE = "LEFT \n REPOS";
const PRIVATE_STATUS_TITLE = "PRIVATE \n STATUS";

// ============================

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

const columnTitles = [DISPLAY_NAME_TITLE, LEFT_REPOS_TITLE, ...stage1HW];

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
    if (colTitle == DISPLAY_NAME_TITLE) {
      tr.append($(`<th class="main">${colTitle}</th>`));
      tr.append($(`<th class="privateStatus">${"C#-ORG"}</th>`));
    } else if (colTitle == LEFT_REPOS_TITLE) {
      tr.append(
        $(`<th class="main">${colTitle} - ${PRIVATE_STATUS_TITLE}</th>`)
      );
      tr.append($(`<th class="privateStatus">Total ${colTitle}</th>`));
    } else {
      tr.append($(`<th class="main">${colTitle}</th>`));
      tr.append($(`<th class="privateStatus">${PRIVATE_STATUS_TITLE}</th>`));
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
    if (colTitle == DISPLAY_NAME_TITLE) {
      // console.log("DDDDDD", displayName);

      newtr.append(`<td >${displayName}</td>`);

      newtr.append(
        `<td>${`<a href="${GITHUB_URL}/${githubORG}" target="_blank">${githubORG}</a>`}</td>`
      );

      // console.log(newtr[0]);
    } else if (colTitle == LEFT_REPOS_TITLE) {
      let finalResult = [];
      // let finalResultStatus = [];

      for (const repoTitle in leftRepos) {
        // finalResult.push(`<span>${repoTitle}-${leftRepos[repoTitle]}</span>`)

        finalResult.push(
          `<a href="${GITHUB_URL}/${githubORG}/${repoTitle}/settings" target="_blank">${repoTitle} - ${leftRepos[repoTitle]}</a>`
        );
        // finalResultStatus.push(`<span>${leftRepos[repoTitle]}</span>`)
      }

      const leftRepoResult = finalResult.join("");
      // const leftRepoResultStatus = finalResultStatus.join("");

      newtr.append(
        `<td class="${leftRepoResult ? "multipleLine" : "notApplicable"}">${
          leftRepoResult || "N/A"
        }</td>`
      );
      newtr.append(
        `<td>${finalResult.length}
        </td>`
      );
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

const todayDate = "2023/10/23 1:08 AM";
$(`#title`).text(
  `Last Update: ${todayDate}`
);
$(`title`).text(`${todayDate}`);

// const CSSapplied
