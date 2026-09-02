export interface Article {
  id: number;
  title: string;
  subtitle: string;
  image_uri: string;
  uri: string;
  order: number;
}

export interface Category {
  id: number;
  name: string;
  title: string;
  rank: number;
  image: {
    url: string;
    width: number;
    height: number;
  };
}
