import { useState } from "react";

const ObjectState = () => {
    const [book, setBook] = useState({
author : "Matt Damon",
tittle: "Dungeon Crawler Carl",
year : 2020,
})

const authorChange =(e) => {
    setBook ((b) => ({ ... b, author: e.target.value}))
}

const tittleChange =(e) => {
setBook((b) => ({ ...b, tittle: e.target.value }));
}

const yearChange =(e) => {
setBook((b) => ({ ...b, year: e.target.value }));
}

    return (
      <>
        <div>
          <p>{book.author}</p>
          <p>{book.tittle}</p>
          <p>{book.year}</p>
        </div>

        <div>
          <input
            type="text"
            id="author"
            value={book.author}
            onChange={authorChange}
          />
          <input
            type=" id"
            id="tittle"
            value={book.tittle}
            onChange={tittleChange}
          />
          <input
            type="text"
            id="year"
            value={book.year}
            onChange={yearChange}
          />
        </div>
      </>
    );
    
}
export default ObjectState