const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// 测试 API
app.get("/api", (req, res) => {
  res.send({ message: "Hello from Vercel!" });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
