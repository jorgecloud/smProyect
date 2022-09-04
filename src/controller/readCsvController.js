const readFile = require('../services/readCsvService')


let fileCsv = (req, res) => {
  let archivo = req.files.archivo

  if (archivo.mimetype != 'text/csv') {
    return res.json({ message: "file no fount, atach file .csv" })
  }
  if (archivo.size > 4000000) {
    return res.json({ message: "file no fount, only 4mb" })
  }

  readFile.uploadCsv(archivo).then(dato=> res.json(dato)).catch(err => res.json({status:404,error:err, message:"no se pudo mover al servidor consulte el administrador"}))


   //res.json({archivo})

  //readFile.readFile().then(dato=>res.json({"response":dato, status:200})).catch(error => res.json({error}))
}

module.exports = {
  fileCsv
}