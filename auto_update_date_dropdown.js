//Display number of days depending on month chosen
const month = document.getElementById("month");
const days = document.getElementById("day");
let getDate = new Date();
let thisYear = getDate.getFullYear();
let selectYear = document.getElementById("year");

let yearOpt1 = document.createElement('option');
yearOpt1.setAttribute("value",`${thisYear}`);
yearOpt1.innerHTML = thisYear;
selectYear.appendChild(yearOpt1);

let yearOpt2 = document.createElement('option');
yearOpt2.setAttribute("value",`${thisYear + 1}`);
yearOpt2.innerHTML = thisYear + 1;
selectYear.appendChild(yearOpt2);


const dayPerMonth = [
  { month: "Jan", days: 31 },
  { month: "Feb", days: 28 },
  { month: "Mar", days: 31 },
  { month: "Apr", days: 30 },
  { month: "May", days: 31 },
  { month: "Jun", days: 30 },
  { month: "Jul", days: 31 },
  { month: "Aug", days: 31 },
  { month: "Sep", days: 30 },
  { month: "Oct", days: 31 },
  { month: "Nov", days: 30 },
  { month: "Dec", days: 31 }
];
//default set days for January
for (let i = 1; i <= dayPerMonth[0].days; i++) {
  let option = document.createElement("option");
  option.text = i;
  days.add(option);
}

const addOpt = function() {
  //clear day dropdown
  for (let i = days.length; i >= 0; i--) {
    days.remove(i);
  }
  //update dropdown
  let monthNum = month.value;
  let selectDay = dayPerMonth[monthNum].days;
  for (let i = 1; i <= selectDay; i++) {
    let option = document.createElement("option");
    option.text = i;
    days.add(option);
  }
};
//Updates days according to selected month
month.addEventListener("change", addOpt);
