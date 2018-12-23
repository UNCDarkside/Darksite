export interface IAlbum {
  created: string;
  description: string;
  mediaResources: IMediaResource[];
  slug: string;
  title: string;
}

export interface IInfoPanel {
  id: string;
  media?: IMediaResource;
  text: string;
  title: string;
}

export interface IMediaResource {
  caption: string;
  id: string;
  image: string | null;
  title: string;
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
