'use client';

import { useState } from 'react';

const Search: React.FC = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {};

  return (
    <form className="relative w-full flex-center">
      <input
        className="search_input peer"
        type="text"
        placeholder="Search for a tag or a username"
        required
        value={searchText}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default Search;
