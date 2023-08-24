const express = require("express")
const request = require("request")

const app = express()
   
app .get("/", (req,res) => {
    let city = req.query.city;
    var request = require('request');
request(
    `https://samples.openweathermap.org/data/2.5/forecast?q=${city}&appid=a595d8282d88400e917ab940408dfaf6`,
     function (error, response, body) {
    let data = JSON.parse(body)
if (response.statusCode === 200)
  {
    res.send(`the weather in your city "${city}" is ${data.list[0].weather[0].description}`)
  }
}
);
});
app.listen(3000, () => console.log('server started on port 3000')) 