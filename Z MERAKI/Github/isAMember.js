const doneFunc = () => {
  console.log("DONE");
};

// !- is the student a member of MERAKI Organization

/*
const getAllMembers = (endpoint, token, REQUEST_TYPE = "get") => {
  console.log("a", token);
  console.log("b", endpoint);

  var options = {
    method: REQUEST_TYPE,
    headers: { Authorization: `Bearer ${token}` },
    per_page: 100
    // 'payload' : formData
  };

  const res = UrlFetchApp.fetch(endpoint, options);
  Logger.log(res.getContentText());
};

const token_c9 =
  "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";

const endpoint_c9 =
  "https://api.github.com/orgs/MERAKI-Academy-Cohort-9/members";

getAllMembers(endpoint_c9, token_c9);
*/

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
  console.log("RES:", res);
  console.log("STATUS:", res.getResponseCode());
  // Logger.log(res.getContentText());

  let result = res.getResponseCode() == 204 ? true : false;
  console.log("RESULT:", result);

  return result;

  /*
  try {
    const res = UrlFetchApp.fetch(endpoint, options);
    console.log("c", res);
    console.log("c", res.getResponseCode());
    Logger.log(res.getContentText());

    result = res.getResponseCode() == 204 && true;
    // console.log("z", result);
  } catch (error) {
    console.error(error);
    result = false;
    // Expected output: ReferenceError: nonExistentFunction is not defined
    // (Note: the exact output may be browser-dependent)
  }
  */
};

// ================== TEST Section

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
