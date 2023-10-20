
console.log("DATA: ", data);

console.log("DATA2: ", data2);

data.legnth;
data2.legnth;

const repos = {};

data2.forEach((e, i) => {
  const { name, private } = e;
  repos[e.name] = { name, private };
  console.log(e.name);
});
console.log("DATA2: ", repos);

const repos2 = {};
data2.forEach((e, i) => {
  const { name, private } = e;
  repos2[e.name] = private?"YES":"NO" 
  console.log(e.name);
});

console.log("DATA2: ", repos2);

const testObj = {
  S1L01_Introduction_To_JS: {
    name: "S1L01_Introduction_To_JS",
    private: true,
  },
  S1L02_Functions: {
    name: "S1L02_Functions",
    private: true,
  },
  W01D03_Conditionals: {
    name: "W01D03_Conditionals",
    private: true,
  },
  W02D01_Scopes: {
    name: "W02D01_Scopes",
    private: true,
  },
  W02D02_Arrays: {
    name: "W02D02_Arrays",
    private: true,
  },
  W02D03_Objects: {
    name: "W02D03_Objects",
    private: true,
  },
};

const testObjStr = {
  S1L01_Introduction_To_JS: {
    name: "S1L01_Introduction_To_JS",
    private: true,
  },
  S1L02_Functions: {
    name: "S1L02_Functions",
    private: true,
  },
  W01D03_Conditionals: {
    name: "W01D03_Conditionals",
    private: true,
  },
  W02D01_Scopes: {
    name: "W02D01_Scopes",
    private: true,
  },
  W02D02_Arrays: {
    name: "W02D02_Arrays",
    private: true,
  },
  W02D03_Objects: {
    name: "W02D03_Objects",
    private: true,
  },
};

const isRepoExist = (repos, repoToCheck) => {
  const reposObj = JSON.stringify(repos);
  const result=reposObj[repoToCheck]?true:false
  return ;
};

const isRepoPrivate = (repos, repoToCheck) => {
  const reposObj = JSON.stringify(repos);
  return reposObj[repoToCheck]?.private;
};



/* */
let str = "";
data2.forEach((e, i) => {
  const { name, private } = e;
  // repos[e.name] = { name, private };

  str += `${name}|${private}\n`;
  console.log(e.name);
});

console.log("string: ", str);

console.clear();
