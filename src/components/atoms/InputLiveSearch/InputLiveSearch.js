import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../actions';

const InputLiveSearch = () => {
  const [search, setSearch] = useState('');
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchItems('categories'));
  }, [dispatch]);

  return (
    <>
      <input type="text" placeholder="wyszukaj kategorię" onChange={handleInputChange} />
      <div>{search}</div>
      <ul>{categories && categories.map(({ id, name }) => <li key={id}>{name}</li>)}</ul>
    </>
  );
};
export default InputLiveSearch;
