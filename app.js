// ─── Keyboard layout data ────────────────────────────────────────────────────
const KB_SECTIONS = [
  {
    name: "function",
    cols: "56px repeat(4,46px) 14px repeat(4,46px) 14px repeat(4,46px) 14px repeat(3,46px)",
    rows: [[
      { code: "Escape", label: "Esc" },
      { code: "F1", label: "F1" }, { code: "F2", label: "F2" },
      { code: "F3", label: "F3" }, { code: "F4", label: "F4" },
      { spacer: true },
      { code: "F5", label: "F5" }, { code: "F6", label: "F6" },
      { code: "F7", label: "F7" }, { code: "F8", label: "F8" },
      { spacer: true },
      { code: "F9", label: "F9" }, { code: "F10", label: "F10" },
      { code: "F11", label: "F11" }, { code: "F12", label: "F12" },
      { spacer: true },
      { code: "PrintScreen", label: "PrtSc" },
      { code: "ScrollLock", label: "ScrLk" },
      { code: "Pause", label: "Pause" }
    ]]
  },
  {
    name: "main",
    cols: "repeat(14,46px) 72px 14px repeat(3,46px) 14px repeat(4,46px)",
    rows: [
      [
        { code: "Backquote", label: "` ~" },
        { code: "Digit1", label: "1 !" }, { code: "Digit2", label: "2 @" },
        { code: "Digit3", label: "3 #" }, { code: "Digit4", label: "4 $" },
        { code: "Digit5", label: "5 %" }, { code: "Digit6", label: "6 ^" },
        { code: "Digit7", label: "7 &" }, { code: "Digit8", label: "8 *" },
        { code: "Digit9", label: "9 (" }, { code: "Digit0", label: "0 )" },
        { code: "Minus", label: "- _" }, { code: "Equal", label: "= +" },
        { code: "Backspace", label: "Backspace", colSpan: 2 },
        { spacer: true },
        { code: "Insert", label: "Ins" }, { code: "Home", label: "Home" },
        { code: "PageUp", label: "PgUp" },
        { spacer: true },
        { code: "NumLock", label: "Num" },
        { code: "NumpadDivide", label: "/" },
        { code: "NumpadMultiply", label: "×" },
        { code: "NumpadSubtract", label: "−" }
      ],
      [
        { code: "Tab", label: "Tab", colSpan: 2 },
        { code: "KeyQ", label: "Q" }, { code: "KeyW", label: "W" },
        { code: "KeyE", label: "E" }, { code: "KeyR", label: "R" },
        { code: "KeyT", label: "T" }, { code: "KeyY", label: "Y" },
        { code: "KeyU", label: "U" }, { code: "KeyI", label: "I" },
        { code: "KeyO", label: "O" }, { code: "KeyP", label: "P" },
        { code: "BracketLeft", label: "[ {" },
        { code: "BracketRight", label: "] }" },
        { code: "Backslash", label: "\\ |" },
        { spacer: true },
        { code: "Delete", label: "Del" }, { code: "End", label: "End" },
        { code: "PageDown", label: "PgDn" },
        { spacer: true },
        { code: "Numpad7", label: "7" }, { code: "Numpad8", label: "8" },
        { code: "Numpad9", label: "9" },
        { code: "NumpadAdd", label: "+", rowSpan: 2 }
      ],
      [
        { code: "CapsLock", label: "Caps", colSpan: 2 },
        { code: "KeyA", label: "A" }, { code: "KeyS", label: "S" },
        { code: "KeyD", label: "D" }, { code: "KeyF", label: "F" },
        { code: "KeyG", label: "G" }, { code: "KeyH", label: "H" },
        { code: "KeyJ", label: "J" }, { code: "KeyK", label: "K" },
        { code: "KeyL", label: "L" },
        { code: "Semicolon", label: "; :" }, { code: "Quote", label: "' \"" },
        { code: "Enter", label: "Enter", colSpan: 2 },
        { spacer: true, colSpan: 5 },
        { code: "Numpad4", label: "4" }, { code: "Numpad5", label: "5" },
        { code: "Numpad6", label: "6" }
      ],
      [
        { code: "ShiftLeft", label: "Shift", colSpan: 3 },
        { code: "KeyZ", label: "Z" }, { code: "KeyX", label: "X" },
        { code: "KeyC", label: "C" }, { code: "KeyV", label: "V" },
        { code: "KeyB", label: "B" }, { code: "KeyN", label: "N" },
        { code: "KeyM", label: "M" },
        { code: "Comma", label: ", <" }, { code: "Period", label: ". >" },
        { code: "Slash", label: "/ ?" },
        { code: "ShiftRight", label: "Shift", colSpan: 2 },
        { spacer: true, colSpan: 2 },
        { code: "ArrowUp", label: "↑" },
        { spacer: true, colSpan: 2 },
        { code: "Numpad1", label: "1" }, { code: "Numpad2", label: "2" },
        { code: "Numpad3", label: "3" },
        { code: "NumpadEnter", label: "↵", rowSpan: 2 }
      ],
      [
        { code: "ControlLeft", label: "Ctrl" },
        { code: "MetaLeft", label: "Win" },
        { code: "AltLeft", label: "Alt" },
        { code: "Space", label: "Space", colSpan: 6 },
        { code: "AltRight", label: "Alt" },
        { code: "MetaRight", label: "Win" },
        { code: "ContextMenu", label: "Menu" },
        { code: "ControlRight", label: "Ctrl" },
        { spacer: true, colSpan: 3 },
        { code: "ArrowLeft", label: "←" },
        { code: "ArrowDown", label: "↓" },
        { code: "ArrowRight", label: "→" },
        { spacer: true },
        { code: "Numpad0", label: "0", colSpan: 2 },
        { code: "NumpadDecimal", label: "." }
      ]
    ]
  }
];

// ─── Sound Synthesizer ────────────────────────────────────────────────────────
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx = null;
let soundEnabled = true;

function playKeySound(pitchOffset = 0) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(320 + pitchOffset, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(70 + pitchOffset, audioCtx.currentTime + 0.04);

    gain.gain.setValueAtTime(0.12, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.045);
  } catch (e) {
    // Web audio API not available or blocked
  }
}

// ─── State ───────────────────────────────────────────────────────────────────
const keyPressCounts = {};
const keysDown = new Set();
let mouseCounts = { left: 0, middle: 0, right: 0 };
let totalKeyCount = 0;
let actionsInWindow = 0;   // for APM
let clicksInSecond = 0;   // for CPS
let isLogEmpty = true;
const MAX_HISTORY = 50;
const MAX_LOG_ROWS = 200;

// ─── DOM refs ─────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const kbContainer = $("keyboard-container");
const historyFlow = $("history-flow");
const logBody = $("log-body");
const statApm = $("stat-apm");
const statCps = $("stat-cps");
const statTotalKeys = $("stat-total-keys");
const statLastInput = $("stat-last-input");
const btnSound = $("btn-sound");
const soundIcon = $("sound-icon");
const btnCopyLog = $("btn-copy-log");

// ─── Sound Toggle ─────────────────────────────────────────────────────────────
if (btnSound) {
  btnSound.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    soundIcon.textContent = soundEnabled ? "🔊" : "🔇";
    btnSound.childNodes[1].nodeValue = ` Sound: ${soundEnabled ? "ON" : "OFF"}`;
    if (soundEnabled) playKeySound(100);
  });
}

// ─── Keyboard rendering ───────────────────────────────────────────────────────
function buildKeyboard() {
  kbContainer.innerHTML = "";
  KB_SECTIONS.forEach(section => {
    section.rows.forEach(row => {
      const rowEl = document.createElement("div");
      rowEl.className = "kb-row";
      rowEl.style.gridTemplateColumns = section.cols;
      row.forEach(k => rowEl.appendChild(buildKey(k)));
      kbContainer.appendChild(rowEl);
    });
  });
}

function buildKey(k) {
  if (k.spacer) {
    const s = document.createElement("div");
    s.style.gridColumn = `span ${k.colSpan || 1}`;
    s.style.gridRow = `span ${k.rowSpan || 1}`;
    return s;
  }
  const el = document.createElement("div");
  el.id = `key-${k.code}`;
  el.className = "key";
  el.style.gridColumn = `span ${k.colSpan || 1}`;
  el.style.gridRow = `span ${k.rowSpan || 1}`;

  const lbl = document.createElement("span");
  lbl.className = "key-label";
  lbl.textContent = k.label;

  const cnt = document.createElement("span");
  cnt.className = "key-count";
  cnt.textContent = "";

  el.append(lbl, cnt);
  return el;
}

function refreshKeyCounter(code) {
  const el = document.getElementById(`key-${code}`);
  if (!el) return;
  const n = keyPressCounts[code] || 0;
  const cnt = el.querySelector(".key-count");
  if (cnt) {
    cnt.textContent = n || "";
    cnt.classList.toggle("has-count", n > 0);
  }
  if (n > 0) {
    el.classList.add("tested");
  }
}

// ─── Key display helper ───────────────────────────────────────────────────────
function displayKey(event) {
  if (event.code?.startsWith("Numpad")) return event.code.replace("Numpad", "Num ");
  if (event.key === " ") return "Space";
  if (event.key && event.key !== "Unidentified") return event.key;
  return event.code || "?";
}

// ─── Keystroke history ────────────────────────────────────────────────────────
function addToHistory(label) {
  const placeholder = historyFlow.querySelector(".history-placeholder");
  if (placeholder) placeholder.remove();

  const badge = document.createElement("span");
  badge.className = "key-badge";
  badge.textContent = label;
  historyFlow.insertBefore(badge, historyFlow.firstChild);

  while (historyFlow.children.length > MAX_HISTORY) {
    historyFlow.removeChild(historyFlow.lastChild);
  }
}

// ─── Telemetry log ────────────────────────────────────────────────────────────
function addLog(type, code, key, status) {
  if (isLogEmpty) {
    logBody.innerHTML = "";
    isLogEmpty = false;
  }

  const isDown = type === "KEYDOWN";
  const isMouse = type.startsWith("MOUSE");
  const tagCls = isDown ? "tag-down" : isMouse ? "tag-mouse" : "tag-up";
  const staCls = status === "CAPTURED" ? "tag-ok" : "tag-rel";

  const row = document.createElement("div");
  row.className = "log-row";
  row.innerHTML = `
    <div style="color:var(--muted);font-family:'JetBrains Mono',monospace;">${new Date().toLocaleTimeString()}</div>
    <div><span class="tag-pill ${tagCls}">${type}</span></div>
    <div class="code-chip">${code || "—"}</div>
    <div><span class="key-display">${key || "—"}</span></div>
    <div><span class="tag-pill ${staCls}">${status}</span></div>
  `;
  logBody.insertBefore(row, logBody.firstChild);

  while (logBody.children.length > MAX_LOG_ROWS) {
    logBody.removeChild(logBody.lastChild);
  }
}

// ─── Copy Log to Clipboard ────────────────────────────────────────────────────
if (btnCopyLog) {
  btnCopyLog.addEventListener("click", () => {
    const rows = Array.from(logBody.querySelectorAll(".log-row")).map(row => {
      const cols = Array.from(row.children).map(c => c.textContent.trim());
      return cols.join(" | ");
    }).join("\n");

    if (!rows) return;
    navigator.clipboard.writeText(rows).then(() => {
      const originalText = btnCopyLog.textContent;
      btnCopyLog.textContent = "✓ Copied!";
      setTimeout(() => btnCopyLog.textContent = originalText, 2000);
    }).catch(() => { });
  });
}

// ─── Reset ────────────────────────────────────────────────────────────────────
function reset() {
  Object.keys(keyPressCounts).forEach(k => { keyPressCounts[k] = 0; });
  keysDown.clear();
  mouseCounts = { left: 0, middle: 0, right: 0 };
  totalKeyCount = 0;
  actionsInWindow = 0;
  clicksInSecond = 0;
  isLogEmpty = true;

  statApm.textContent = "0";
  statCps.textContent = "0";
  statTotalKeys.textContent = "0";
  statLastInput.textContent = "—";
  $("count-m-left").textContent = "0";
  $("count-m-middle").textContent = "0";
  $("count-m-right").textContent = "0";

  historyFlow.innerHTML = '<span class="history-placeholder">Press any key or mouse button to stream input…</span>';
  logBody.innerHTML = '<div class="log-empty">— Awaiting input events —</div>';

  buildKeyboard();
}

// ─── Keys to intercept ────────────────────────────────────────────────────────
const PREVENT_DEFAULT = new Set([
  "Space", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Tab", "Backspace", "F5"
]);

// ─── Keyboard events ──────────────────────────────────────────────────────────
window.addEventListener("keydown", e => {
  if (PREVENT_DEFAULT.has(e.code)) e.preventDefault();

  const dk = displayKey(e);
  statLastInput.textContent = dk;

  if (!keysDown.has(e.code)) {
    keysDown.add(e.code);
    keyPressCounts[e.code] = (keyPressCounts[e.code] || 0) + 1;
    totalKeyCount++;
    actionsInWindow++;
    statTotalKeys.textContent = totalKeyCount;
    addToHistory(dk);
    refreshKeyCounter(e.code);
    playKeySound(0);
  }

  const el = document.getElementById(`key-${e.code}`);
  if (el) el.classList.add("active");

  addLog("KEYDOWN", e.code, dk, "CAPTURED");
});

window.addEventListener("keyup", e => {
  if (PREVENT_DEFAULT.has(e.code)) e.preventDefault();
  keysDown.delete(e.code);
  const el = document.getElementById(`key-${e.code}`);
  if (el) el.classList.remove("active");
  addLog("KEYUP", e.code, displayKey(e), "RELEASED");
});

// ─── Mouse events ─────────────────────────────────────────────────────────────
const MOUSE_MAP = {
  0: { key: "left", el: "mouse-left", countEl: "count-m-left", label: "LMB" },
  1: { key: "middle", el: "mouse-middle", countEl: "count-m-middle", label: "MMB" },
  2: { key: "right", el: "mouse-right", countEl: "count-m-right", label: "RMB" }
};

window.addEventListener("contextmenu", e => e.preventDefault());

window.addEventListener("mousedown", e => {
  actionsInWindow++;
  clicksInSecond++;
  const m = MOUSE_MAP[e.button];
  if (!m) return;
  mouseCounts[m.key]++;
  $(m.countEl).textContent = mouseCounts[m.key];
  $(m.el).classList.add("active");
  addToHistory(m.label);
  playKeySound(80);
  addLog("MOUSEDOWN", `Mouse${m.key.charAt(0).toUpperCase() + m.key.slice(1)}`, m.label, "CAPTURED");
});

window.addEventListener("mouseup", e => {
  const m = MOUSE_MAP[e.button];
  if (m) $(m.el).classList.remove("active");
});

// ─── Reset button ─────────────────────────────────────────────────────────────
$("btn-reset").addEventListener("click", reset);

// ─── APM interval ─────────────────────────────────────────────────────────────
setInterval(() => {
  statApm.textContent = actionsInWindow * 12;
  actionsInWindow = 0;
}, 5000);

// ─── CPS interval ─────────────────────────────────────────────────────────────
setInterval(() => {
  statCps.textContent = clicksInSecond;
  clicksInSecond = 0;
}, 1000);

// ─── Init ─────────────────────────────────────────────────────────────────────
buildKeyboard();
