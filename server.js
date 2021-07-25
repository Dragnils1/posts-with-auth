const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./nodeJS/routes/route")
const dbConfig = require("./nodeJS/config/db.config");
const cookieParser = require("cookie-parser")

const app = express();

app.use(cors())
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", router)


const PORT = dbConfig.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

