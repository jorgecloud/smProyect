const dayjs = require("dayjs");

let daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

let dayForm = (date) => {
  let currenDateYear = dayjs().year();
  console.log("currenDateYear", currenDateYear, typeof currenDateYear);
  console.log("currenDate +1", currenDateYear + 1);
  let dayWek = daysEs[dayjs(date).day() - 1];
  let dayNum = dayjs(date).date();
  let mont = dayjs(date).month();
  let year = dayjs(date).year();

  let dateAppoint = `${dayWek} ${dayNum}/${mont}/${year}`;
  console.log("dateAppoint", dateAppoint);
  if (dateAppoint.includes("undefined") || dateAppoint.includes("NaN")) {
    console.log("Date is undefined", dateAppoint);
    return false;
  }
  console.log("year", year);
  if (!year.includes(currenDateYear) || !year.includes(currenDateYear+1) ) {

    console.log("diferent abo");
    return false
  }

  return dateAppoint;
};

module.exports = {
  dayForm,
};
