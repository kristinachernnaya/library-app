export interface Response {
  books?: BooksEntity[] | null;
  count: number;
}
export interface BooksEntity {
  title: string;
  isbn?: string | null;
  thumbnailURL?: string | null;
  shortDescription?: string | null;
  longDescription?: string | null;
  status: string;
  authors?: string[] | null;
  categories?: string[] | null;
  pageCount: number;
  publishDate: string;
}

export interface Book {
  title: string;
  image?: string | null;
  authors?: string[] | null;
  genre?: string[] | null;
}
