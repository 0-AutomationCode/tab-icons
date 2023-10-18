const repos2 = {};
data2.forEach((e, i) => {
  const { name, private } = e;
  repos2[e.name] = private ? "YES" : "NO";
  console.log(e.name);
});

console.log("DATA2: ", repos2);

const GitHubMainAPI = "https://api.github.com";

/**
 * isAMember check if a student is member of MERAKI ORG
 * @param {string} [o] - A optional string param
 * @param {string} [d=DefaultValue] - A optional string param
 * @param {string} studentGitHubUsername - GitHub Username.
 * @param {string} token - the token for C# MERAKI ORG.
 * @param {string} cohortORG - C# MERAKI ORG for example MERAKI-Academy-Cohort-9.
 * @param {string} REQUEST_TYPE - by default is get.
 * @return {boolean} true or false depends on if exist as a member or not.
 * @customfunction
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

  const endpoint = `${GitHubMainAPI}/orgs/${studentGitHubOrganization}/repos?per_page=100`;
  // console.log("URL:", endpoint);

  const res = UrlFetchApp.fetch(endpoint, options);
  console.log("RES:", res);
  console.log("STATUS:", res.getResponseCode());
  console.log("RES:", res.getContentText());
  // Logger.log(res.getContentText());

  // let result = res.getResponseCode() == 204 ? true : false;
  // console.log("RESULT:", result);

  return "result";
};

// ================== TEST Section

const student_token =
  "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";

let c9StuORG = "C9-AyaAlomarii";

c9StuORG = "C9-Alaaalnseirat";
c9StuORG = "C9-AyaAlomarii";

getAllRepos(c9ORG, token_c9);
