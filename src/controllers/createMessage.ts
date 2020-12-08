export default class Messenger{
  port: number;

  constructor(port: number){
    this.port = port;
  }

  showMessage(): string {
    return `Node & Express running on port ${this.port} with typescript1`;
  }
}