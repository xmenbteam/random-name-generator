const countDown = (num) => {
  const countDownFunc = (num, name) => {
    if (!num) console.log(`TIME IS UP!!`);
    else {
      console.log(`${num}`);
      setTimeout(countDownFunc, 1000, num - 1);
    }
  };

  countDownFunc(num);
};

countDown(60);
