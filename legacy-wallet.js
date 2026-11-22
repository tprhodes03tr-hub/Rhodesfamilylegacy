(function () {
  const WALLET_KEY = 'rhodes_legacy_wallet';
  const LEGACY_SAVE_KEY = 'rfl_legacy_save_v1';

  const DEFAULT_WALLET = {
    legacyScore: 342604,
    hubPoints: 61548,
    larimarOre: 10650,
    unlockedTiers: [],
    updatedAt: Date.now()
  };

  const TIERS = [
    { id: 'grid_overdrive', tier: 'Tier 1', name: 'Grid Overdrive', mode: 'spend', pts: 10000, ore: 0, desc: "Boosts Marcus Prime speed & handling in Detroit '313." },
    { id: 'sub_trench_sonar', tier: 'Tier 1', name: 'Sub-Trench Sonar & Hull Plate', mode: 'spend', pts: 20000, ore: 0, desc: 'Reinforces Wakan Sub & reveals hazards early.' },
    { id: 'vanguard_strike', tier: 'Tier 1', name: 'Vanguard Strike Perk', mode: 'spend', pts: 35000, ore: 0, desc: 'Combo boost in Apex Brawler & extra draw in Card Clash.' },
    { id: 'quisqueya_warp', tier: 'Tier 2', name: 'Quisqueya Warp Accelerator', mode: 'spend', pts: 60000, ore: 5000, desc: 'Faster Quisqueya Freight Dock convoys & higher Larimar Ore yield.' },
    { id: 'orbital_wing', tier: 'Tier 2', name: 'Orbital Interceptor Wing', mode: 'spend', pts: 75000, ore: 0, desc: 'Upgrades Fleet / Space Station SOS weapons & shields.' },
    { id: 'prime_synergy', tier: 'Tier 2', name: 'Prime Lineage Synergy', mode: 'spend', pts: 90000, ore: 0, desc: 'Squad bonuses for Sundiata Prime, Nénambi Prime, Xochitl & Kofi.' },
    { id: 'sovereign_cmd', tier: 'Tier 3', name: 'Sovereign Prime Command Protocol', mode: 'milestone', reqLegacy: 250000, desc: "High-difficulty modifiers & point multipliers for Mother Luetta's orders." },
    { id: 'magnum_breach', tier: 'Tier 3', name: 'Magnum Weaver Citadel Breach', mode: 'milestone', reqLegacy: 340000, desc: 'Unlocks endgame Citadel boss tiers & rare Codex rewards.' },
    { id: 'vanguard_overdrive', tier: 'Tier 4', name: 'Ancestral Vanguard Overdrive', mode: 'milestone', reqLegacy: 500000, desc: 'Top-tier loadouts, HUD prestige badges & endless runs.' }
  ];

  function readWallet() {
    try {
      const saved = JSON.parse(localStorage.getItem(WALLET_KEY) || 'null');
      if (saved) return { ...DEFAULT_WALLET, ...saved };

      const oldSave = JSON.parse(localStorage.getItem(LEGACY_SAVE_KEY) || 'null');
      const initial = {
        ...DEFAULT_WALLET,
        legacyScore: oldSave && oldSave.legacyScore ? Math.max(DEFAULT_WALLET.legacyScore, Number(oldSave.legacyScore)) : DEFAULT_WALLET.legacyScore,
        hubPoints: oldSave && oldSave.hubPoints ? Math.max(DEFAULT_WALLET.hubPoints, Number(oldSave.hubPoints)) : DEFAULT_WALLET.hubPoints
      };
      writeWallet(initial);
      return initial;
    } catch (_) {
      return { ...DEFAULT_WALLET };
    }
  }

  function writeWallet(w) {
    w.updatedAt = Date.now();
    try {
      localStorage.setItem(WALLET_KEY, JSON.stringify(w));
      const oldSave = JSON.parse(localStorage.getItem(LEGACY_SAVE_KEY) || '{}');
      oldSave.legacyScore = w.legacyScore;
      oldSave.hubPoints = w.hubPoints;
      localStorage.setItem(LEGACY_SAVE_KEY, JSON.stringify(oldSave));
    } catch (_) {}
    window.dispatchEvent(new CustomEvent('rflWalletUpdated', { detail: w }));
  }

  function syncMilestones(w) {
    let changed = false;
    TIERS.forEach((t) => {
      if (t.mode === 'milestone' && w.legacyScore >= t.reqLegacy && !w.unlockedTiers.includes(t.id)) {
        w.unlockedTiers.push(t.id);
        changed = true;
      }
    });
    if (changed) writeWallet(w);
  }

  function swapLoreText() {
    if (!document.body) return;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && /wakandan|vibranium/i.test(node.nodeValue)) {
        node.nodeValue = node.nodeValue
          .replace(/wakandan freight dock/gi, 'Quisqueya Freight Dock')
          .replace(/wakandan/gi, 'Quisqueya')
          .replace(/vibranium/gi, 'Larimar Ore');
      }
    }
  }

  function renderUI() {
    if (!document.body || document.getElementById('rfl-unified-wallet-ui')) return;
    const w = readWallet();
    syncMilestones(w);

    const wrap = document.createElement('div');
    wrap.id = 'rfl-unified-wallet-ui';
    wrap.innerHTML = `
      <button id="rfl-wallet-btn" style="position:fixed;bottom:14px;right:14px;z-index:99999;background:#0f172a;color:#fbbf24;border:1px solid #f59e0b;border-radius:999px;padding:10px 15px;font:700 13px/1 system-ui,sans-serif;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.55);">
        ⚡ Marrow Wallet & Tiers
      </button>
      <div id="rfl-wallet-panel" style="display:none;position:fixed;inset:14px;max-width:520px;max-height:84vh;overflow:auto;margin:auto;z-index:100000;background:#090d16;color:#f8fafc;border:1px solid #f59e0b;border-radius:14px;padding:16px;font-family:system-ui,sans-serif;box-shadow:0 16px 48px rgba(0,0,0,.85);">
        <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #1e293b;padding-bottom:10px;margin-bottom:12px;">
          <div>
            <div style="font-size:10px;letter-spacing:1px;color:#fbbf24;text-transform:uppercase;">Rhodes Family Legacy • Unified Vault</div>
            <div style="font-size:17px;font-weight:800;">Marrow Points & Nexus Tiers</div>
          </div>
          <button id="rfl-wallet-close" style="background:#1e293b;color:#fff;border:0;border-radius:8px;padding:6px 10px;font-weight:700;cursor:pointer;">✕</button>
        </div>
        <div id="rfl-wallet-stats" style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;text-align:center;"></div>
        <div id="rfl-wallet-tiers"></div>
      </div>
    `;
    document.body.appendChild(wrap);

    const btn = document.getElementById('rfl-wallet-btn');
    const panel = document.getElementById('rfl-wallet-panel');
    const closeBtn = document.getElementById('rfl-wallet-close');

    function drawPanel() {
      const cur = readWallet();
      syncMilestones(cur);
      document.getElementById('rfl-wallet-stats').innerHTML = `
        <div style="background:#111827;padding:8px;border-radius:8px;border:1px solid #1f2937;"><div style="font-size:10px;color:#94a3b8;">LEGACY SCORE</div><div style="font-weight:800;color:#38bdf8;">${cur.legacyScore.toLocaleString()}</div></div>
        <div style="background:#111827;padding:8px;border-radius:8px;border:1px solid #1f2937;"><div style="font-size:10px;color:#94a3b8;">MARROW PTS</div><div style="font-weight:800;color:#fbbf24;">${cur.hubPoints.toLocaleString()}</div></div>
        <div style="background:#111827;padding:8px;border-radius:8px;border:1px solid #1f2937;"><div style="font-size:10px;color:#94a3b8;">LARIMAR ORE</div><div style="font-weight:800;color:#34d399;">${cur.larimarOre.toLocaleString()}T</div></div>
      `;

      document.getElementById('rfl-wallet-tiers').innerHTML = TIERS.map((t) => {
        const isUnlocked = cur.unlockedTiers.includes(t.id);
        const action = isUnlocked
          ? `<span style="background:#065f46;color:#6ee7b7;padding:4px 8px;border-radius:6px;font-size:11px;font-weight:700;">UNLOCKED</span>`
          : t.mode === 'milestone'
            ? `<span style="background:#1e293b;color:#94a3b8;padding:4px 8px;border-radius:6px;font-size:11px;">${t.reqLegacy.toLocaleString()} Legacy</span>`
            : `<button data-tid="${t.id}" style="background:#d97706;color:#fff;border:0;border-radius:6px;padding:6px 10px;font-size:11px;font-weight:700;cursor:pointer;">${t.pts.toLocaleString()} PTS${t.ore ? ` + ${t.ore.toLocaleString()}T` : ''}</button>`;
        return `
          <div style="background:#111827;border:1px solid ${isUnlocked ? '#10b981' : '#1e293b'};border-radius:10px;padding:10px;margin-bottom:8px;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;">
              <div><div style="font-size:10px;color:#fbbf24;font-weight:700;">${t.tier}</div><div style="font-weight:700;font-size:14px;">${t.name}</div></div>
              <div>${action}</div>
            </div>
            <div style="font-size:12px;color:#cbd5e1;margin-top:4px;">${t.desc}</div>
          </div>
        `;
      }).join('');

      panel.querySelectorAll('[data-tid]').forEach((b) => {
        b.onclick = () => {
          const tierObj = TIERS.find((x) => x.id === b.getAttribute('data-tid'));
          const latest = readWallet();
          if (!tierObj) return;
          if (latest.hubPoints < tierObj.pts || latest.larimarOre < tierObj.ore) {
            alert('Not enough Marrow Points or Larimar Ore yet.');
            return;
          }
          latest.hubPoints -= tierObj.pts;
          latest.larimarOre -= tierObj.ore;
          if (!latest.unlockedTiers.includes(tierObj.id)) latest.unlockedTiers.push(tierObj.id);
          writeWallet(latest);
          drawPanel();
        };
      });
    }

    btn.onclick = () => {
      panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
      if (panel.style.display === 'block') drawPanel();
    };
    closeBtn.onclick = () => { panel.style.display = 'none'; };
  }

  window.LegacyWallet = {
    get: readWallet,
    addPoints: (pts, ore = 0) => {
      const w = readWallet();
      w.legacyScore += Number(pts) || 0;
      w.hubPoints += Number(pts) || 0;
      w.larimarOre += Number(ore) || 0;
      writeWallet(w);
      return w;
    },
    hasTier: (id) => readWallet().unlockedTiers.includes(id)
  };

  window.addEventListener('DOMContentLoaded', () => {
    swapLoreText();
    renderUI();
  });
})();
