const axios = require('axios');
const api_key = ""
const prompt = "Quem foi Albert Einstein" // YOUR PROMPT

const options = {
  method: 'post',
  url: 'https://api.openai.com/v1/completions',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${api_key}`
  },
  data: {
    "model": "text-davinci-001",
    "prompt": prompt,
    "temperature":1,
    "max_tokens": 1024
  }
};

axios(options)
  .then(function (response) {
    console.log(response.data.choices[0].text);
  })
  .catch(function (error) {
    console.log(error)
  });
