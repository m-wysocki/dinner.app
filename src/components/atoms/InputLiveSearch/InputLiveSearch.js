import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import slugify from 'react-slugify';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { addItem } from '../../../actions';
import Input from '../Input/Input';
import BreakLine from '../BreakLine/BreakLine';
import * as S from './InputLiveSearchStyles';
import useFetchItems from '../../../hooks/useFetchItems';
import useFetchItemsByParam from '../../../hooks/useFetchItemsByParam';

const InputLiveSearch = ({
  searchItems,
  label,
  name,
  withAddingNewItem,
  withAddingToFormikContext,
  setIngredientFn,
  inline,
}) => {
  const { values } = useFormikContext();
  const [search, setSearch] = useState('');
  const [autocomplete, setAutocomplete] = useState(false);
  const items = useFetchItems(searchItems);
  const dispatch = useDispatch();
  const inputEl = useRef(null);
  const wrapperRef = useRef(null);

  const addCategory = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const activeItem = useFetchItemsByParam(searchItems, 'id', values[name])[0];

  const handleInputChange = e => {
    if (withAddingToFormikContext) {
      values[name] = '';
    }
    setSearch(e.target.value);
  };

  const handleInputFocus = () => {
    setAutocomplete(true);
  };

  const handleAddCategory = () => {
    addCategory(searchItems, { name: search, slug: slugify(search) }).then(id => {
      values[name] = id;
      setAutocomplete(false);
    });
  };

  const handleResultClick = (id, itemName, e) => {
    e.preventDefault();
    if (withAddingToFormikContext) {
      values[name] = id;
    }
    setSearch(itemName);
    setAutocomplete(false);
    setIngredientFn(id);
  };

  const handleClickOutside = event => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setAutocomplete(false);
      setIngredientFn();
    }
  };

  useEffect(() => {
    if (activeItem) {
      setSearch(activeItem.name);
    }

    if (autocomplete) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeItem, searchItems, wrapperRef, autocomplete]);

  return (
    <S.SearcherWrapper inline={inline} ref={wrapperRef}>
      <S.SearchInput
        as={Input}
        name={`${searchItems}-name`}
        type="text"
        value={search}
        ref={inputEl}
        label={label}
        onChange={handleInputChange}
        onFocus={handleInputFocus}
      />
      {(autocomplete || search) && !activeItem && (
        <S.SearchResultWrapper>
          {search && search.length > 0 && !items.find(c => c.name === search) && withAddingNewItem && (
            <>
              <S.AddItemOption onClick={handleAddCategory}>
                Add: <S.AddItemName>{search}</S.AddItemName>
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
  withAddingNewItem: PropTypes.bool,
  withAddingToFormikContext: PropTypes.bool,
  setIngredientFn: PropTypes.func,
  inline: PropTypes.bool,
};

InputLiveSearch.defaultProps = {
  withAddingNewItem: false,
  withAddingToFormikContext: false,
  setIngredientFn: () => null,
  inline: false,
};
