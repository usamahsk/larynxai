/**********************************************************
 * FULL FLOATING REAL ESTATE CHATBOT WIDGET
 * Gemini 2.5 Flash Lite + Dynamic Chips + PDF Buttons
 * No raw links in chat + Small fonts + Domain restricted
 **********************************************************/

// 🔑 INSERT YOUR GEMINI API KEY HERE
const GEMINI_API_KEY = "AIzaSyCBgvCeJ5VrkeTDhONDq2dq-3I4M4hP9Rk";


const GEMINI_MODEL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash-lite:generateContent?key=" +
  GEMINI_API_KEY;

// local-only PDF files (no direct links shown to user)
const PDF_BROCHURE =
  "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
const PDF_FLOORPLAN_2BHK = "https://www.orimi.com/pdf-test.pdf";
const PDF_FLOORPLAN_3BHK = "https://www.hq.nasa.gov/alsj/a17/A17_FlightPlan.pdf";

console.log("✔ Real Estate Chatbot Loaded");

// ----------------------------------------------------------
// FIXED CHIP GROUPS (NO LINKS DISPLAYED IN REPLIES)
// ----------------------------------------------------------

const CHIP_GROUPS = {
  intro: [
    { label: "Property Types", reply: "We have 1BHK, 2BHK, and 3BHK units." },
    {
      label: "Configurations",
      reply: "2BHK (700–800 sq.ft) and 3BHK (900–1000 sq.ft) available.",
    },
    {
      label: "Pricing",
      reply: "Prices start from ₹80L depending on tower & floor.",
    },
    {
      label: "Brochure",
      reply: "Here is the brochure.",
    },
  ],

  pricing: [
    {
      label: "EMI Details",
      reply: "2BHK EMI ~₹40–50K/month. 3BHK EMI ~₹60–70K/month.",
    },
    {
      label: "Offers",
      reply: "Seasonal offers & stamp duty waivers available.",
    },
    {
      label: "Budget Options",
      reply: "Share your approximate budget for tailored options.",
    },
  ],

  configuration: [
    { label: "1BHK", reply: "1BHK is 450–550 sq.ft carpet." },
    { label: "2BHK", reply: "2BHK is 700–800 sq.ft carpet." },
    { label: "3BHK", reply: "3BHK is 900–1100 sq.ft carpet." },
    { label: "Carpet Area", reply: "Carpet area is the usable internal area." },
  ],

  brochure: [
    { label: "Brochure PDF", reply: "Here is the brochure." },
    { label: "2BHK Plan", reply: "Here is the 2BHK floor plan." },
    { label: "3BHK Plan", reply: "Here is the 3BHK floor plan." },
    {
      label: "Amenities",
      reply: "Pool, gym, clubhouse, gardens, kids play area & more.",
    },
  ],

  interest: [
    {
      label: "Share Details",
      reply: "Please share your name & phone to arrange a site visit.",
    },
  ],
};

function detectChipGroup(text) {
  const t = text.toLowerCase();
  if (/price|budget|emi|cost|payment/.test(t)) return "pricing";
  if (/bhk|carpet|config|flat|unit/.test(t)) return "configuration";
  if (/brochure|pdf|floor|plan|layout/.test(t)) return "brochure";
  if (/interested|visit|call|details/.test(t)) return "interest";
  return "intro";
}

// ----------------------------------------------------------
// STRONGLY DOMAIN-RESTRICTED GEMINI CALL
// ----------------------------------------------------------

async function callGemini(prompt) {
  const SYSTEM_RULES = `
You are a REAL ESTATE HELP DESK ASSISTANT.
You MUST reply ONLY about:
- 1BHK / 2BHK / 3BHK
- Floor plans
- Brochure
- Pricing
- Carpet area
- EMI
- Amenities
- Site visit
- Contact/helpdesk

If user asks anything OUTSIDE this domain:
Reply: "I can help only with project details like plans, pricing, brochure, EMI & site visits."

Always reply in **1–2 short sentences**.
Never show URLs. Never give unrelated info.
`;

  const payload = {
    contents: [
      {
        role: "user",
        parts: [{ text: SYSTEM_RULES + "\nUser: " + prompt }],
      },
    ],
  };

  try {
    const res = await fetch(GEMINI_MODEL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    let text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I can help only with real estate information.";

    // REMOVE LINKS COMPLETELY
    text = text.replace(/https?:\/\/\S+/gi, "");
    text = text.replace(/\n+/g, " ");
    return text.trim();
  } catch (e) {
    console.error("Gemini error:", e);
    return "AI service unavailable. Try again.";
  }
}

// ----------------------------------------------------------
// FLOATING BUTTON
// ----------------------------------------------------------

const fab = document.createElement("div");
fab.innerHTML = "💬";
fab.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg,#22c55e,#3b82f6,#6366f1);
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
  color:white;
  font-size:28px;
  box-shadow:0 18px 40px rgba(0,0,0,0.4);
  z-index:999999;
`;
document.body.appendChild(fab);

// ----------------------------------------------------------
// CHAT PANEL
// ----------------------------------------------------------

const panel = document.createElement("div");
panel.style.cssText = `
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 360px;
  height: 550px;
  border-radius: 16px;
  background:#020617;
  border:1px solid #27272a;
  overflow:hidden;
  display:none;
  z-index:9999999;
  color:#e5e7eb;
  font-family:system-ui;
  font-size:11px;
`;
document.body.appendChild(panel);

fab.onclick = () => {
  panel.style.display = panel.style.display === "none" ? "block" : "none";
};

// ----------------------------------------------------------
// LOAD REACT (CDN) AND INIT APP
// ----------------------------------------------------------

(function loadReact() {
  const libs = [
    "https://unpkg.com/react@18/umd/react.production.min.js",
    "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  ];
  let loaded = 0;

  libs.forEach((src) => {
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => {
      loaded++;
      if (loaded === libs.length) initApp();
    };
    document.head.appendChild(s);
  });
})();

// ----------------------------------------------------------
// MAIN CHATBOT APP
// ----------------------------------------------------------

function initApp() {
  const React = window.React;
  const ReactDOM = window.ReactDOM;

  function ChatApp() {
    const [messages, setMessages] = React.useState([
      {
        from: "bot",
        text:
          "Hi 👋 I’m your Real Estate Assistant. Ask about 2BHK, pricing, brochure or plans.",
        chips: CHIP_GROUPS.intro,
      },
    ]);
    const [input, setInput] = React.useState("");
    const endRef = React.useRef();

    React.useEffect(() => {
      endRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // USER SENDS CUSTOM TEXT
    async function sendMsg(text) {
      if (!text.trim()) return;

      setMessages((m) => [...m, { from: "user", text }]);

      const ai = await callGemini(text);
      const group = detectChipGroup(ai);

      setMessages((m) => [
        ...m,
        { from: "bot", text: ai, chips: CHIP_GROUPS[group] },
      ]);

      setInput("");
    }

    // USER CLICKED A CHIP
    function clickChip(chip) {
      setMessages((m) => [...m, { from: "user", text: chip.label }]);

      const group = detectChipGroup(chip.reply);
      setMessages((m) => [
        ...m,
        { from: "bot", text: chip.reply, chips: CHIP_GROUPS[group] },
      ]);
    }

    // BUTTON LOGIC (BROCHURE / PLANS)
    function renderButtons(text) {
      text = text.toLowerCase();
      const btns = [];

      if (text.includes("brochure")) {
        btns.push({
          title: "📄 Download Brochure",
          url: PDF_BROCHURE,
          color: "#22c55e",
        });
      }
      if (text.includes("2bhk")) {
        btns.push({
          title: "📐 Download 2BHK Plan",
          url: PDF_FLOORPLAN_2BHK,
          color: "#3b82f6",
        });
      }
      if (text.includes("3bhk")) {
        btns.push({
          title: "📐 Download 3BHK Plan",
          url: PDF_FLOORPLAN_3BHK,
          color: "#6366f1",
        });
      }

      return btns.map((b, i) =>
        React.createElement(
          "button",
          {
            key: i,
            onClick: () => window.open(b.url, "_blank"),
            style: {
              marginTop: "8px",
              padding: "6px 10px",
              background: b.color,
              borderRadius: "8px",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              display: "block",
              fontSize: "11px",
            },
          },
          b.title
        )
      );
    }

    // RENDER SINGLE MESSAGE
    function Message(msg, i) {
      const isBot = msg.from === "bot";

      return React.createElement(
        "div",
        { key: i, style: { marginBottom: "12px" } },
        React.createElement(
          "div",
          {
            style: {
              padding: "8px 10px",
              background: isBot
                ? "rgba(30,41,59,0.9)"
                : "rgba(34,197,94,0.9)",
              borderRadius: "12px",
              maxWidth: "250px",
              whiteSpace: "pre-line",
              marginLeft: isBot ? "0" : "auto",
              fontSize: "11px",
              lineHeight: "1.35",
            },
          },
          msg.text,
          ...renderButtons(msg.text)
        ),

        // Chips
        msg.chips &&
          React.createElement(
            "div",
            {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "6px",
                marginTop: "4px",
              },
            },
            msg.chips.map((c, idx) =>
              React.createElement(
                "button",
                {
                  key: idx,
                  onClick: () => clickChip(c),
                  style: {
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#1e293b",
                    border: "1px solid #334155",
                    color: "#e2e8f0",
                    cursor: "pointer",
                    fontSize: "10px",
                  },
                },
                c.label
              )
            )
          )
      );
    }

    // MAIN UI
    return React.createElement(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          fontSize: "11px",
        },
      },

      // Header
      React.createElement(
        "div",
        {
          style: {
            padding: "10px",
            background: "#0f172a",
            borderBottom: "1px solid #1e293b",
            fontSize: "12px",
            fontWeight: "600",
          },
        },
        "Real Estate AI Assistant"
      ),

      // Chat area
      React.createElement(
        "div",
        {
          style: {
            flex: 1,
            overflowY: "auto",
            padding: "10px",
          },
        },
        messages.map((msg, i) => Message(msg, i)),
        React.createElement("div", { ref: endRef })
      ),

      // Input box
      React.createElement(
        "div",
        {
          style: {
            padding: "10px",
            display: "flex",
            gap: "6px",
            background: "#0f172a",
            borderTop: "1px solid #1e293b",
          },
        },
        React.createElement("input", {
          value: input,
          onChange: (e) => setInput(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && sendMsg(input),
          placeholder: "Ask about plans, pricing, brochure…",
          style: {
            flex: 1,
            padding: "8px",
            borderRadius: "999px",
            background: "#1e293b",
            border: "1px solid #334155",
            color: "#fff",
            fontSize: "11px",
          },
        }),
        React.createElement(
          "button",
          {
            onClick: () => sendMsg(input),
            disabled: !input.trim(),
            style: {
              padding: "0 16px",
              borderRadius: "999px",
              background: "linear-gradient(135deg,#22c55e,#3b82f6)",
              border: "none",
              color: "white",
              fontSize: "11px",
              cursor: "pointer",
            },
          },
          "➤"
        )
      )
    );
  }

  ReactDOM.createRoot(panel).render(React.createElement(ChatApp));
}
