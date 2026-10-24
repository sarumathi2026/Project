const express = require('express');
const app = express();

const VERSION = 'Version 1';

const page = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Automated Deployment Project</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
      color: #fff;
      min-height: 100vh;
    }
    header { text-align: center; padding: 60px 20px 30px; }
    header h1 { font-size: 2.2rem; margin-bottom: 10px; }
    header p { color: #cfe8ef; font-size: 1.1rem; }
    .badge {
      display: inline-block; margin-top: 18px; padding: 8px 20px;
      background: #00c9a7; color: #003b33; border-radius: 30px; font-weight: bold;
    }
    .flow {
      display: flex; flex-wrap: wrap; justify-content: center;
      gap: 15px; padding: 30px 20px;
    }
    .card {
      background: rgba(255,255,255,0.1); border-radius: 14px;
      padding: 22px; width: 190px; text-align: center;
      transition: transform 0.3s;
    }
    .card:hover { transform: translateY(-8px); background: rgba(255,255,255,0.18); }
    .card .icon { font-size: 2.2rem; margin-bottom: 10px; }
    .card h3 { margin-bottom: 8px; }
    .card p { font-size: 0.9rem; color: #d6e6ec; }
    .info { text-align: center; padding: 20px; }
    #clock { font-size: 1.4rem; color: #ffd166; }
    footer { text-align: center; padding: 30px; color: #9fb8c2; font-size: 0.9rem; }
  </style>
</head>
<body>
  <header>
    <h1>Automated Application Deployment</h1>
    <p>Using AWS, Docker and Jenkins</p>
    <span class="badge">${VERSION} - Deployed Automatically</span>
  </header>

  <section class="flow">
    <div class="card"><div class="icon">&#128187;</div><h3>GitHub</h3><p>Developer pushes the code</p></div>
    <div class="card"><div class="icon">&#9881;</div><h3>Jenkins</h3><p>Pipeline starts automatically</p></div>
    <div class="card"><div class="icon">&#128051;</div><h3>Docker</h3><p>Builds the image</p></div>
    <div class="card"><div class="icon">&#128230;</div><h3>Docker Hub</h3><p>Stores the image</p></div>
    <div class="card"><div class="icon">&#9729;</div><h3>AWS EC2</h3><p>Runs the container</p></div>
  </section>

  <section class="info">
    <p>Current time</p>
    <div id="clock"></div>
  </section>

  <footer>Created by YOUR NAME | DevOps Project</footer>

  <script>
    function updateClock() {
      document.getElementById('clock').textContent = new Date().toLocaleString();
    }
    updateClock();
    setInterval(updateClock, 1000);
  </script>
</body>
</html>
`;

app.get('/', (req, res) => {
  res.send(page);
});

app.listen(3000, () => console.log('App running on port 3000'));
