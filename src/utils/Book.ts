import ImageLinks from './ImageLinks';

interface Book {
    title:string,
    authors: string [],
    description: string,
    pageCount: number,
    imageLinks: ImageLinks,
    id:string,

}

export default Book;

