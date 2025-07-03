const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const emailRouter = require("./route/emailRoutes");
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(
  cors({
    origin: "https://portfolio-client-ivory-zeta.vercel.app",
    credentials: true,
  })
);
app.use(express.json());

app.get("/", (req, resp) => {
  resp.send("Hello");
});

app.use("/api/send", emailRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});

module.exports = app;
