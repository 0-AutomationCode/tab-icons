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

const allStudentsV01 = [
  {
    displayName: "A01_Shishani",
    githubORG: "C9-Abdalrhmanalshishani",
    githubUsername: "Abdalrhmanalshishani",
  },
  {
    displayName: "A02_Khraim",
    githubORG: "C9-abdkhraim",
    githubUsername: "abdkhraim",
  },
  {
    displayName: "A03_Adel",
    githubORG: "C9-Adelaljibeiti",
    githubUsername: "Adelaljibeiti",
  },
  {
    displayName: "A04_Alaa",
    githubORG: "C9-Alaaalnseirat",
    githubUsername: "Alaaalnseirat",
  },
  {
    displayName: "A05_Anas",
    githubORG: "C9-anasalomar",
    githubUsername: "anasalomar",
  },
  {
    displayName: "A06_Aya",
    githubORG: "C9-AyaAlomarii",
    githubUsername: "AyaAlomarii",
  },
  {
    displayName: "A07_Ayham",
    githubORG: "C9-ayhamotoom",
    githubUsername: "ayhamotoom",
  },
  {
    displayName: "A08_Bushra",
    githubORG: "C9-Bushraamarat",
    githubUsername: "Bushraamarat",
  },
  {
    displayName: "A09_Deyaa",
    githubORG: "C9-deyaaaldeen",
    githubUsername: "deyaaaldeen",
  },
  {
    displayName: "A10_Hadeel",
    githubORG: "C9-hadeelHazimeh",
    githubUsername: "hadeelHazimeh",
  },
  {
    displayName: "A11_Hamza",
    githubORG: "C9-odehhamza",
    githubUsername: "odehhamza",
  },
  {
    displayName: "A12_Hani",
    githubORG: "C9-haniisalah",
    githubUsername: "haniisalah",
  },
  {
    displayName: "A13_Ibraheem",
    githubORG: "C9-ibraheemalwan",
    githubUsername: "ibraheemalwan",
  },
  {
    displayName: "A14_Malek",
    githubORG: "C9-Malekqandeel",
    githubUsername: "Malekqandeel",
  },
  {
    displayName: "A15_Shboul",
    githubORG: "C9-Mohammadshboul",
    githubUsername: "Mohammadshboul",
  },
  {
    displayName: "A16_Odat",
    githubORG: "C9-MohammedOdat",
    githubUsername: "MohammedOdat",
  },
  {
    displayName: "A17_Saqqa",
    githubORG: "C9-RafatBSaqqa",
    githubUsername: "RafatBSaqqa",
  },
  {
    displayName: "A18_Sondos",
    githubORG: "C9-SondosAlrifae",
    githubUsername: "SondosAlrifae",
  },
  {
    displayName: "A19_YousefA",
    githubORG: "C9-usfaql",
    githubUsername: "usfaql",
  },
  {
    displayName: "B01_Aisar",
    githubORG: "C9-aisarmahmoud",
    githubUsername: "aisarmahmoud",
  },
  {
    displayName: "B02_Ashraf",
    githubORG: "C9-AshrafAbabneh",
    githubUsername: "AshrafAbabneh",
  },
  {
    displayName: "B03_Baker",
    githubORG: "C9-bakirhammad",
    githubUsername: "bakirhammad",
  },
  {
    displayName: "B04_Hamza",
    githubORG: "C9-HamzaFAqel",
    githubUsername: "HamzaFAqel",
  },
  {
    displayName: "B05_IbraheemS",
    githubORG: "C9-ibrahimsaleeh",
    githubUsername: "ibrahimsaleeh",
  },
  {
    displayName: "B06_Kamal",
    githubORG: "C9-kamallahloh",
    githubUsername: "kamallahloh",
  },
  {
    displayName: "B07_Maen",
    githubORG: "C9-Mainaladwaan",
    githubUsername: "Mainaladwaan",
  },
  {
    displayName: "B08_Zebdieh",
    githubORG: "C9-mohammadalzebdieh",
    githubUsername: "mohammadalzebdieh",
  },
  {
    displayName: "B09_Kreishan",
    githubORG: "C9-MohammedKreishan",
    githubUsername: "MohammedKreishan",
  },
  {
    displayName: "B10_Khaleel",
    githubORG: "C9-MohammedKhalell",
    githubUsername: "MohammedKhalell",
  },
  {
    displayName: "B11_Osama",
    githubORG: "C9-Osamabanimelhem",
    githubUsername: "Osamabanimelhem",
  },
  {
    displayName: "B12_Raed",
    githubORG: "C9-raedalfakhoury",
    githubUsername: "raedalfakhoury",
  },
  {
    displayName: "B13_Rashed",
    githubORG: "C9-Rashedalfoqha",
    githubUsername: "Rashedalfoqha",
  },
  {
    displayName: "B14_Sameer",
    githubORG: "C9-Sameeralshorman",
    githubUsername: "Sameeralshorman",
  },
  {
    displayName: "B15_Seema",
    githubORG: "C9-seemahasanain",
    githubUsername: "seemahasanain",
  },
  {
    displayName: "B17_Yasmen",
    githubORG: "C9-yasmenalmajdoubah",
    githubUsername: "yasmenalmajdoubah",
  },
  {
    displayName: "B18_Yazan",
    githubORG: "C9-Yazanabumater",
    githubUsername: "Yazanabumater",
  },
  {
    displayName: "B19_AlShami",
    githubORG: "C9-Yousefalshami",
    githubUsername: "Yousefalshami",
  },
  {
    displayName: "B20_AlSheikh",
    githubORG: "C9-YousefAAlsheikh",
    githubUsername: "YousefAAlsheikh",
  },
  {
    displayName: "G01_Nassar",
    githubORG: "C9-nassarahmad",
    githubUsername: "nassarahmad",
  },
  {
    displayName: "G02_Sammour",
    githubORG: "C9-AhmadSamour",
    githubUsername: "AhmadSamour",
  },
  {
    displayName: "G03_Omari",
    githubORG: "C9-ibrahimalomare",
    githubUsername: "ibrahimalomare",
  },
  {
    displayName: "G04_Jamal",
    githubORG: "C9-jamalbarhoum",
    githubUsername: "jamalbarhoum",
  },
  {
    displayName: "G05_Leen",
    githubORG: "C9-leenmohammad",
    githubUsername: "leenmohammad",
  },
  {
    displayName: "G06_Majdi",
    githubORG: "C9-Majdialgaleed",
    githubUsername: "Majdialgaleed",
  },
  {
    displayName: "G07_Maryam",
    githubORG: "C9-maryamabudarii",
    githubUsername: "maryamabudarii",
  },
  {
    displayName: "G08_Mahmoud",
    githubORG: "C9-mahmoudqazan",
    githubUsername: "mahmoudqazan",
  },
  {
    displayName: "G09_AbdAlRahman",
    githubORG: "C9-mohamadabdalrahman",
    githubUsername: "mohamadabdalrahman",
  },
  {
    displayName: "G10_Mostafa",
    githubORG: "C9-Mustafamuonther",
    githubUsername: "Mustafamuonther",
  },
  {
    displayName: "G11_Mousa",
    githubORG: "C9-mosa-bostanji",
    githubUsername: "mosa-bostanji",
  },
  {
    displayName: "G12_Esmail",
    githubORG: "C9-youssefoesmail",
    githubUsername: "youssefoesmail",
  },
  {
    displayName: "G13_Shello",
    githubORG: "C9-YousefShello",
    githubUsername: "YousefShello",
  },
  {
    displayName: "M01_Amal",
    githubORG: "C9-AmalHawwari",
    githubUsername: "AmalHawwari",
  },
  {
    displayName: "M02_Khaled",
    githubORG: "C9-KhaledAbuhassan",
    githubUsername: "KhaledAbuhassan",
  },
  {
    displayName: "M03_Laith",
    githubORG: "C9-LaithKharashgeh",
    githubUsername: "LaithKharashgeh",
  },
  {
    displayName: "M04_AlKhateeb",
    githubORG: "C9-YousefAlkhateeb",
    githubUsername: "YousefAlkhateeb",
  },
];
