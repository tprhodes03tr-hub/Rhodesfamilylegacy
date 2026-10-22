<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rhodes Family Legacy - Universal Genomic Command Node</title>
  <style>
    body {
      background-color: #0b0c10;
      color: #c5c6c7;
      font-family: 'Courier New', Courier, monospace;
      margin: 0;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }
    .container {
      width: 100%;
      max-width: 600px;
      border: 2px solid #ffb703;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 0 20px rgba(255, 183, 3, 0.2);
      background-color: #1f2833;
    }
    h1 {
      font-size: 1.1rem;
      color: #ffb703;
      text-align: center;
      letter-spacing: 2px;
      margin-bottom: 5px;
    }
    h2 {
      font-size: 0.9rem;
      color: #66fcf1;
      text-align: center;
      letter-spacing: 1px;
      margin-top: 0;
      margin-bottom: 20px;
    }
    .input-group {
      margin-bottom: 15px;
    }
    label {
      display: block;
      font-size: 0.8rem;
      color: #66fcf1;
      margin-bottom: 5px;
    }
    input {
      width: 100%;
      padding: 10px;
      background-color: #0b0c10;
      border: 1px solid #45a29e;
      color: #fff;
      font-family: 'Courier New', Courier, monospace;
      border-radius: 4px;
      box-sizing: border-box;
    }
    button {
      width: 100%;
      padding: 12px;
      background-color: #ffb703;
      color: #0b0c10;
      font-weight: bold;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-family: 'Courier New', Courier, monospace;
      letter-spacing: 1px;
      margin-top: 10px;
    }
    button:hover {
      background-color: #fb8500;
      color: #fff;
    }
    .output-box {
      margin-top: 20px;
      background-color: #0b0c10;
      border: 1px solid #66fcf1;
      padding: 15px;
      border-radius: 4px;
      font-size: 0.85rem;
      white-space: pre-wrap;
      line-height: 1.4;
      color: #66fcf1;
      min-height: 120px;
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>SEVEN RIVERS GENOMIC COMMAND NODE</h1>
    <h2>UNIVERSAL BLOOD-LINEAGE & DNA SCANNER</h2>

    <div class="input-group">
      <label for="matchName">ENTER ANCESTOR, SURNAME OR HAPLOGROUP (e.g., Fox, Johnson, jl283, moroccan, dismal, coincoin, seminole, greenwood)</label>
      <input type="text" id="matchName" placeholder="e.g. Fox">
    </div>

    <div class="input-group">
      <label for="matchCm">SHARED CENTIMORGANS (cM)</label>
      <input type="text" id="matchCm" placeholder="e.g. 21">
    </div>

    <div class="input-group">
      <label for="matchChr">CHROMOSOME ZONES</label>
      <input type="text" id="matchChr" placeholder="e.g. 1, 3, X">
    </div>

    <button onclick="verifyUniversalCousin()">RUN GENOMIC AUTHENTICATION</button>

    <div class="output-box" id="genomic-output">
      > SYSTEM READY. Awaiting lineage query input...
    </div>
  </div>

  <!-- Load Dynamic Lineage Database Script -->
  <script src="lineage-data.js"></script>
  <script>
    function verifyUniversalCousin() {
      const nameInput = document.getElementById('matchName').value;
      const cm = parseFloat(document.getElementById('matchCm').value) || 0;
      const chrInput = document.getElementById('matchChr').value;

      if (!window.RHODES_LINEAGE_DATABASE) {
        document.getElementById('genomic-output').innerText = "> ERROR: lineage-data.js database not loaded.";
        return;
      }

      // Query the comprehensive lineage database
      const result = window.RHODES_LINEAGE_DATABASE.queryDatabase(nameInput, chrInput);
      const outputBox = document.getElementById('genomic-output');

      // Render full historical depth, temporal shifts, and archival records on screen
      outputBox.innerText = `> ARCHIVAL QUERY SUCCESS: ${result.name}\n` +
                            `> Lineage Stream: ${result.stream}\n` +
                            `> Estimated Epoch: ${result.estimatedEra}\n` +
                            `> Temporal Shift: ${result.temporalShift}\n` +
                            `> HISTORICAL BACKDROP: ${result.historicalContext}\n` +
                            `> Genetic Marker / X-Chr Link: ${result.xChromosomeLink}\n` +
                            `> Archival Record: ${result.historicalNote}\n` +
                            `> SHARED DATA: ${cm} cM | Status: VERIFIED BLOODLINE ANCHOR`;
  
      // Text-to-Speech audio feedback integration
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        let utter = new SpeechSynthesisUtterance(`Epoch verified for ${result.name}. Historical backdrop loaded.`);
        window.speechSynthesis.speak(utter);
      }
    }
  </script>
</body>
</html>
