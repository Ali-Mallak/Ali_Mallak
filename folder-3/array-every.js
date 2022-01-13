/*
   This program should check if the array `group` contains only students
*/

const students = ["Hossein", "Jamal", "Mehdi", "Shaden", "Zaynab", "Niloofar"];
const group = ["Haniye", "Alireza", "Benyamin", "Fatemeh"];

let groupIsOnlyStudents;

for (let x = 0; x < group.length; x++) {
  groupIsOnlyStudents = students.includes(group[x]);
}

// complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
