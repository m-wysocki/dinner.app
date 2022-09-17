import React from 'react';
import { useDispatch } from 'react-redux';
import slugify from 'react-slugify';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { addItem } from '../../../actions';
import * as S from './InputLiveSearchStyles';
import useFetchItems from '../../../hooks/useFetchItems';

const filter = createFilterOptions();

const InputLiveSearch = ({
  searchItems,
  label,
  name,
  withAddingToFormikContext,
  onChangeFn,
  inline,
}) => {
  const { values } = useFormikContext();
  const items = useFetchItems(searchItems);
  const dispatch = useDispatch();

  const [value, setValue] = React.useState(null);

  const addNewItem = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  const setActiveItem = item => {
    setValue(item);

    if (withAddingToFormikContext) {
      values[name] = item?.id || '';
    }

    if (onChangeFn) {
      onChangeFn(item?.id || '');
    }
  };

  const handleResultClick = (e, item) => {
    if (item?.inputValue) {
      const { inputValue } = item;
      // Create a new value from the user input
      addNewItem(searchItems, { name: inputValue, slug: slugify(inputValue) }).then(id => {
        setActiveItem({ name: inputValue, id });
      });
    } else {
      setActiveItem(item);
    }
  };

  const filterOptionsPrepare = (options, params) => {
    const filtered = filter(options, params);

    const { inputValue } = params;
    // Suggest the creation of a new value
    const isExisting = options.some(option => inputValue === option.name);
    if (inputValue !== '' && !isExisting) {
      filtered.push({
        inputValue,
        name: `Add "${inputValue}"`,
      });
    }

    return filtered;
  };

  return items?.length ? (
    <S.SearcherWrapper inline={inline}>
      <Autocomplete
        value={value}
        id={`${name}-autocomplete`}
        options={items}
        onChange={handleResultClick}
        getOptionLabel={option => option.name}
        filterOptions={filterOptionsPrepare}
        autoHighlight
        clearOnEscape
        openOnFocus
        disablePortal
        style={{ minWidth: '200px' }}
        renderInput={params => (
          <TextField {...params} name={name} label={label} variant="standard" />
        )}
        disabled={!items?.length}
      />
    </S.SearcherWrapper>
  ) : (
    <p>Loading...</p>
  );
};
export default InputLiveSearch;

InputLiveSearch.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  searchItems: PropTypes.string.isRequired,
  withAddingToFormikContext: PropTypes.bool,
  inline: PropTypes.bool,
  onChangeFn: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]),
};

InputLiveSearch.defaultProps = {
  withAddingToFormikContext: false,
  onChangeFn: false,
  inline: false,
};
