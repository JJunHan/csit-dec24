const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.post('/api/toyProductionKey', (req, res) => {
  // Extract the key from the request body
  const test = req.body;
  // console.log(req.body)

  // Log the received key to the console (useful for debugging)
  console.log('Received key:', test);

  // Check if the key exists and send a response
  // if (!key) {
  //   return res.status(400).json({ error: 'Key is required' }); // Send a 400 Bad Request if key is missing
  // }

  // Send a success response with the received key
  res.status(200).json({ message: 'Key received successfully', receivedKey: test });
});