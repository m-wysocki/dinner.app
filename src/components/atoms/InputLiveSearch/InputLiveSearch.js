import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, fetchItems } from '../../../actions';
import Input from '../Input/Input';
import BreakLine from '../BreakLine/BreakLine';
import * as S from './InputLiveSearchStyles';

const InputLiveSearch = () => {
  const [search, setSearch] = useState('');
  const [autocomplete, setAutocomplete] = useState(false);
  const categories = useSelector(state => state.categories);
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const searchIdInput = useRef(null);

  const addCategory = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const handleInputChange = e => {
    searchIdInput.current.value = '';
    setSearch(e.target.value);
  };

  const handleInputFocus = e => {
    setAutocomplete(true);
  };

  const handleAddCategory = () => {
    addCategory('categories', { name: search });
    inputEl.current.value = '';
  };

  const handleResultClick = (id, name, e) => {
    e.preventDefault();
    inputEl.current.value = name;
    searchIdInput.current.value = id;
    setSearch('');
    setAutocomplete(false);
  };

  useEffect(() => {
    dispatch(fetchItems('categories'));
  }, [dispatch]);

  return (
    <S.SearcherWrapper>
      <input name="id" type="hidden" ref={searchIdInput} />
      <S.SearchInput
        as={Input}
        name="name"
        type="text"
        ref={inputEl}
        label="Wyszukaj kategorię"
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      {(autocomplete || search) && (
        <S.SearchResultWrapper>
          {search && search.length > 2 && !categories.find(c => c.name === search) && (
            <>
              <S.AddItemOption onClick={handleAddCategory}>
                Dodaj nową kategorię: <S.AddItemName>{search}</S.AddItemName>
              </S.AddItemOption>

              {categories.filter(category =>
                category.name.toLowerCase().match(search.toLowerCase()),
              ).length > 0 && <BreakLine />}
            </>
          )}
          <S.ItemsList>
            {categories &&
              categories
                .filter(category => category.name.toLowerCase().match(search.toLowerCase()))
                .map(({ id, name }) => (
                  <S.Item key={id} onClick={e => handleResultClick(id, name, e)}>
                    {name}
                  </S.Item>
                ))}
          </S.ItemsList>
        </S.SearchResultWrapper>
      )}
    </S.SearcherWrapper>
  );
};
export default InputLiveSearch;
