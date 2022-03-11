const { names } = require("./data");

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
