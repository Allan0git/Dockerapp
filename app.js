const express = require("express");
const app = express();
const PORT = 80;

// Define a route to serve custom HTML content
app.get("/", (req, res) => {
  const htmlContent = `
   Hey guys this is ELECTRA...
  `;
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
