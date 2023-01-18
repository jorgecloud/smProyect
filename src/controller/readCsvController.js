const readFile = require("../services/readCsvService");

let fileCsv = (req, res) => {
  let file;
  let imagenUrl = req.body.url;
  let mensaje = req.body.mensaje;

  if (!req.files || req.files.file == undefined || req.files.file == null) {
    return res
      .status(400)
      .json({ success: false, error: "file no fount, atach file .csv" });
  }

  file = req.files.file;

  if (file.mimetype != "text/csv") {
    return res.json({ message: "file no fount, atach file .csv" });
  }
  if (file.size > 4000000) {
    return res.json({ message: "file no fount, only 4mb" });
  }

  readFile.uploadCsv(file)
    .then((dato) => {
       readFile.readFile(dato, imagenUrl, mensaje)
        .then((dato) => res.json({ response: dato, status: 200 }))
        .catch((error) =>
          res.json({ status: 500, message: "file no found", error })
        );
    })
    .catch((err) =>
      res.json({
        status: 404,
        error: err,
        message: "no se pudo mover al servidor consulte el administrador",
      })
    );
};

module.exports = {
  fileCsv,
};
