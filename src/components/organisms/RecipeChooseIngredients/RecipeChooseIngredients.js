import React, { useEffect, useRef, useState } from 'react';
import { ErrorMessage, useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../actions';
import Modal from '../Modal/Modal';
import useModal from '../../../hooks/useModal';
import AddIngredientsForm from '../AddIngredientsForm/AddIngredientsForm';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Input from '../../atoms/Input/Input';
import * as S from './RecipeChooseIngredientsStyles';
import InputError from '../../atoms/InputError/InputError';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';

const RecipeChooseIngredients = () => {
  const ingredientItems = 'ingredients';
  const unitItems = 'units';
  const { values } = useFormikContext();
  const dispatch = useDispatch();
  const items = useSelector(state => state[ingredientItems]);
  const units = useSelector(state => state[unitItems]);
  const unitTextRef = useRef(null);
  const initialIngredient = {
    id: '',
    name: '',
    amount: '',
    unit: '',
  };

  const [ingredient, setIngredient] = useState(initialIngredient);

  const [isFormValid, setIsFormValid] = useState(true);
  const [ingredients, setIngredients] = useState(values.ingredients);

  const handleSetIngredient = ingredientId => {
    if (ingredientId) {
      const selectedIngredient = items.filter(item => item.id === ingredientId)[0];
      const unit = units.filter(item => item.id === selectedIngredient.unitId)[0];
      setIngredient(prevState => ({
        ...prevState,
        id: ingredientId,
        name: selectedIngredient.name,
        unit: unit.name,
      }));
    } else {
      setIngredient(prevState => ({
        ...prevState,
        id: '',
        name: '',
        unit: '',
      }));
    }
  };

  const handleAmountChange = event => {
    const { target } = event;
    const { value } = target;
    setIngredient(prevState => ({
      ...prevState,
      amount: value,
    }));
  };

  const handleAddIngredient = e => {
    e.preventDefault();
    if (ingredient.id && ingredient.amount) {
      setIsFormValid(true);
      setIngredients(prevState => [...prevState, ingredient]);
      setIngredient(initialIngredient);
    } else {
      setIsFormValid(false);
    }
  };

  const handleRemoveIngredient = (e, id) => {
    e.preventDefault();
    setIngredients(ingredients.filter(ingredientItem => ingredientItem.id !== id));
  };

  useEffect(() => {
    dispatch(fetchItems(ingredientItems));
    dispatch(fetchItems(unitItems));
    values.ingredients = ingredients;
  }, [dispatch, ingredientItems, unitItems, ingredients, values, ingredient]);

  const { isModalOpen, toggleModal } = useModal();

  return (
    <div>
      <Heading small>Add ingredients</Heading>

      <S.Content>
        <S.AddIngredient>
          <S.IngredientWrapper>
            <InputLiveSearch
              label="Search ingredient*"
              searchItems="ingredients"
              name="ingredient"
              initialSearch={ingredient.name}
              setIngredientFn={handleSetIngredient}
              inline
            />
            {!isFormValid && !ingredient.id && (
              <InputError absolute>This field is required</InputError>
            )}
          </S.IngredientWrapper>

          <S.IngredientWrapper>
            <S.StyledInput
              as={Input}
              type="text"
              name="amount"
              value={ingredient.amount}
              label="amount*"
              onChange={handleAmountChange}
            />

            {!isFormValid && !ingredient.amount && (
              <InputError absolute>This field is required</InputError>
            )}
          </S.IngredientWrapper>

          <S.Unit ref={unitTextRef}>{ingredient.unit}</S.Unit>

          <Button secondary small type="button" onClick={handleAddIngredient}>
            add
          </Button>
        </S.AddIngredient>

        <S.MissingIngredient>
          <p>Is there no the ingredient you need on the list?</p>

          <Button small secondary type="button" onClick={toggleModal}>
            add ingredient
          </Button>

          <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
            <AddIngredientsForm toggleModal={toggleModal} />
          </Modal>
        </S.MissingIngredient>
      </S.Content>

      <ErrorMessage name="ingredients" component={InputError} />

      {values.ingredients && values.ingredients.length > 0 && (
        <div>
          <Heading small>Ingredients</Heading>
          <ul>
            {values.ingredients.map(item => (
              <li key={item.id}>
                {item.name} {item.amount} {item.unit}{' '}
                <DeleteButton onClickFn={e => handleRemoveIngredient(e, item.id)}>
                  delete
                </DeleteButton>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RecipeChooseIngredients;
