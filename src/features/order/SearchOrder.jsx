import { useState } from "react"
import { Navigate } from "react-router-dom";

function SearchOrder() {
    const [query , setQuery] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        if(!query)return;
        Navigate(`/order/${query}`);
        setQuery("");
    }
  return (
    <form onSubmit={handleSubmit} >
        <input placeholder="Search for order #" value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}

export default SearchOrder