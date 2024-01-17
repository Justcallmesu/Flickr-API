const dotenv = require("dotenv")

// Initialize and Declare Environment Files
dotenv.config({ path: ".env" })

const app = require("./app.js")

app.listen("3000", () => {
    console.log(`Server is Running in ${process.env.NODE_ENV} Mode`);
});