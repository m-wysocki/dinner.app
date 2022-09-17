import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import slugify from 'react-slugify';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import Autocomplete, { createFilterOptions } from '@material-ui/lab/Autocomplete';
import { addItem } from '../../../actions';
import * as S from './InputLiveSearchStyles';
import useFetchItems from '../../../hooks/useFetchItems';
import AddIngredientsForm from '../../organisms/AddIngredientsForm/AddIngredientsForm';
import Modal from '../../organisms/Modal/Modal';
import useModal from '../../../hooks/useModal';

const filter = createFilterOptions();

const InputLiveSearch = ({
  searchItems,
  label,
  name,
  withAddingToFormikContext,
  onChangeFn,
  isAddNewModal,
  inline,
  clearField,
  focusField,
}) => {
  const { values } = useFormikContext();
  const { isModalOpen, toggleModal } = useModal();
  const items = useFetchItems(searchItems);
  const dispatch = useDispatch();

  const [value, setValue] = useState(null);
  const [modalInputValue, setModalInputValue] = useState(null);

  const inputAutocompleteRef = useRef(null);

  const addNewItem = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  useEffect(() => {
    if (clearField && items?.length) {
      setValue(null);
    }

    if (focusField && items?.length) {
      inputAutocompleteRef.current.focus();
    }
  }, [clearField, focusField, items]);

  const setActiveItem = item => {
    setValue(item);

    if (withAddingToFormikContext) {
      values[name] = item?.id || '';
    }

    if (onChangeFn) {
      onChangeFn(item?.id || '');
    }
  };

  const handleAddNewItemClick = inputValue => {
    if (isAddNewModal) {
      toggleModal();
      setModalInputValue(inputValue);
    } else {
      // Create a new value from the user input
      addNewItem(searchItems, { name: inputValue, slug: slugify(inputValue) }).then(id => {
        setActiveItem({ name: inputValue, id });
      });
    }
  };

  const handleChange = (e, item) => {
    if (item?.inputValue) {
      handleAddNewItemClick(item?.inputValue);
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
    <>
      <S.SearcherWrapper inline={inline}>
        <Autocomplete
          value={value}
          id={`${name}-autocomplete`}
          options={items}
          onChange={handleChange}
          getOptionLabel={option => option.name}
          filterOptions={filterOptionsPrepare}
          autoHighlight
          clearOnEscape
          openOnFocus
          disablePortal
          style={{ minWidth: '200px' }}
          renderInput={params => (
            <TextField
              {...params}
              name={name}
              label={label}
              variant="standard"
              inputRef={inputAutocompleteRef}
            />
          )}
          disabled={!items?.length}
        />
      </S.SearcherWrapper>
      <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
        <AddIngredientsForm
          toggleModal={toggleModal}
          name={modalInputValue}
          afterSuccessFn={id => setActiveItem({ name: modalInputValue, id })}
        />
      </Modal>
    </>
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
  onChangeFn: PropTypes.func,
  isAddNewModal: PropTypes.bool,
  clearField: PropTypes.bool,
  focusField: PropTypes.bool,
};

InputLiveSearch.defaultProps = {
  withAddingToFormikContext: false,
  onChangeFn: null,
  isAddNewModal: false,
  inline: false,
  clearField: false,
  focusField: false,
};
