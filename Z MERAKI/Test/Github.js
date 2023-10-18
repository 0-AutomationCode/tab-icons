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

const isAMember = (
  studentGitHubUsername,
  token,
  cohortORG,
  REQUEST_TYPE = "get"
) => {
  // console.log("a", token);

  var options = {
    method: REQUEST_TYPE,
    headers: { Authorization: `Bearer ${token}` },
    per_page: 100,
    // 'payload' : formData
  };

  const endpoint = `${GitHubMainAPI}/orgs/${cohortORG}/members/${studentGitHubUsername}`;
  // console.log("b", endpoint);
  const res = UrlFetchApp.fetch(endpoint, options);

  // console.log("c", res);
  // console.log("c", res.getResponseCode());
  Logger.log(res.getContentText());

  const result = res.getResponseCode() == 204 ? true : false;
  // console.log("z", result);
  return result;
};

const doneFunc = () => {
  console.log("DONE");
};

// ================== TEST Section

const token_c9 =
  "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";

let testStudents = "MERAKI-Academy";
testStudents = "Huda";
testStudents = "Alaaalnseirat";
testStudents = "AyaAlomarii";

const c9ORG = "MERAKI-Academy-Cohort-9";

// isAMember(testStudents, token_c9, c9ORG);

// ! - start section 2
