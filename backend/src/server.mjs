import app, { PORT } from "./app.mjs";

await import("./routing/mainRouting.mjs");

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/api`);
});
