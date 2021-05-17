import Twit from "twit";
import { Credentials } from "../types";

class TwitterBot {
  private client: Twit;

  constructor(credentials: Credentials) {
    this.client = new Twit(credentials);
  }

  public async tweet(status: string) {
    return this.client.post("statuses/update", { status });
  }
}

export default TwitterBot;
