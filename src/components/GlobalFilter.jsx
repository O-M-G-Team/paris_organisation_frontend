import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
    return (<span>
        <input type='text' placeholder='Search Sport...' className='search'
            value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
    </span>
    )
}
