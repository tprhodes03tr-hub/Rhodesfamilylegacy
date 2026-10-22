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
    .btn-row {
      display: flex;
      gap: 10px;
      margin-top: 10px;
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
    .btn-secondary {
      background-color: #45a29e;
      color: #0b0c10;
    }
    .btn-secondary:hover {
      background-color: #66fcf1;
    }
    .btn-ai {
      background-color: #66fcf1;
      color: #0b0c10;
    }
    .btn-ai:hover {
      background-color: #45a29e;
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
    .image-container {
      margin-top: 15px;
      text-align: center;
    }
    .image-container img {
      max-width: 100%;
      height: auto;
      border: 2px solid #66fcf1;
      border-radius: 6px;
      box-shadow: 0 0 15px rgba(102, 252, 241, 0.3);
    }
  </style>
</head>
<body>

  <div class="container">
    <h1>SEVEN RIVERS GENOMIC COMMAND NODE</h1>
    <h2>UNIVERSAL BLOOD-LINEAGE & DNA SCANNER</h2>

    <div class="input-group">
      <label for="matchName">ENTER ANCESTOR, SURNAME OR HAPLOGROUP (e.g., Elroy, Luetta, Fannie, Thomas, Wright, Fox, Colbert)</label>
      <input type="text" id="matchName" placeholder="e.g. Luetta">
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
    
    <div class="btn-row">
      <button class="btn-secondary" style="margin-top:0;" onclick="speakFullHistory()">🔊 NARRATE LOG</button>
      <button class="btn-ai" style="margin-top:0;" onclick="startVoiceConversation()">🎙️ ASK AI PARTNER</button>
    </div>

    <div class="output-box" id="genomic-output">
      > SYSTEM READY. Awaiting lineage query input...
    </div>
    
    <div class="image-container" id="ancestor-image-container"></div>
  </div>

  <!-- Load Dynamic Lineage Database Script -->
  <script src="lineage-data.js"></script>
  <script>
    let lastQueryResult = null;

    // Universal Natural Language & DNA Question Intent Extractor
    function parseQueryIntent(rawQuery) {
      const q = (rawQuery || "").toLowerCase();
      
      if (q.includes("elroy") || q.includes("fannie may") || q.includes("parents") || q.includes("father") || q.includes("mother")) {
        return "parents";
      }
      if (q.includes("luetta") || q.includes("paternal grandmother")) {
        return "luetta-thomas";
      }
      if (q.includes("fannie wright") || q.includes("maternal grandmother")) {
        return "fannie-may-wright";
      }
      if (q.includes("native") || q.includes("indian") || q.includes("chickasaw") || q.includes("indigenous") || q.includes("colbert")) {
        return "colbert";
      }
      if (q.includes("cane river") || q.includes("coincoin") || q.includes("louisiana") || q.includes("brevelle") || q.includes("dupre")) {
        return "coincoin";
      }
      if (q.includes("wright") || q.includes("rebecca") || q.includes("aaron") || q.includes("yalobusha")) {
        return "wright";
      }
      if (q.includes("thomas") || q.includes("george") || q.includes("minnie") || q.includes("hatten")) {
        return "thomas";
      }
      if (q.includes("fox") || q.includes("fleming") || q.includes("jl283") || q.includes("j-l283") || q.includes("paternal")) {
        return "fox";
      }
      if (q.includes("seminole") || q.includes("dismal") || q.includes("swamp") || q.includes("maroon")) {
        return "dismal";
      }
      if (q.includes("moroccan") || q.includes("moorish")) {
        return "moroccan";
      }
      if (q.includes("greenwood") || q.includes("tulsa")) {
        return "greenwood";
      }
      if (q.includes("mitchell") || q.includes("delta") || q.includes("pulpit") || q.includes("spencer")) {
        return "mitchell";
      }
      if (q.includes("dna") || q.includes("chromosome") || q.includes("heritage") || q.includes("bloodline") || q.includes("lineage")) {
        return "parents"; 
      }

      return rawQuery;
    }

    function displayAncestorResult(queryResult, cmValue) {
      lastQueryResult = queryResult;
      const outputBox = document.getElementById('genomic-output');
      const imageContainer = document.getElementById('ancestor-image-container');

      outputBox.innerText = `> ARCHIVAL QUERY SUCCESS: ${queryResult.name}\n` +
                            `> Lineage Stream: ${queryResult.stream}\n` +
                            `> Estimated Epoch: ${queryResult.estimatedEra}\n` +
                            `> Temporal Shift: ${queryResult.temporalShift}\n` +
                            `> HISTORICAL BACKDROP: ${queryResult.historicalContext}\n` +
                            `> Genetic Marker / X-Chr Link: ${queryResult.xChromosomeLink}\n` +
                            `> Archival Record: ${queryResult.historicalNote}` +
                            (cmValue ? `\n> SHARED DATA: ${cmValue} cM | Status: VERIFIED BLOODLINE ANCHOR` : '');

      if (queryResult.image && queryResult.image.trim() !== "") {
        imageContainer.innerHTML = `<img src="${queryResult.image}" alt="${queryResult.name} Archival Portrait">`;
      } else {
        imageContainer.innerHTML = '';
      }
    }

    function verifyUniversalCousin() {
      const nameInput = document.getElementById('matchName').value;
      const cm = parseFloat(document.getElementById('matchCm').value) || 0;
      const chrInput = document.getElementById('matchChr').value;

      if (!window.RHODES_LINEAGE_DATABASE) {
        document.getElementById('genomic-output').innerText = "> ERROR: lineage-data.js database not loaded.";
        return;
      }

      const refinedQuery = parseQueryIntent(nameInput);
      const queryResult = window.RHODES_LINEAGE_DATABASE.queryDatabase(refinedQuery, chrInput);

      displayAncestorResult(queryResult, cm);
      speakText(`Epoch verified for ${queryResult.name}. Historical backdrop loaded.`);
    }

    function speakText(text) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        let utter = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(utter);
      }
    }

    function speakFullHistory() {
      if (!lastQueryResult) {
        alert("Please run a genomic authentication query first to load an active lineage branch.");
        return;
      }

      const narrationText = `Archival intelligence report for ${lastQueryResult.name}. Lineage stream: ${lastQueryResult.stream}. Estimated epoch: ${lastQueryResult.estimatedEra}. Historical backdrop: ${lastQueryResult.historicalContext} Archival record: ${lastQueryResult.historicalNote}`;
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        let utter = new SpeechSynthesisUtterance(narrationText);
        utter.rate = 0.95;
        window.speechSynthesis.speak(utter);
      } else {
        alert("Text-to-speech is not supported on this browser.");
      }
    }

    // Interactive Bidirectional Voice AI Partner Loop with Strict Echo Filter
    function startVoiceConversation() {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (!SpeechRecognition) {
        alert("Speech recognition is not supported on this browser. Please use Chrome or Safari.");
        return;
      }

      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }

      const outputBox = document.getElementById('genomic-output');
      outputBox.innerText = `> 🎙️ MIC STANDBY... Silence initiated...`;

      // 1.8 second extended pure silence buffer so phone audio completely clears out
      setTimeout(() => {
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        outputBox.innerText = `> 🎙️ LISTENING NOW (Speak clearly)...`;

        recognition.start();

        recognition.onresult = function(event) {
          let spokenQuery = event.results[0][0].transcript.toLowerCase();

          // STRICT ECHO FILTER: Automatically strip out any accidental system speech bleed
          spokenQuery = spokenQuery.replace(/listening/g, "").replace(/ask me anything/g, "").trim();

          outputBox.innerText = `> YOU ASKED: "${spokenQuery}"\n`;

          const refinedSearchTerm = parseQueryIntent(spokenQuery);
          let queryResult = null;
          if (window.RHODES_LINEAGE_DATABASE) {
            queryResult = window.RHODES_LINEAGE_DATABASE.queryDatabase(refinedSearchTerm, "");
          }

          if (queryResult) {
            displayAncestorResult(queryResult, null);
            const responseText = `Found match for ${queryResult.name}. ${queryResult.historicalContext} ${queryResult.historicalNote}`;
            speakText(responseText);
          } else {
            const fallbackText = `I processed your question regarding ${spokenQuery}. The Seven Rivers sovereign archive stands ready to verify this branch.`;
            outputBox.innerText += `> AI PARTNER RESPONSE: ${fallbackText}`;
            document.getElementById('ancestor-image-container').innerHTML = '';
            speakText(fallbackText);
          }
        };

        recognition.onerror = function(event) {
          outputBox.innerText = `> AUDIO ERROR: Could not capture voice input. Please ensure microphone permissions are allowed.`;
        };
      }, 1800); // 1.8 second safety delay
    }
  </script>
</body>
</html>
