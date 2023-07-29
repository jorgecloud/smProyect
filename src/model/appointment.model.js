function AppointmentModel(id, title, name, day, hours, to, type, empresaName) {
  this.id = id
  this.title = title;
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
