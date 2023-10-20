const studentsStr = `A01_Shishani	Abdalrhmanalshishani
A02_Khraim	abdkhraim
A03_Adel	Adelaljibeiti
A04_Alaa	Alaaalnseirat
A05_Anas	anasalomar
A06_Aya	AyaAlomarii
A07_Ayham	ayhamotoom
A08_Bushra	Bushraamarat
A09_Deyaa	deyaaaldeen
A10_Hadeel	hadeelHazimeh
A11_Hamza	odehhamza
A12_Hani	haniisalah
A13_Ibraheem	ibraheemalwan
A14_Malek	Malekqandeel
A15_Shboul	Mohammadshboul
A16_Odat	MohammedOdat
A17_Saqqa	RafatBSaqqa
A18_Sondos	SondosAlrifae
A19_YousefA	usfaql
B01_Aisar	aisarmahmoud
B02_Ashraf	AshrafAbabneh
B03_Baker	bakirhammad
B04_Hamza	HamzaFAqel
B05_IbraheemS	ibrahimsaleeh
B06_Kamal	kamallahloh
B07_Maen	Mainaladwaan
B08_Zebdieh	mohammadalzebdieh
B09_Kreishan	MohammedKreishan
B10_Khaleel	MohammedKhalell
B11_Osama	Osamabanimelhem
B12_Raed	raedalfakhoury
B13_Rashed	Rashedalfoqha
B14_Sameer	Sameeralshorman
B15_Seema	seemahasanain
B17_Yasmen	yasmenalmajdoubah
B18_Yazan	Yazanabumater
B19_AlShami	Yousefalshami
B20_AlSheikh	YousefAAlsheikh
G01_Nassar	nassarahmad
G02_Sammour	AhmadSamour
G03_Omari	ibrahimalomare
G04_Jamal	jamalbarhoum
G05_Leen	leenmohammad
G06_Majdi	Majdialgaleed
G07_Maryam	maryamabudarii
G08_Mahmoud	mahmoudqazan
G09_AbdAlRahman	mohamadabdalrahman
G10_Mostafa	Mustafamuonther
G11_Mousa	mosa-bostanji
G12_Esmail	youssefoesmail
G13_Shello	YousefShello
M01_Amal	AmalHawwari
M02_Khaled	KhaledAbuhassan
M03_Laith	LaithKharashgeh
M04_AlKhateeb	YousefAlkhateeb`;

const studentsArray = [
  "A01_Shishani\tAbdalrhmanalshishani",
  "A02_Khraim\tabdkhraim",
  "A03_Adel\tAdelaljibeiti",
  "A04_Alaa\tAlaaalnseirat",
  "A05_Anas\tanasalomar",
  "A06_Aya\tAyaAlomarii",
  "A07_Ayham\tayhamotoom",
  "A08_Bushra\tBushraamarat",
  "A09_Deyaa\tdeyaaaldeen",
  "A10_Hadeel\thadeelHazimeh",
  "A11_Hamza\todehhamza",
  "A12_Hani\thaniisalah",
  "A13_Ibraheem\tibraheemalwan",
  "A14_Malek\tMalekqandeel",
  "A15_Shboul\tMohammadshboul",
  "A16_Odat\tMohammedOdat",
  "A17_Saqqa\tRafatBSaqqa",
  "A18_Sondos\tSondosAlrifae",
  "A19_YousefA\tusfaql",
  "B01_Aisar\taisarmahmoud",
  "B02_Ashraf\tAshrafAbabneh",
  "B03_Baker\tbakirhammad",
  "B04_Hamza\tHamzaFAqel",
  "B05_IbraheemS\tibrahimsaleeh",
  "B06_Kamal\tkamallahloh",
  "B07_Maen\tMainaladwaan",
  "B08_Zebdieh\tmohammadalzebdieh",
  "B09_Kreishan\tMohammedKreishan",
  "B10_Khaleel\tMohammedKhalell",
  "B11_Osama\tOsamabanimelhem",
  "B12_Raed\traedalfakhoury",
  "B13_Rashed\tRashedalfoqha",
  "B14_Sameer\tSameeralshorman",
  "B15_Seema\tseemahasanain",
  "B17_Yasmen\tyasmenalmajdoubah",
  "B18_Yazan\tYazanabumater",
  "B19_AlShami\tYousefalshami",
  "B20_AlSheikh\tYousefAAlsheikh",
  "G01_Nassar\tnassarahmad",
  "G02_Sammour\tAhmadSamour",
  "G03_Omari\tibrahimalomare",
  "G04_Jamal\tjamalbarhoum",
  "G05_Leen\tleenmohammad",
  "G06_Majdi\tMajdialgaleed",
  "G07_Maryam\tmaryamabudarii",
  "G08_Mahmoud\tmahmoudqazan",
  "G09_AbdAlRahman\tmohamadabdalrahman",
  "G10_Mostafa\tMustafamuonther",
  "G11_Mousa\tmosa-bostanji",
  "G12_Esmail\tyoussefoesmail",
  "G13_Shello\tYousefShello",
  "M01_Amal\tAmalHawwari",
  "M02_Khaled\tKhaledAbuhassan",
  "M03_Laith\tLaithKharashgeh",
  "M04_AlKhateeb\tYousefAlkhateeb",
];

const studentsObj = {};
const studentsArray2 = [];

studentsArray.forEach((student) => {
  const [displayName, githubUsername] = student.split("\t");

  studentsArray2.push({
    displayName,
    githubORG: `C9-` + githubUsername,
    githubUsername,
  });
  studentsObj;
});

// !--- final data

//  TODO ============================

const createStudents = (type, names, usernames) => {
  let result;

  if (type == "obj") {
    result = {};
    names.forEach((student, i) => {
      result[student] = {
        displayName: student,
        githubORG: `C9-` + usernames[i],
        githubUsername: usernames[i],
      };
    });
  } else {
    result = [];
    names.forEach((student, i) => {
      result.push({
        displayName: student,
        githubORG: `C9-` + usernames[i],
        githubUsername: usernames[i],
      });
    });
  }
  return result;
};
const allStudents = createStudents(
  "obj",
  studentsDisplayNames,
  githubUsernames
);
