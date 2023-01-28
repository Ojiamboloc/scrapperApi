const express = require("express");
const request = require("request-promise");
const app = express();
const PORT = process.env.PORT || 5000;
const apiKey = "4382a91d6bfce9be6910ff1a09168d30";
const baseUrl = `http://api.scraperapi.com?api_keys=${apiKey}&autoparse=true`;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Amazon Scrapper API");
});
//get producr details
app.get("/products/:productID", async (req, res) => {
  const { productID } = req.params;
  try {
    const response = await request(
      `${baseUrl}&url=https://www.amazon.com/dp/&{productID}`
    );
    res.json(JSON.parse(response));
  } catch (error) {
    res.json(error)}
});
app.get("/products/:productID/reviews", async (req, res) => {
    const { productID } = req.params;
    try {
      const response = await request(
        `${baseUrl}&url=https://www.amazon.com/product-reviews/&{productID}`
      );
      res.json(JSON.parse(response));
    } catch (error) {
      res.json(error)}
  });
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
