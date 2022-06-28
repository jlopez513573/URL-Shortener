import { Application } from "express";
import createServer from "./server";

const startServer = () => {
  const app: Application = createServer();
  const port: number = parseInt(<string>process.env.PORT, 10) || 3000;

  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
};

startServer();
