const dayjs = require("dayjs");

let daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
let monthEs = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

let hourOffice = ["8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"];

let dayForm = (date) => {
  console.log("dateAppoiments", date);
  let currenDateYear = dayjs().year();

  let dayWek = daysEs[dayjs(date).day() - 1];
  let dayNum = dayjs(date).date();
  let month = monthEs[dayjs(date).month()];
  let year = dayjs(date).year();

  let dateAppoiments = `${dayWek} ${dayNum}/${month}/${year}`;
  console.log("dateAppoiments", dateAppoiments);

  if (dateAppoiments.includes("undefined") || dateAppoiments.includes("NaN")) {
    console.log("Date is undefined", dateAppoiments);
    return false;
  }

  return dateAppoiments;
};

let hourForm = (hour) => {
  let horaf = new Date("1970-01-01T" + hour + "Z").toLocaleTimeString("en-US", {
    timeZone: "UTC",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
  });
  return horaf;
};

module.exports = {
  dayForm,
  hourForm,
};
