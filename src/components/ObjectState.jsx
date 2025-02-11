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

const tittleChange =() => {

}

const yearChange =() => {

}

    return (
      <>

      
        <div>
          <p>{book.author}</p>
          <p>{book.tittle}</p>
          <p>{book.year}</p>
        </div>
        <div>
            <input type="text" id="author" value={book.author} />
            <input type=" id" id="tittle" value={book.tittle} />
            <input type="text" id="year" value={book.year} />  
        </div>
      </>
    );
    
}
export default ObjectState