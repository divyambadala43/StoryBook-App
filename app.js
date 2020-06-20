const express = require("express");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const connectDB = require("./config/db.js")

dotenv.config({ path: "config\config.env" })
connectDB()

app.engine('.hbs', exphbs({defaultLayout: "main",extname: ".hbs"}));
app.set('view engine', '.hbs');

if(process.env.NODE_ENV === "developement")
{
    app.use(morgan("dev"))
}
const PORT = process.env.PORT || 3000;

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)