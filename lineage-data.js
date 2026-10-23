<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rhodes Family Legacy — Genomic Command & Archival Node</title>
    <style>
        :root {
            --bg-deep: #0a0c10;
            --panel-bg: #121620;
            --accent-gold: #d4af37;
            --accent-blue: #3b82f6;
            --text-main: #e2e8f0;
            --text-dim: #94a3b8;
            --border-glow: rgba(212, 175, 55, 0.3);
        }
        body {
            background-color: var(--bg-deep);
            color: var(--text-main);
            font-family: system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .container {
            max-width: 800px;
            width: 100%;
            background: var(--panel-bg);
            border: 1px solid var(--border-glow);
            border-radius: 12px;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        h1 {
            color: var(--accent-gold);
            text-align: center;
            font-size: 1.8rem;
            margin-bottom: 8px;
        }
        .subtitle {
            text-align: center;
            color: var(--text-dim);
            font-size: 0.95rem;
            margin-bottom: 24px;
        }
        .scanner-box {
            background: #05070a;
            border: 2px dashed var(--accent-gold);
            border-radius: 8px;
            padding: 20px;
            text-align: center;
            margin-bottom: 20px;
        }
        input[type="text"] {
            width: 80%;
            padding: 12px;
            background: #1a2230;
            border: 1px solid var(--border-glow);
            color: #fff;
            border-radius: 6px;
            font-size: 1rem;
            margin-bottom: 12px;
        }
        button {
            background: var(--accent-gold);
            color: #000;
            font-weight: bold;
            padding: 12px 24px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: opacity 0.2s;
        }
        button:hover {
            opacity: 0.9;
        }
        .result-panel {
            background: #1a2230;
            border-left: 4px solid var(--accent-blue);
            padding: 16px;
            border-radius: 6px;
            margin-top: 20px;
            display: none;
        }
        .result-panel h3 {
            color: var(--accent-blue);
            margin-top: 0;
        }
        .portrait-frame {
            max-width: 100%;
            height: auto;
            border-radius: 6px;
            margin-top: 12px;
            border: 1px solid var(--border-glow);
            display: none;
        }
        .telemetry {
            margin-top: 20px;
            font-size: 0.85rem;
            color: var(--text-dim);
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Rhodes Family Legacy</h1>
        <div class="subtitle">Apex Archival, Genomic Intelligence & Optical Lineage Scanner</div>

        <div class="scanner-box">
            <p>Enter surname, ancestor keyword (e.g., <em>"fox"</em>, <em>"wright"</em>, <em>"thomas"</em>, <em>"sims"</em>, <em>"haplogroup"</em>), or trigger optical scan:</p>
            <input type="text" id="lineageQuery" placeholder="Search lineage database...">
            <br>
            <button onclick="executeLineageScan()">Execute Lineage Scan</button>
        </div>

        <div id="resultPanel" class="result-panel">
            <h3 id="resName"></h3>
            <p><strong>Stream:</strong> <span id="resStream"></span></p>
            <p><strong>Estimated Era:</strong> <span id="resEra"></span></p>
            <p><strong>Historical Context:</strong> <span id="resContext"></span></p>
            <p><strong>Assigned Chromosome Zones:</strong> <span id="resChr"></span></p>
            <p><em>Archival Note:</em> <span id="resNote"></span></p>
            <img id="resPortrait" class="portrait-frame" src="" alt="Archival Portrait">
        </div>

        <div class="telemetry">
            System Telemetry: Database v2026.10 Active | PWA Ready
        </div>
    </div>

    <!-- Externalized Lineage Database Script Integration -->
    <script src="lineage-data.js"></script>
    <script>
        // Track local site visits
        let visits = parseInt(localStorage.getItem('rhodes_total_visits') || '0') + 1;
        localStorage.setItem('rhodes_total_visits', visits);

        function executeLineageScan() {
            const query = document.getElementById('lineageQuery').value;
            const data = window.RHODES_LINEAGE_DATABASE.queryDatabase(query);

            document.getElementById('resName').innerText = data.name;
            document.getElementById('resStream').innerText = data.stream;
            document.getElementById('resEra').innerText = data.estimatedEra;
            document.getElementById('resContext').innerText = data.historicalContext;
            document.getElementById('resChr').innerText = data.chromosomeZone;
            document.getElementById('resNote').innerText = data.historicalNote || data.primarySourceRef;

            const portrait = document.getElementById('resPortrait');
            if (data.image && data.image.trim() !== "") {
                portrait.src = data.image;
                portrait.style.display = "block";
            } else {
                portrait.style.display = "none";
            }

            document.getElementById('resultPanel').style.display = "block";
        }
    </script>
</body>
</html>
