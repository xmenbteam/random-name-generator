const names = [
  "Sam Richmond",
  "Hazem Fahad",
  "Feras Mahmoud ",
  "Abdullah Ahmed",
  "Mohamad Badwe AlNajjar",
  "Christos Nicolou",
  "William Mason",
  "Cadnaan Afrah",
  "Mark Wills",
  "James Barlow",
  "Eunjeong Sim",
  "Sheroze Mohammed",
  "Kavi Parmar",
  "Nicholas Wootton",
  "Isaak Garside",
  "Kamahl Haider",
  "James Harvey",
  "Salem Abushima ",
  "Cam Lindsay",
  "Ali Combes",
  "Temi Alao",
  "Mohamed Mohamed",
  "Shakeel Ahmed",
  "Zack Hamnet ",
  "Tom Johnson ",
  "Andrew Torr ",
  "Alfred Betts",
  "Joseph Hawkins",
  "Gareth Everson",
  "Alasdair Mcwilliam",
  "Akin Fagbohun",
  "Waleed Al-Rwaishan",
  "Alistair Sinclair-Smith",
  "Adam Sackfield ",
  "Gareth Williams",
  "Yousef Abobaker",
  "Jurijs Sorokins",
  "Shaun Clarke",
  "Abdinasir mohammed",
  "Tim Tucker",
  "Simon rosellys",
  "Nathaniel Kane",
  "Abdirasak Ahmed",
  "Owen Corrigan",
  "Tomek Pikniczka",
  "Diana Vozanu",
  "John Murphy",
  "Dane Whitfield",
  "Gareth Dawson",
  "Nicola Lockwood",
  "Suzanne Clifton ",
  "Chris Strafford",
  "Jiyoung Kim",
  "Michal Lewczuk",
  "Ryan Nuttall ",
  "Richard Parle",
];

const getRandomName = (countdown, array) => {
  const i = Math.floor(Math.random() * array.length);
  const randomName = array[i].toUpperCase();

  const countDownFunc = (num, name) => {
    if (!num) console.log(`${name}, COME ON DOWN!!`);
    else {
      console.log(`${num}`);
      setTimeout(countDownFunc, 800, num - 1, name);
    }
  };

  countDownFunc(countdown, randomName);
};

getRandomName(5, names);
