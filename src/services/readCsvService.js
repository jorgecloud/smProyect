//const neatCsv = require('neat-csv');
const path = require("path");
const fs = require("fs");
const { createSms } = require("./sms.send");
const { resolve } = require("path");
const { type } = require("os");
const { send } = require("process");


let arch = "../assets/csv";
let dataArray;
let sendMessages = 0
let sendFail =[]
indexSend = []

let uploadCsv = (file)=>{
  
  let name = file.name
  let arcI = path.join(__dirname, `${arch}${name}`)
  console.log("arcI", arcI)
  return new Promise((resolve, reject)=>{

   file.mv(arcI, (err)=>{
      if(err){
        console.log("err",err)
        return  reject(err)
      }
      resolve(arcI)
      console.log("file", arcI)
    })
  })
}


let readFile = (arcI, imagenUrl, mensaje) => {
  return new Promise((resolve, reject) => {

    fs.readFile(arcI, "utf8", function (err, data) {
      if (err) {
        console.log("err",err);
      return  reject(err);
      }
      dataArray = dataCaracter(data);
      console.log("dataArray",dataArray)
     let eleme = dataArray.find(Element => Element === 'Name,Phone 1  Value',)
     
     if(eleme == null || eleme == undefined || eleme == ""){
      fs.unlinkSync(arcI)

      console.log("element no found",eleme)
     return reject(eleme)
     }
     console.log("eleme",eleme)

      dataArray.map((index, position) => {
        let name = nameFormat(index);
        let number = numberFormat(index);
        console.log("name quedo asi", name);
        console.log("number quedo asi", number);
        console.log("datos ",index, position)
        if(number == false || name == false){
         console.log("datos invalidos",index, position)
         sendFail.push(index)
        
        }else{
         createSms(name, number, imagenUrl, mensaje).then((data)=>{console.log("por aca todo bien"),sendMessages = sendMessages + 1}).catch((err)=>{console.log("por aca no se envio nada "),sendFail.push(index)})
         indexSend.push(`${name}:${number}`)
        }
        console.log("dataArray.length contador",dataArray.length -1)
        if (position === dataArray.length - 1) {
          resolve((data)=>{
           return {"send messages total":sendMessages, "sen messages":indexSend, "sendFail":sendFail}
          });
          fs.unlinkSync(arcI)
          sendMessages = 0
          indexSend=[]
          sendFail =[]
          return
        }
      });
    });
  });
};

let nameFormat = (index) => {
  if (
    index == undefined ||
    index == "" ||
    index == "" ||
    index == null||
    typeof index != "string"
  ) {
    console.log("datos no validos", index);
  }
  let name = index.split(",")[0].split(" ")[0];
  if(name.length <= 0){
    return false
  }

  let nameUper = `${name[0].toUpperCase()}${name.substring(1)}`

  if (typeof nameUper === "string" ) {
    return nameUper.replace(/[\^\=\+\&\ ]/, "");
  }
  {
    return false
  }
};

let numberFormat = (index) => {
  if (
    index == undefined ||
    index == "" ||
    index == "" ||
    index == null||
    typeof index != "string"
  ) {
    console.log("datos no validos", index);
  }
  let number = index.split(",")[1]

  if(number === undefined|| number.length <= 0|| number == null){
    return false
  }
 let number2 = number.replace(/\ /g, "").match(/(\d+)/g)[0];

  if (number2.length === 10) {
    return number2;
  }else{
    return false
  }
};

let dataCaracter = (data) => {
  return data
    .replace(/[\(\)\'\$\-\@\#\*\=\+\%\&\!\~\`\;\:\r]/g, "")
    .split("\n");
};

module.exports = {
  readFile,
  uploadCsv
};
