import React from 'react'

const SearchItem = ({ search, setSearch }) => {
  return (
    <form className='searchForm' onSubmit={(e) => e.preventDefault()}>
        <input 
            type='text' 
            role='searchbox' 
            placeholder='lookie upsie..' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)}/>
    </form>
  )
}

export default SearchItem