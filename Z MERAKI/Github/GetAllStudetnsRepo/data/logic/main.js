// console.log("DATA: ", data);

const cohortNumber = "C9";
const GITHUB_URL = "https://www.github.com";

const DISPLAY_NAME_TITLE = "Display_Name";
const LEFT_REPOS_TITLE = "LEFT \n REPOS";
const PRIVATE_STATUS_TITLE = "PRIVATE \n STATUS";

// ============================
const STAGE_WORD = "Stage-";
const stages = [0, 1, 2, 3];
let currentStage = stages[1];

const stagesDetails = {
  [STAGE_WORD + stages[1]]: {
    weeks: [1, 8],
    homework: [
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
    ],
  },
  [STAGE_WORD + stages[2]]: {
    weeks: [9, 16],
    homework: [],
  },
  [STAGE_WORD + stages[3]]: {
    weeks: [17, 22],
    homework: [],
  },
};

let weeksStartFrom = stagesDetails[STAGE_WORD + currentStage].weeks[0];
let weeksEndAt = stagesDetails[STAGE_WORD + currentStage].weeks[1];

let currentStageHomework = stagesDetails[STAGE_WORD + currentStage].homework;

// Render Stage
const stagesOptions = $("#selectStage");
const weekNumberOptions = $("#selectWeekNumber");

for (let i = 1; i <= 3; i++) {
  const newOption = $(
    `<option value="${STAGE_WORD}${i}">${STAGE_WORD}${i}</option>`
  );
  stagesOptions.append(newOption);
}

// homework per stage
const selectStage = (e) => {
  console.log("E", e.target.value);

  const selectedStage = e.target.value;

  currentStageHomework = stagesDetails[selectedStage].homework;

  // Change Weeks Number
  weeksStartFrom = stagesDetails[selectedStage].weeks[0];
  weeksEndAt = stagesDetails[selectedStage].weeks[1];

  renderWeeks(weeksStartFrom, weeksEndAt);

  console.log(currentStageHomework);

  // Array of column titles
  const selectedColumnTitlesFromStages = [
    DISPLAY_NAME_TITLE,
    LEFT_REPOS_TITLE,
    ...currentStageHomework,
  ];
  entireTable.text("");
  initTable(selectedColumnTitlesFromStages);
};

stagesOptions.change((e) => {
  selectStage(e);
});

const renderWeeks = (start, end) => {
  // Render the weeks
  weekNumberOptions.text("");

  for (let i = start; i <= end; i++) {
    const weekNumber = i < 10 ? "0" + i : i;
    const newOption = $(
      `<option value="W${weekNumber}">W${weekNumber}</option>`
    );

    weekNumberOptions.append(newOption);
  }
};
renderWeeks(weeksStartFrom, weeksEndAt);

// homework per week
const selectWeeks = (e) => {
  let currentWeekHomework = [];
  console.log("E", e.target.value);

  const selectedWeekNumberValue = e.target.value;
  currentStageHomework.forEach((element) => {
    if (element.includes(selectedWeekNumberValue)) {
      currentWeekHomework.push(element);
    }
  });

  console.log(currentWeekHomework);

  // Array of column titles
  const selectedColumnTitlesFromWeeks = [
    DISPLAY_NAME_TITLE,
    LEFT_REPOS_TITLE,
    ...currentWeekHomework,
  ];
  entireTable.text("");
  initTable(selectedColumnTitlesFromWeeks);
};

weekNumberOptions.change((e) => {
  selectWeeks(e);
});

// ! - Table Details
const entireTable = $("#table-container");

const defaultColumnTitles = [
  DISPLAY_NAME_TITLE,
  LEFT_REPOS_TITLE,
  ...currentStageHomework,
];

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
fillTableWithDataForOneStudents = (studentObj, columnTitlesArgument2) => {
  // console.log(studentObj);
  const { displayName, githubORG, githubUsername, repos } = studentObj;
  const tBody = $(entireTable.children().children()[1]);

  const newtr = $("<tr>");

  // console.log(newtr[0]);

  const leftRepos = {};
  // TODO get LEFT Repo
  for (const repoTitle in repos) {
    if (!columnTitlesArgument2.includes(repoTitle)) {
      leftRepos[repoTitle] = repos[repoTitle];
    }
  }

  // Check the repo status
  $.each(columnTitlesArgument2, function (index, colTitle) {
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
        `<td class="${finalResult.length == 0 && "notApplicable"}">${
          finalResult.length
        }
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

  tBody.append(newtr);
};

// fillTableWithDataForOneStudents(data.A06_Aya);

const fillTableWithData = (studentsObj, columnTitlesArgument) => {
  for (const stuDisplayName in studentsObj) {
    fillTableWithDataForOneStudents(
      studentsObj[stuDisplayName],
      columnTitlesArgument
    );
  }
};

// `repos` for real data
// `data` for tested data
// fillTableWithData(repos);

// =========== init Table

const initTable = (columnTitles = defaultColumnTitles) => {
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

  // fill the table with data
  fillTableWithData(repos, columnTitles);
};

initTable();


