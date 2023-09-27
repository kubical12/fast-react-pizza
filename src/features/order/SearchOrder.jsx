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
        <input className="rounded-full px-4 py-2 text-sm bg-yellow-100 placeholder:text-stone-400 sm:w-64 sm:focus:w-72 transition-all focus:outline-none focus:ring-opacity-50 focus:ring-yellow-500" placeholder="Search for order #" value={query} onChange={(e) => setQuery(e.target.value)} />
    </form>
  )
}

export default SearchOrder