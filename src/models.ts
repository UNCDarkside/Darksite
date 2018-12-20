export interface IInfoPanel {
  id: string;
  media?: IMediaResource;
  text: string;
  title: string;
}

export interface IMediaResource {
  caption: string;
  image: string | null;
  youtubeId: string | null;
}

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
