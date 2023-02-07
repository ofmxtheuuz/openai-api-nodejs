const axios = require('axios');
const api_key = ""
const prompt = "Um gato com uma bola" // YOUR PROMPT

const options = {
  method: 'post',
  url: 'https://api.openai.com/v1/images/generations',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${api_key}`
  },
  data: {
    "model": "image-alpha-001",
    "prompt": prompt,
    "num_images":1,
    "size":"1024x1024"
  }
};

axios(options)
  .then(function (response) {
    console.log(response.data.data[0].url);
  })
  .catch(function (error) {
    console.log(error)
  });
