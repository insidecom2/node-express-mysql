const express = require("express");
const app = express();
const port = 3000;
const userRouter = require('./routes/user')

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/api", (req, res) => {
    res.json({ message: "ok" });
});

app.use("/api/user", userRouter);
  
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });