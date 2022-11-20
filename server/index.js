const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());

let array = [{firstName: 'Daria', lastName: 'Ivanova', group: 'ІА-91', variant: 'Варіант 15', phone: '+380986752341',
    email: 'dasha2001@gmail.com', password: 'dashaIvanova', role: true}];

app.get("/getUsers", (req, res) => {
    console.log(array);
    res.send("users list received in server");
});

// app.get("/getUsersList", (req, res) => {
//     res.send("users received!!!!!!!!!");
// });

app.get("/login", (req, res) => {
        res.send("authentication");
});

app.post("/addUser", (req,res) => {
    const body = req.body;
    array.push(body);
    // console.log(array);
    res.send("ok");
});

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
