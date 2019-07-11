export class Article {
    votes: number;
    title: string;
    link: string;

    constructor(title: string, link: string, votes?: number) {
      this.title = title;
      this.link =  link;
      this.votes = votes || 0;
    }

    voteUp(): void {
      this.votes += 1;
    }

    voteDown(): void {
      this.votes -= 1;
    }

    domain(): string {
      try {
        const domainAppPath: string = this.link.split('//')[1];

        return domainAppPath.split('/')[0];

      } catch (err) {
        return null;
      }
    }
  }