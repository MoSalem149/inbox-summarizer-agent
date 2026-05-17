import express from "express";
import cors from "cors";
import summarizerRoutes from "./routes/summarizer.routes";

const port = Number(process.env.PORT) || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", summarizerRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
