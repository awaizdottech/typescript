class User {
  private what: string = "nothing"; // only in this class
  protected kid: string = "ar"; // accessible in this and extending classes
  constructor(public uname: string, private std: number) {
    this.uname = "";
    this.std = 5;
  }
  // getters and setters are generally used to maipulate private values not accessible outside class
  get email(): string {
    return "";
  }
  set num(para: number) {}
  // we also have private methods
}

class Successor extends User {}
class Professional implements Author {
  constructor(
    public name: string,
    public books: number,
    public penName: string
  ) {}
}

abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}

  abstract getSepia(): void;
  getReelTime(): number {
    // some complex calculation
    return 8;
  }
}

class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}
