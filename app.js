const express = require("express");
const app = express();
const path = require("path")
const dotenv = require("dotenv");
const morgan = require("morgan");
const exphbs = require("express-handlebars");
const connectDB = require("./config/db.js")

dotenv.config({ path: "config\config.env" })
connectDB()


// hbs View Engine Setup
app.engine('.hbs', exphbs({defaultLayout: "main", extname: ".hbs"}));
app.set('view engine', '.hbs');

//Public Directory Setup for static files
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/", require("./routes/index"));



//Logging
if(process.env.NODE_ENV === "developement")
{
    app.use(morgan("dev"))
}
const PORT = process.env.PORT || 3000;

app.listen(PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
)