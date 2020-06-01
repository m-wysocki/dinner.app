import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, fetchItems } from '../../../actions';

const InputLiveSearch = () => {
  const [search, setSearch] = useState('');
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const searchIdInput = useRef(null);

  const addCategory = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  const handleAddCategory = () => {
    addCategory('categories', { name: search });
    inputEl.current.value = '';
  };

  const handleResultClick = (id, name, e) => {
    e.preventDefault();
    inputEl.current.value = name;
    searchIdInput.current.value = id;
  };

  useEffect(() => {
    dispatch(fetchItems('categories'));
  }, [dispatch]);

  return (
    <>
      <input name="id" type="hidden" ref={searchIdInput} />
      <input
        name="name"
        type="text"
        ref={inputEl}
        placeholder="wyszukaj kategorię"
        onChange={handleInputChange}
      />
      {search && !categories.find(c => c.name === search) && (
        <div onClick={handleAddCategory}>Dodaj nową kategorię - {search}</div>
      )}
      <ul>
        {categories &&
          categories
            .filter(category => category.name.toLowerCase().match(search.toLowerCase()))
            .map(({ id, name }) => (
              <li key={id} onClick={e => handleResultClick(id, name, e)}>
                {name}
              </li>
            ))}
      </ul>
    </>
  );
};
export default InputLiveSearch;
