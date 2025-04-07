export interface ICategory {
  id: number;
  title: string;
}

export interface IPost {
  id: number;
  title: string;
  text: string;
  author: string;
  image: string;
  date: Date;
  category: ICategory;
}