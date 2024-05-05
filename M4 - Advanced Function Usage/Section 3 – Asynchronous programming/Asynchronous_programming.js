// 4.3.1 Asynchronous programming

// Sample Server Implementation
var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

// Helper function for simulating delays
const sleep = (waitTimeInMs) => new Promise(resolve => setTimeout(resolve, waitTimeInMs));

// Root route returning an empty HTML page
app.get("/", (req, res, next) => {
    res.send(' \
    \
    \
    \
    Sample Site \
    \
    \
    \
    ');
});

// JSON route with asynchronous behavior
app.get("/json", async (req, res, next) => {
    const time = Math.floor(Math.random() * 1000) + 1000; // Random delay time between 1000ms to 2000ms
    let square = req.query.value || 0;
    square *= square; // Squaring the provided value
    await sleep(time); // Simulating delay
    res.json({
        'time': time,
        'square': square
    });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log("Server running on port 3000");
});