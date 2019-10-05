const express = require("express");

const app = express();

app.get("/", (req, res) => {

});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Tour server running on port ${PORT}`);
});