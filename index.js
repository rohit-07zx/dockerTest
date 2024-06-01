import express from "express";

const app = express();
const port = 3000;
app.get("/", async (_, res) => {
  res.json({ message: "all well working fine" });
});

app.listen(port, () => {
  console.log(`server is started at port :${port}`);
});
