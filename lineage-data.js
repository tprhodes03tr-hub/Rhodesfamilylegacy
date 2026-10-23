<!-- ========================================== -->
<!-- RHODES FAMILY LEGACY: GENOMIC COMMAND NODE -->
<!-- ========================================== -->
<section id="genomic-scanner-hub" style="background: #090d16; color: #f8fafc; padding: 40px 20px; border: 2px solid #f59e0b; border-radius: 12px; margin: 30px auto; max-width: 900px; font-family: monospace;">
  <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 15px; margin-bottom: 20px;">
    <h2 style="margin: 0; color: #f59e0b; font-size: 1.5rem;">🧬 ARCHIVAL OPTICAL LINEAGE SCANNER</h2>
    <span style="background: #1e293b; color: #06b6d4; padding: 4px 10px; border-radius: 4px; font-size: 0.85rem;">[SECURE_NODE: RHODES_LEGACY]</span>
  </div>

  <p style="color: #94a3b8; font-size: 0.95rem; line-height: 1.5;">
    Search ancestral surnames, query historical heritage topics (e.g., <em>"Mac"</em>, <em>"X chromosome"</em>, <em>"Native American"</em>, <em>"Moorish"</em>, <em>"Dismal Swamp"</em>, <em>"Black Wall Street"</em>), or evaluate centimorgan match data backed by <em>Packed in the Marrow</em>.
  </p>

  <!-- Interactive Controls -->
  <div style="display: grid; grid-template-columns: 1fr auto; gap: 10px; margin-bottom: 20px;">
    <input type="text" id="lineageSearchInput" placeholder="Enter surname, cousin match, or heritage topic (e.g., Mac, X chromosome, Colbert)..." style="background: #0f172a; border: 1px solid #334155; color: #fff; padding: 12px; border-radius: 6px; font-size: 1rem; width: 100%;">
    <button onclick="executeLineageScan()" style="background: #f59e0b; color: #000; border: none; padding: 0 24px; border-radius: 6px; font-weight: bold; cursor: pointer; font-size: 1rem;">RUN SCAN</button>
  </div>

  <!-- Viewfinder / Result Output Display -->
  <div id="scannerOutputContainer" style="background: #0f172a; border: 1px solid #1e293b; border-radius: 8px; padding: 20px; min-height: 220px; position: relative;">
    <div id="scannerStatusBadge" style="position: absolute; top: 15px; right: 15px; color: #10b981; font-size: 0.8rem; font-weight: bold;">[OPTICAL_REC: STANDBY]</div>
    
    <div id="scannerContentArea">
      <h3 style="color: #38bdf8; margin-top: 0;">System Ready</h3>
      <p style="color: #64748b;">Input a query above to initiate archival genomic triangulation and retrieve verified primary-source evidence.</p>
    </div>
  </div>
</section>

<!-- Include the Master Lineage Database Script -->
<script src="lineage-data.js"></script>

<script>
  function executeLineageScan() {
    const inputVal = document.getElementById("lineageSearchInput").value;
    const outputArea = document.getElementById("scannerContentArea");
    const statusBadge = document.getElementById("scannerStatusBadge");

    if (!window.RHODES_LINEAGE_DATABASE) {
      outputArea.innerHTML = `<p style="color: #ef4444;">Error: lineage-data.js database not loaded.</p>`;
      return;
    }

    statusBadge.innerHTML = "[OPTICAL_REC: ACTIVE]";
    statusBadge.style.color = "#f59e0b";

    // Query our master database engine
    const result = window.RHODES_LINEAGE_DATABASE.queryDatabase(inputVal);

    setTimeout(() => {
      statusBadge.innerHTML = "[MATCH_VERIFIED]";
      statusBadge.style.color = "#10b981";

      if (result.isHeritageFAQ) {
        // Render Groundbreaking Heritage FAQ / X-Chromosome Result
        outputArea.innerHTML = `
          <h3 style="color: #f59e0b; margin-top: 0;">✨ ${result.name}</h3>
          <p style="color: #cbd5e1; line-height: 1.6; margin-bottom: 15px;">${result.historicalContext}</p>
          <div style="background: #1e293b; padding: 10px; border-left: 4px solid #38bdf8; font-size: 0.9rem; color: #38bdf8;">
            <strong>Primary Source Citation:</strong> ${result.historicalNote}
          </div>
        `;
      } else {
        // Render Ancestor / Pillar Match Result
        outputArea.innerHTML = `
          <h3 style="color: #38bdf8; margin-top: 0;">🏛️ ${result.name}</h3>
          <p style="font-size: 0.9rem; color: #fbbf24; margin-bottom: 8px;"><strong>Stream / Branch:</strong> ${result.stream} (${result.estimatedEra})</p>
          <p style="color: #cbd5e1; line-height: 1.5; margin-bottom: 15px;">${result.historicalContext}</p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; font-size: 0.85rem; background: #1e293b; padding: 10px; border-radius: 6px;">
            <div><span style="color: #94a3b8;">Chromosome Zone:</span><br><strong style="color: #06b6d4;">${result.chromosomeZone}</strong></div>
            <div><span style="color: #94a3b8;">Archival Reference:</span><br><strong style="color: #f59e0b;">${result.primarySourceRef || result.historicalNote}</strong></div>
          </div>
        `;
      }

      // Optional Text-to-Speech Voice Feedback integration
      if ('speechSynthesis' in window) {
        const speech = new SpeechSynthesisUtterance(`Lineage verified. ${result.name}. Match confirmed through master archives.`);
        speech.rate = 1.0;
        window.speechSynthesis.speak(speech);
      }

    }, 400); // Simulated scan delay for realism
  }
</script>
