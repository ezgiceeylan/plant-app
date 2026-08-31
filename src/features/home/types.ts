export interface Article {
  id: number | string;
  title: string;
  imageUri?: string;
  uri?: string;
}

export interface Category {
  id: number | string;
  title: string;
  imageUri?: string;
}
