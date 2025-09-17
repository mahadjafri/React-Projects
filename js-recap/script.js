const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//////////////////////////////////////// Section 1: Destructuring, Spread Operator, Ternary Operator, Template Literals ///////////////////////
const book = getBook(3);
book;
// const title = books.title;
// const author = books.author;

// console.log(title, author);

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(title, author, genres);

// const primaryGenre = genres[0];
// primaryGenre;

const [primaryGenre, secondaryGenre, ...OtherGenres] = genres;
console.log(primaryGenre, secondaryGenre, OtherGenres);

const newGenres = [...genres, "epic fantasy"];
newGenres;

const updatedBook = {
  ...book,
  moviePublicationDate: "2001-12-19",
  pages: 1210,
};
updatedBook;

const getYear = (str) => str.split("-")[0];
console.log(getYear(publicationDate));

const summary = `${title}, a ${pages}-page book, was written by ${author} and published in ${getYear(
  publicationDate
)}. The book 
has ${
  hasMovieAdaptation ? "" : "not"
} been adapted as a movie. It falls under the genres: ${genres.join(", ")}.`;
summary;

const pagesRange =
  pages > 1000 ? "over a thousand pages" : "less than a thousand pages";
pagesRange;
console.log(`The book ${title} has ${pagesRange}.`);

console.log("jonas" && "some_string" && "other_ string");
console.log(null && "some_string" && "other_ string");

console.log(true || "some_string" || "other_ string");
console.log(0 || 0 || "other_ string");

console.log(book.translations.spanish);

spanishTranslation = book.translations.spanish || "Not Translated";
console.log(spanishTranslation);

console.log(book.reviews.librarything?.reviewsCount);
const countwrong = book.reviews.librarything?.reviewsCount || "no data";
countwrong;

const count = book.reviews.librarything?.reviewsCount ?? "no data";
count;

function getTotalReviewCount(book) {
  const goodreadsCount = book.reviews.goodreads?.reviewsCount ?? 0;
  const librarythingCount = book.reviews.librarything?.reviewsCount ?? 0;
  return goodreadsCount + librarythingCount;
}

console.log(getTotalReviewCount(book));

// function getTotalReviewCount(book) {
//   const goodreadsCount = book.reviews.goodreads?.reviewsCount ?? 0;
//   const librarythingCount = book.reviews.librarything?.reviewsCount ?? 0;
//   return goodreadsCount + librarythingCount;
// }

//////////////////////////////////////////////// Section 2: Optional Chaining, Array Methods /////////////////////////////////////////////
const books = getBooks();

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

const longbooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longbooks;

const adventureBooks = books
  .filter((book) => book.genres.includes("adventure"))
  .map((book) => book.title);
adventureBooks;

const totalpages = books.reduce((acc, book) => acc + book.pages, 0);
totalpages;

const array1 = [3, 7, 1, 9, 6];
const sorted = array1.slice().sort((a, b) => a - b);
sorted;
array1;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
sortedByPages;

const newBook = {
  id: "6",
  title: "Harry Potter and the Chamber of Secrets",
  author: "J. K. Rowling",
  publicationDate: "1998-07-02",
  genres: ["fantasy", "adventure"],
  pages: 251,
  hasMovieAdaptation: true,
  translations: {
    spanish: "Harry Potter y la cámara secreta",
    french: "Harry Potter et la Chambre des secrets",
    german: "Harry Potter und die Kammer des Schreckens",
  },
  reviews: {
    goodreads: {
      rating: 4.42,
      ratingsCount: 6197706,
      reviewsCount: 100352,
    },
    librarything: {
      rating: 4.31,
      ratingsCount: 78945,
      reviewsCount: 1234,
    },
  },
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== "3");
booksAfterDelete;

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === "5" ? { ...book, pages: 900 } : book
);
booksAfterUpdate;

///////////////////////////////////////////////////// Section 3: Fetch API, Async/Await ////////////////////////////////////////////////////////
fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data));

console.log("Api Completed");

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);
  return data;
}

todos = getTodos();
todos;
console.log("API Completed");
