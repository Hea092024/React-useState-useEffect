import { useState } from "react";

const ObjectState = () => {
    const [book, setBook] = useState({
author : "Matt Damon",
tittle: "Dungeon Crawler Carl",
year : 2020,
})
    return (
        <>
        <p>{book.author}</p>
        <p></p>
        <p></p>
        </>
    )
    
}
export default ObjectState