require("dotenv").config();
const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = process.env.API_KEY;;

app.get("/weather/:city", async (req, res) => {

    const city = req.params.city;

    try {

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

        const response = await axios.get(url);

        res.json(response.data);

    } catch (error) {

        console.log(error.response?.data || error.message);

        res.status(500).json({
            error: "Weather fetch failed"
        });

    }

});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});