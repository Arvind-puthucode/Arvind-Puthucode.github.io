import mermaid from "https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs";

mermaid.initialize({ startOnLoad: false, theme: "neutral", securityLevel: "loose" });

const run = async () => {
  try {
    await mermaid.run({ querySelector: ".mermaid", suppressErrors: true });
  } catch (error) {
    console.error("Mermaid render failed", error);
  }
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", run, { once: true });
} else {
  run();
}
