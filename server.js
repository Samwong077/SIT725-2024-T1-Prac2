let express = require("express");
let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/"));
app.get("/", function (req, res) {
    res.render("index.html");
});

app.get("/addTwoNumbers", function (req, res) {
    let num1 = parseInt(req.query.num1, 10);
    let num2 = parseInt(req.query.num2, 10);

    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            message: "One or both query parameters are not valid numbers"
        });
    }

    let result = num1 + num2;

    let response = {
        data: result,
        message: "success",
        statusCode: 200
    };
    
    res.json(response);
});

app.listen(PORT, () => {
    console.log("Server is running on port ${PORT}");
});