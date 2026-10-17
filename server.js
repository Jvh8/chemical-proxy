import { Chemical } from "chemicaljs";

const chemical = new Chemical({
  port: process.env.PORT || 8000,
  staticDir: "build",
  spaMode: true,
});

chemical.start().catch((err) => {
  console.error("Failed to start Chemical server:", err);
  process.exit(1);
});

process.on("SIGINT", () => {
  chemical.stop();
  process.exit(0);
});
