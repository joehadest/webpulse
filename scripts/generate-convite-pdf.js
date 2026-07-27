const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const A4 = { width: 595.28, height: 841.89 };
const COLORS = {
  bg: "#0c1f1c",
  bgMid: "#12302b",
  paper: "#f3f7f4",
  mint: "#7dffa3",
  gold: "#e8c27a",
  terminal: "#071412",
  muted: "#9bb0a6",
};

const root = path.join(__dirname, "..");
const outDir = path.join(root, "public", "convite");
const artifactsDir = "/opt/cursor/artifacts";
const outFile = path.join(outDir, "convite-pai-do-ano-programador.pdf");
const heroPath = path.join(root, "public", "images", "convite-hero.png");
const fontBold = path.join(__dirname, "fonts", "BricolageGrotesque-ExtraBold.ttf");
const fontMedium = path.join(__dirname, "fonts", "BricolageGrotesque-Medium.ttf");
const fontMono = path.join(__dirname, "fonts", "IBMPlexMono-Regular.ttf");
const fontMonoMed = path.join(__dirname, "fonts", "IBMPlexMono-Medium.ttf");

fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(artifactsDir, { recursive: true });

const doc = new PDFDocument({
  size: "A4",
  margin: 0,
  info: {
    Title: "Convite — Pai do Ano Programador",
    Author: "WebPulse",
    Subject: "17 de agosto às 15h · Rua Rubi, 372",
  },
});

const stream = fs.createWriteStream(outFile);
doc.pipe(stream);

doc.registerFont("Display", fontBold);
doc.registerFont("Body", fontMedium);
doc.registerFont("Mono", fontMono);
doc.registerFont("MonoMed", fontMonoMed);

// Background
doc.rect(0, 0, A4.width, A4.height).fill(COLORS.bg);

// Soft accent washes
doc.save();
doc.circle(40, 80, 180).fillOpacity(0.12).fill(COLORS.mint);
doc.restore();
doc.save();
doc.circle(540, 760, 160).fillOpacity(0.14).fill(COLORS.gold);
doc.restore();
doc.fillOpacity(1);

// Hero image band
const heroH = 340;
doc.save();
doc.rect(0, 0, A4.width, heroH).clip();
doc.image(heroPath, 0, -20, {
  width: A4.width,
  height: heroH + 60,
  cover: [A4.width, heroH + 60],
  align: "center",
  valign: "center",
});
doc.restore();

// Hero fade overlays
const fade = doc.linearGradient(0, heroH - 160, 0, heroH);
fade.stop(0, COLORS.bg, 0).stop(1, COLORS.bg, 1);
doc.rect(0, heroH - 160, A4.width, 160).fill(fade);

const sideFade = doc.linearGradient(0, 0, 220, 0);
sideFade.stop(0, COLORS.bg, 0.45).stop(1, COLORS.bg, 0);
doc.rect(0, 0, 220, heroH).fill(sideFade);

// Corner code
doc.fillColor(COLORS.mint)
  .fillOpacity(0.7)
  .font("Mono")
  .fontSize(8)
  .text("const festa = {", 400, 28, { lineGap: 2 })
  .text('  tema: "pai-do-ano",', 400, 40, { lineGap: 2 })
  .text('  status: "confirmado"', 400, 52, { lineGap: 2 })
  .text("};", 400, 64);
doc.fillOpacity(1);

// Content
const left = 42;
let y = 300;

doc.fillColor(COLORS.mint)
  .font("MonoMed")
  .fontSize(10)
  .text("// você está convidado", left, y);

y += 28;
doc.fillColor(COLORS.paper)
  .font("Display")
  .fontSize(48)
  .text("Pai do Ano", left, y, { lineGap: 0 });

y += 52;
doc.fillColor(COLORS.gold)
  .font("Display")
  .fontSize(48)
  .text("Programador", left, y);

y += 58;
doc.fillColor(COLORS.muted)
  .font("Body")
  .fontSize(13)
  .text(
    "Venha celebrar o aniversário do nosso herói de código e de casa.",
    left,
    y,
    { width: 360, lineGap: 3 }
  );

y += 52;
doc
  .moveTo(left, y)
  .lineTo(A4.width - left, y)
  .strokeColor(COLORS.mint)
  .opacity(0.25)
  .lineWidth(1)
  .stroke();
doc.opacity(1);

y += 22;
const cols = [
  { code: "date: '17/08'", label: "Data", value: "17 de agosto" },
  { code: "time: '15:00'", label: "Horário", value: "15h" },
  { code: "local: 'Rua Rubi 372'", label: "Local", value: "Rua Rubi, 372" },
];
const colW = (A4.width - left * 2) / 3;

cols.forEach((col, i) => {
  const x = left + i * colW;
  doc
    .fillColor(COLORS.mint)
    .fillOpacity(0.85)
    .font("Mono")
    .fontSize(8)
    .text(col.code, x, y, { width: colW - 12 });
  doc
    .fillOpacity(1)
    .fillColor(COLORS.muted)
    .font("Body")
    .fontSize(10)
    .text(col.label, x, y + 16, { width: colW - 12 });
  doc
    .fillColor(COLORS.paper)
    .font("Display")
    .fontSize(18)
    .text(col.value, x, y + 32, { width: colW - 12 });
});

// Terminal box
const boxY = 640;
const boxH = 145;
doc
  .roundedRect(left, boxY, A4.width - left * 2, boxH, 4)
  .fill(COLORS.terminal);
doc
  .roundedRect(left, boxY, A4.width - left * 2, boxH, 4)
  .strokeColor(COLORS.mint)
  .opacity(0.25)
  .lineWidth(1)
  .stroke();
doc.opacity(1);

// Traffic lights
const dots = [
  { c: "#e85d4c", x: left + 16 },
  { c: "#e8b84c", x: left + 30 },
  { c: "#4ce88a", x: left + 44 },
];
dots.forEach((d) => {
  doc.circle(d.x, boxY + 18, 4).fill(d.c);
});
doc
  .fillColor("#ffffff")
  .fillOpacity(0.35)
  .font("Mono")
  .fontSize(8)
  .text("convite.sh", left + 58, boxY + 13);
doc.fillOpacity(1);

doc
  .fillColor(COLORS.paper)
  .fillOpacity(0.85)
  .font("Mono")
  .fontSize(11)
  .text("$ ", left + 16, boxY + 42, { continued: true })
  .fillColor(COLORS.mint)
  .text("./confirmar-presenca");

doc
  .fillOpacity(0.7)
  .fillColor(COLORS.paper)
  .font("Mono")
  .fontSize(11)
  .text("Tema: Pai do Ano Programador", left + 16, boxY + 62)
  .text("Data: 17/08 · 15h · Rua Rubi, 372", left + 16, boxY + 80);

doc
  .fillOpacity(1)
  .fillColor(COLORS.gold)
  .font("MonoMed")
  .fontSize(11)
  .text("→ Sua presença é o melhor pull request.", left + 16, boxY + 104);

doc
  .fillColor(COLORS.paper)
  .fillOpacity(0.9)
  .font("Display")
  .fontSize(16)
  .text("Contamos com você!", 0, 805, {
    width: A4.width,
    align: "center",
  });

doc.end();

stream.on("finish", () => {
  const artifact = path.join(artifactsDir, "convite-pai-do-ano-programador.pdf");
  fs.copyFileSync(outFile, artifact);
  const size = fs.statSync(outFile).size;
  console.log(`PDF gerado: ${outFile} (${size} bytes)`);
  console.log(`Artifact: ${artifact}`);
});
