function AppointmentModel(name, day, hours, to, type, empresaName) {
  this.name = name;
  this.day = day;
  this.hours = hours;
  this.to = to;
  this.type = type;
  this.empresaName = empresaName;
}

module.exports = {
  AppointmentModel,
};
