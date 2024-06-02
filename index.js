import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3000;

const jokes = [
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call fake spaghetti? An impasta.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why don't skeletons fight each other? They don't have the guts.",
  "How do you organize a space party? You planet.",
  "What do you get when you cross a snowman and a vampire? Frostbite.",
  "Why did the math book look sad? Because it had too many problems.",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call fake spaghetti? An impasta.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
];
app.get("/", async (_, res) => {
  res.json({ joke: jokes[Math.round(Math.random() * 10)] });
});

app.listen(port, () => {
  console.log(`server is started at port :${port}`);
});
