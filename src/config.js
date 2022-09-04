
let confiBd = {
url : process.env.URL,
bd: process.env.DB,
collectionSm: process.env.COLLSM
}


let corsOptions = {
    origin: process.env.ORIGIN,
    optionsSuccessStatus: 200 // For legacy browser support
  }

module.exports = {
    confiBd,
    corsOptions
}