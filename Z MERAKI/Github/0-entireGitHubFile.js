const doneFunc = () => {
  console.log("DONE");
};

// !- is the student a member of MERAKI Organization

const GitHubMainAPI = "https://api.github.com";

/**
 * isAMember check if a student is member of MERAKI ORG
 * @param {string} studentGitHubUsername - GitHub Username.
 * @param {string} token - the token for C# MERAKI ORG.
 * @param {string} cohortORG - C# MERAKI ORG for example MERAKI-Academy-Cohort-9.
 * @param {string} REQUEST_TYPE - by default is get.
 * @return {boolean} true or false depends on if exist as a member or not.
 * @customfunction
 */

const isAMember = (
  studentGitHubUsername,
  token,
  cohortORG,
  REQUEST_TYPE = "get"
) => {
  // console.log("TOKEN:", token);

  var options = {
    method: REQUEST_TYPE,
    headers: { Authorization: `Bearer ${token}` },
    per_page: 100,
    // 'payload' : formData,
    muteHttpExceptions: true,
  };

  const endpoint = `${GitHubMainAPI}/orgs/${cohortORG}/members/${studentGitHubUsername}`;
  // console.log("URL:", endpoint);

  const res = UrlFetchApp.fetch(endpoint, options);
  // console.log("RES:", res);
  // console.log("STATUS:", res.getResponseCode());
  // Logger.log(res.getContentText());

  let result = res.getResponseCode() == 204 ? true : false;
  // console.log("RESULT:", result);

  return result;
};

// TODO ================== TEST Section

const token_c9 =
  "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";

const c9ORG = "MERAKI-Academy-Cohort-9";

let testStudents = "MERAKI-Academy";
testStudents = "Alaaalnseirat";
testStudents = "AyaAlomarii";
testStudents = "Huda";
testStudents = "SondosAlrifae";
testStudents = "SondosAlrifae";
testStudents = "MohammadJouza";

// isAMember(testStudents, token_c9, c9ORG);

// ! - start section 2

/**
 * getAllRepos get all repo from student ORG
 * @param {string} studentGitHubOrganization - Student GitHub Organization.
 * @param {string} studentToken - the studentToken for ORG C#-student.
 * @param {string} REQUEST_TYPE - by default is get.
 * @return {string as object} represent the latest 30 repo.
 */

const getAllRepos = (
  studentGitHubOrganization,
  studentToken,
  REQUEST_TYPE = "get"
) => {
  // console.log("TOKEN:", token);

  var options = {
    method: REQUEST_TYPE,
    headers: { Authorization: `Bearer ${studentToken}` },
    // 'payload' : formData,
    muteHttpExceptions: true,
  };

  const endpoint = `${GitHubMainAPI}/orgs/${studentGitHubOrganization}/repos`;
  // const endpoint = `${GitHubMainAPI}/orgs/${studentGitHubOrganization}/repos?per_page=100`;

  // console.log("URL:", endpoint);

  const res = UrlFetchApp.fetch(endpoint, options);
  // console.log("RES:", res);
  console.log("STATUS:", res.getResponseCode());
  // console.log("RES:", res.getContentText());
  // Logger.log(res.getContentText());
  const resultObj = { a: 1 };

  if (res.getResponseCode() == 200) {
    const data2 = JSON.parse(res.getContentText());
    resultObj.b = 2;
    // console.log(data2);

    data2.forEach((e, i) => {
      const { name, private } = e;
      resultObj[e.name] = private ? "YES" : "NO";
      // console.log(e.name);
    });

    console.log("result TRUE: ", resultObj);
    return JSON.stringify(resultObj);
  }
  // return resultObj;
  console.log("result FALSE: ", resultObj);
  return "Not Working ???";
};

// TODO ================== TEST Section

const student_token = "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";

let c9StuORG = "C9-AyaAlomarii";

c9StuORG = "C9-Alaaalnseirat";
c9StuORG = "C9-AyaAlomarii";

// getAllRepos(c9StuORG, student_token);
