export interface IPost {
  author: IUser;
  published: string;
  rendered: string;
  slug: string;
  title: string;
}

export interface IUser {
  name: string;
}
