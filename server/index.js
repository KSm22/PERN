require('dotenv').config();
const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const fileUpload = require('express-fileupload');
const models = require('./models/models');
const authRouter = require('./routes/authRouter');
const fileRouter = require('./routes/fileRouter');

const PORT = process.env.PORT || 5000;

const app = new express();

app.use(fileUpload({}));
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);
app.use("/api/files", fileRouter);

app.get("/", (req, res) => {
    res.send("hello world")
});

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => {console.log(`Server started on port ${PORT}`)});
    } catch (e) {
        console.log(e);
    }
};

start();
