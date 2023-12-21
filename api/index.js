const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Book Review: The Bear & The Nightingale.......",
    },
    {
      id: "2",
      title: "Game Review: Pokemon Brillian Diamond",
    },
    {
      id: "3",
      title: "Show Review: Alice in Borderland",
    },
  ]);
});

app.listen(5000, () => {
  console.log("Hey Shaima Server listening on port http://localhost:5000");
});
