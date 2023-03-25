import express, { Router } from "express";
import connectionMongoDb from "./server/mongoConnection";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.app.use(express.json());
  }

  public startServer(PORT: string | number = 3001): void {
    connectionMongoDb();
    this.app.listen(PORT, () =>
      console.log(`Server running here 👉 http://localhost:${PORT}`));
  }

  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App;
