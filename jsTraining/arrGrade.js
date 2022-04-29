let allStudents = ["A", "B", "C-", 1, 2, 3, 5];
const studentArr = document.querySelector("p");

studentArr.innerHTML = allStudents;

let studentsWhoPass = [];

allStudents.forEach(function (student) {
  if (student >= 3 || student !== "C-") {
    studentsWhoPass.push(student);
    studentArr.innerHTML = `Student who pass = ${studentsWhoPass}`;
  }
});

//  for loop

for (let i = 10; i > 0; i--) {
  console.log(i);
}

//  while loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

// for loop is often used when you know the number of iterations.
// while loops is ulilized when such a number is not clear, hence the 'while' condition.

// assignment

for (let i = 3; i < 20; i = i + 3) {
  console.log(i);
}

// finding adjacent pair that produces the highest number

function solution(inputArray) {
  let resArr = [];
  const len = inputArray.length;
  for (let i = 0; i < inputArray.length; i++) {
    if (i < inputArray.length - 1) {
      resArr.push(inputArray[i] * inputArray[i + 1]);
    }
  }
  console.log(resArr);
  // const largest = resArr.reduce((val1, val2) => Math.max(val1 + val2));
  const res = Math.max(...resArr);

  return res;
}

const inputArray = [0, 1, 3, 5, 6];
solution(inputArray);
