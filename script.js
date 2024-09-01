let oddOrEven = (num) => {
  if (num % 2 == 0) {
    document.getElementById("result").innerHTML = `The number ${num} is Even`;
    console.log(`The number ${num} is Even`);
  } else {
    document.getElementById("result").innerHTML = `The number ${num} is Odd`;
    console.log(`The number ${num} is Odd`);
  }
};
