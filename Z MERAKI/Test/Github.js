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

const isAMember = (endpoint, token, REQUEST_TYPE = "get") => {
  console.log("a", token);
  console.log("b", endpoint);

  var options = {
    method: REQUEST_TYPE,
    headers: { Authorization: `Bearer ${token}` },
    per_page: 100,
    // 'payload' : formData
  };

  const res = UrlFetchApp.fetch(endpoint, options);
  Logger.log(res.getContentText());
};

const token_c9 =
  "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";

const endpoint_c9 =
  "https://api.github.com/orgs/MERAKI-Academy-Cohort-9/members";

isAMember(endpoint_c9, token_c9);

const doneFunc = () => {
  console.log("DONE");
};
