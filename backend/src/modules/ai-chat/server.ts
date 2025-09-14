import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Node API running at http://localhost:${PORT}`));
