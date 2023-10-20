// console.log("DATA: ", data);

const stage1HW = [
  "W01D01_Intro_To_JS",
  "W01D02_Functions",
  "W01D03_Conditionals",
  "W02D01_Scopes",
  "W02D02_Arrays",
  "W02D03_Objects",
  "W03D01_Iteration_Part_1",
  "W03D02_Iteration_Part_2",
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

  const leftRepos = repos;
// TODO get LEFT Repo
  for (const repoTitle in repos) {
  }

// Check the repo status

  $.each(columnTitles, function (index, colTitle) {
    // console.log(colTitle);
    if (colTitle == "Display_Name") {
      // console.log("DDDDDD", displayName);

      newtr.append($("<td>").text(displayName));
      newtr.append($("<td>").text(githubORG));

      // console.log(newtr[0]);
    } else {
      let isRepoExist = "404";
      let isRepoPrivate = "N/A";

      if (repos[colTitle]) {
        isRepoExist = "EXIST";
        isRepoPrivate = repos[colTitle] == "YES" ? "YES" : "NO";
      }

      newtr.append($("<td>").text(isRepoExist));
      newtr.append($("<td>").text(isRepoPrivate));
    }
  });

  tBody.append(newtr);
};

// fillTableWithDataForOneStudents(data.A06_Aya);

const fillTableWithData = (studentsObj) => {
  for (const stuDisplayName in studentsObj) {
    fillTableWithDataForOneStudents(studentsObj[stuDisplayName]);
  }
};
fillTableWithData(data);
