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
  "Shakeel Ahmed",
  "Zack Hamnet ",
  "Tom Johnson ",
  "Andrew Torr ",
  "Alfred Betts",
  "Gareth Everson",
  "Alasdair Mcwilliam",
  "Akin Fagbohun",
  "Alistair Sinclair-Smith",
  "Adam Sackfield ",
  "Gareth Williams",
  "Yousef Abobaker",
  "Jurijs Sorokins",
  "Abdinasir mohammed",
  "Tim Tucker",
  "Simon rosellys",
  "Nathaniel Kane",
  "Abdirasak Ahmed",
  "Owen Corrigan",
  "Diana Vozanu",
  "John Murphy",
  "Dane Whitfield",
  "Gareth Dawson",
  "Chris Strafford",
  "Jiyoung Kim",
  "Michal Lewczuk",
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
