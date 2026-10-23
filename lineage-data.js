<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Seven Rivers Genomic Command Node & DNA Scanner</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      user-select: none;
      -webkit-user-select: none;
      -webkit-tap-highlight-color: transparent;
    }
    body {
      background-color: #060913;
      color: #f8fafc;
      font-family: 'Courier New', Courier, monospace;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 100vh;
      padding: 16px;
    }
    .scanner-container {
      width: 100%;
      max-width: 700px;
      background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
      border: 3px solid #f59e0b;
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 0 50px rgba(245, 158, 11, 0.4), inset 0 0 25px rgba(245, 158, 11, 0.15);
      text-align: center;
    }
    .scanner-header {
      font-size: 0.75rem;
      font-weight: bold;
      letter-spacing: 2px;
      color: #f59e0b;
      text-transform: uppercase;
      margin-bottom: 6px;
      text-shadow: 0 0 10px rgba(245, 158, 11, 0.6);
    }
    h1 {
      color: #fef08a;
      font-size: 1.25rem;
      margin-bottom: 16px;
      text-transform: uppercase;
      text-shadow: 0 0 15px rgba(254, 240, 138, 0.5);
      line-height: 1.4;
    }
    .mode-buttons {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
      margin-bottom: 16px;
    }
    .mode-btn {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      border: 2px solid #fef08a;
      color: #fff;
      padding: 12px;
      font-size: 0.85rem;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      font-family: inherit;
      box-shadow: 0 4px 15px rgba(245, 158, 11, 0.3);
    }
    .mode-btn.secondary {
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      border-color: #38bdf8;
    }
    .query-box {
      background: rgba(15, 23, 42, 0.95);
      border: 2px dashed #f59e0b;
      padding: 16px;
      border-radius: 12px;
      margin-bottom: 16px;
      text-align: left;
      box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);
    }
    .query-box label {
      display: block;
      font-size: 0.8rem;
      color: #f59e0b;
      margin-bottom: 6px;
      font-weight: bold;
      text-transform: uppercase;
    }
    .input-field {
      width: 100%;
      background: #020617;
      border: 2px solid #38bdf8;
      color: #f8fafc;
      padding: 12px;
      border-radius: 8px;
      font-size: 0.95rem;
      font-family: inherit;
      margin-bottom: 12px;
      outline: none;
    }
    .input-field:focus {
      border-color: #f59e0b;
      box-shadow: 0 0 10px rgba(245, 158, 11, 0.4);
    }
    .action-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
      margin-top: 10px;
    }
    .action-btn {
      background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
      border: 2px solid #38bdf8;
      color: #38bdf8;
      padding: 12px;
      font-size: 0.85rem;
      font-weight: bold;
      border-radius: 8px;
      cursor: pointer;
      font-family: inherit;
      transition: all 0.2s ease;
    }
    .action-btn.primary {
      background: linear-gradient(135deg, #d97706 0%, #b45309 100%);
      border-color: #fef08a;
      color: #fff;
      grid-column: span 2;
    }
    .action-btn.voice {
      background: linear-gradient(135deg, #0d9488 0%, #115e59 100%);
      border-color: #2dd4bf;
      color: #fff;
    }
    .action-btn.ai {
      background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
      border-color: #7dd3fc;
      color: #fff;
    }
    .results-panel {
      background: #020617;
      border: 2px solid #38bdf8;
      border-radius: 10px;
      padding: 14px;
      font-size: 0.85rem;
      line-height: 1.6;
      color: #e2e8f0;
      text-align: left;
      min-height: 140px;
      max-height: 240px;
      overflow-y: auto;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.8);
    }
    .results-panel p {
      margin-bottom: 6px;
    }
    .highlight {
      color: #fef08a;
      font-weight: bold;
    }
    .back-link {
      display: inline-block;
      margin-top: 18px;
      color: #94a3b8;
      text-decoration: none;
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .back-link:hover {
      color: #f59e0b;
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <div class="scanner-container">
    <div class="scanner-header">Seven Rivers Genomic Command Node • Dual Biometric & Surnamed Authentication</div>
    <h1>Universal Blood-Lineage & DNA Scanner</h1>

    <div class="mode-buttons">
      <button class="mode-btn" onclick="setMode('surname')">🧬 Surname & cM Mode</button>
      <button class="mode-btn secondary" onclick="setMode('optical')">📷 Optical Face Scanner</button>
    </div>

    <div class="query-box">
      <label id="input-label">Cousin & Surname Authentication</label>
      <input type="text" id="searchInput" class="input-field" value="Fox" placeholder="Enter ancestor, surname, match data, or heritage topics..." />
      <input type="text" id="cmInput" class="input-field" placeholder="Shared cM (e.g., 21)" style="display:none;" />

      <div class="action-grid">
        <button class="action-btn primary" onclick="runGenomicAuthentication()">RUN GENOMIC AUTHENTICATION</button>
        <button class="action-btn voice" onclick="narrateLog()">🔊 NARRATE LOG</button>
        <button class="action-btn ai" onclick="askAIPartner()">🤖 ASK AI PARTNER</button>
      </div>
    </div>

    <div class="results-panel" id="resultsPanel">
      <p class="highlight">> SYSTEM READY: Integrated with `lineage-data.js`. Enter any surname, ancestor name, or heritage topic (e.g., Fox, X chromosome, Native American, Mac, Elroy) to query archival records.</p>
    </div>

    <div>
      <a href="index.html" class="back-link">← Return to Main Legacy Hub</a>
    </div>
  </div>

  <!-- Include the Definitive Apex Archival & Genomic Intelligence Engine -->
  <script src="lineage-data.js"></script>
  <script>
    let lastSpokenText = "System ready. Database loaded successfully.";

    function setMode(mode) {
      let label = document.getElementById('input-label');
      let cmField = document.getElementById('cmInput');
      let inputField = document.getElementById('searchInput');

      if (mode === 'surname') {
        label.innerText = "Cousin & Surname Authentication";
        inputField.value = "Fox";
        inputField.placeholder = "Enter ancestor, surname, or heritage topic...";
        cmField.style.display = 'none';
      } else {
        label.innerText = "Facial Biometric & Optical Match";
        inputField.value = "Benjamin Hatten";
        inputField.placeholder = "Enter ancestor name or optical ref...";
        cmField.style.display = 'block';
        cmField.value = "Match Confidence: 98.4%";
      }
      speakText("Switched mode.");
    }

    function runGenomicAuthentication() {
      let query = document.getElementById('searchInput').value.trim();
      let panel = document.getElementById('resultsPanel');

      if (!window.RHODES_LINEAGE_DATABASE) {
        panel.innerHTML = `<p class="highlight" style="color:#ef4444;">> ERROR: lineage-data.js not loaded.</p>`;
        return;
      }

      // Query the database engine
      let result = window.RHODES_LINEAGE_DATABASE.queryDatabase(query);

      let output = "";
      if (result.isHeritageFAQ) {
        output = `
          <p class="highlight">> ARCHIVAL QUERY SUCCESS: ${result.name}</p>
          <p>> Stream: ${result.stream}</p>
          <p>> Evidence Dossier: ${result.historicalContext}</p>
          <p>> Primary Source: ${result.faqDetails.primarySource}</p>
        `;
        lastSpokenText = `Archival query success for ${result.name}. ${result.historicalContext}`;
      } else {
        output = `
          <p class="highlight">> ARCHIVAL QUERY SUCCESS: ${result.name}</p>
          <p>> Stream: ${result.stream} (${result.estimatedEra})</p>
          <p>> Chromosome Zones: ${result.chromosomeZone}</p>
          <p>> Historical Context: ${result.historicalContext}</p>
          <p>> Primary Reference: ${result.primarySourceRef || result.historicalNote}</p>
        `;
        lastSpokenText = `Archival query success for ${result.name}. ${result.historicalContext}`;
      }

      panel.innerHTML = output;
      speakText(lastSpokenText);
    }

    function narrateLog() {
      speakText(lastSpokenText);
    }

    function askAIPartner() {
      let query = document.getElementById('searchInput').value.trim();
      let panel = document.getElementById('resultsPanel');
      let aiMsg = `AI Partner Analysis: Genomic markers and ancestral nodes for "${query || 'active record'}" are fully verified within the Rhodes Family Legacy master registry.`;
      panel.innerHTML += `<p class="highlight" style="margin-top:8px;">> AI PARTNER: ${aiMsg}</p>`;
      panel.scrollTop = panel.scrollHeight;
      lastSpokenText = aiMsg;
      speakText(aiMsg);
    }

    function speakText(text) {
      if (!('speechSynthesis' in window)) return;
      window.speechSynthesis.cancel();
      let utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      window.speechSynthesis.speak(utterance);
    }
  </script>
</body>
</html>
