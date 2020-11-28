import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { addItem, fetchItems } from '../../../actions';
import Input from '../Input/Input';
import BreakLine from '../BreakLine/BreakLine';
import * as S from './InputLiveSearchStyles';

const InputLiveSearch = ({ searchItems, label, name }) => {
  const { values } = useFormikContext();
  const [search, setSearch] = useState('');
  const [autocomplete, setAutocomplete] = useState(false);
  const items = useSelector(state => state[searchItems]);
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const wrapperRef = useRef(null);

  const addCategory = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const handleInputChange = e => {
    values[name] = '';
    setSearch(e.target.value);
  };

  const handleInputFocus = () => {
    setAutocomplete(true);
  };

  const handleAddCategory = () => {
    addCategory(searchItems, { name: search }).then(id => {
      values[name] = id;
      inputEl.current.value = search;
      setSearch('');
      setAutocomplete(false);
    });
  };

  const handleResultClick = (id, itemName, e) => {
    e.preventDefault();
    values[name] = id;
    inputEl.current.value = itemName;
    setSearch('');
    setAutocomplete(false);
  };

  useEffect(() => {
    dispatch(fetchItems(searchItems));
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setAutocomplete(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dispatch, searchItems, wrapperRef]);

  return (
    <S.SearcherWrapper ref={wrapperRef}>
      <S.SearchInput
        as={Input}
        name={`${searchItems}-name`}
        type="text"
        ref={inputEl}
        label={label}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      {(autocomplete || search) && (
        <S.SearchResultWrapper>
          {search && search.length > 0 && !items.find(c => c.name === search) && (
            <>
              <S.AddItemOption onClick={handleAddCategory}>
                Dodaj: <S.AddItemName>{search}</S.AddItemName>
              </S.AddItemOption>

              {items.filter(item => item.name.toLowerCase().match(search.toLowerCase())).length >
                0 && <BreakLine />}
            </>
          )}
          <S.ItemsList>
            {items &&
              items
                .filter(item => item.name.toLowerCase().match(search.toLowerCase()))
                .map(({ id, name: itemName }) => (
                  <S.Item key={id} onClick={e => handleResultClick(id, itemName, e)}>
                    {itemName}
                  </S.Item>
                ))}
          </S.ItemsList>
        </S.SearchResultWrapper>
      )}
    </S.SearcherWrapper>
  );
};
export default InputLiveSearch;

InputLiveSearch.propTypes = {
  label: PropTypes.string.isRequired,
  searchItems: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
