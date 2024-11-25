const express = require("express");
const app = express();
const PORT = 80;

// Define a route to serve custom HTML content
app.get("/", (req, res) => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Custom Page</title>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f0f8ff;
          text-align: center;
          padding-top: 50px;
        }
        h1 {
          color: #007bff;
          font-size: 3rem;
        }
        p {
          color: #333;
          font-size: 1.5rem;
        }
      </style>
    </head>
    <body>
      <h1>Welcome to My Express App!</h1>
      <p>Express.js is running smoothly.</p>
    </body>
    </html>
  `;
  res.send(htmlContent);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
