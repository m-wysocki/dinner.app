import React, { useEffect, useRef, useState } from 'react';
import { string, number } from 'yup';
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
  const shopCategoryItems = 'shopCategories';

  const { values } = useFormikContext();

  const dispatch = useDispatch();
  const items = useSelector(state => state[ingredientItems]);
  const units = useSelector(state => state[unitItems]);
  const shopCategories = useSelector(state => state[shopCategoryItems]);

  const unitTextRef = useRef(null);
  const unitInputRef = useRef(null);

  const initialIngredient = {
    id: '',
    name: '',
    amount: '',
    unit: '',
    shopCategory: '',
    toBuy: true,
  };

  const [ingredient, setIngredient] = useState(initialIngredient);

  const [isIdValid, setIdValid] = useState(true);
  const [isAmountValid, setAmountValid] = useState(true);
  const [ingredients, setIngredients] = useState(values.ingredients);

  const idSchema = string().required();
  const amountSchema = number()
    .min(0)
    .required();

  const handleSetIngredient = ingredientId => {
    if (ingredientId) {
      setIdValid(true);
      unitInputRef.current.focus();
      const selectedIngredient = items.filter(item => item.id === ingredientId)[0];
      const unit = units.filter(item => item.id === selectedIngredient.unitId)[0];
      const shopCategory = shopCategories.filter(
        item => item.id === selectedIngredient.shopCategoryId,
      )[0];
      setIngredient(prevState => ({
        ...prevState,
        id: ingredientId,
        name: selectedIngredient ? selectedIngredient.name : '',
        unit: unit ? unit.name : '',
        shopCategory: shopCategory ? shopCategory.name : '',
      }));
    } else {
      setIdValid(false);
      setIngredient(prevState => ({
        ...prevState,
        id: '',
        name: '',
        unit: '',
        shopCategory: '',
        toBuy: true,
      }));
    }
  };

  const handleAmountChange = event => {
    const { target } = event;
    const { value } = target;
    const valueReplaced = value.replace(',', '.');
    setIngredient(prevState => ({
      ...prevState,
      amount: valueReplaced,
    }));
    setAmountValid(amountSchema.isValidSync(valueReplaced));
  };

  const handleAddIngredient = e => {
    e.preventDefault();
    if (amountSchema.isValidSync(ingredient.amount) && idSchema.isValidSync(ingredient.id)) {
      setIngredients(prevState => [...prevState, ingredient]);
      setIngredient(initialIngredient);
    } else {
      setIdValid(idSchema.isValidSync(ingredient.id));
      setAmountValid(amountSchema.isValidSync(ingredient.amount));
    }
  };

  const handleRemoveIngredient = (e, id) => {
    e.preventDefault();
    setIngredients(ingredients.filter(ingredientItem => ingredientItem.id !== id));
  };

  useEffect(() => {
    dispatch(fetchItems(ingredientItems));
    dispatch(fetchItems(unitItems));
    dispatch(fetchItems(shopCategoryItems));
    values.ingredients = ingredients;
  }, [dispatch, ingredientItems, unitItems, shopCategoryItems, ingredients, values, ingredient]);

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
              withAddingToFormikContext
              inline
            />
            {!isIdValid && <InputError absolute>This field is required</InputError>}
          </S.IngredientWrapper>

          <S.IngredientWrapper>
            <S.StyledInput
              as={Input}
              type="text"
              name="amount"
              value={ingredient.amount}
              label="amount*"
              onChange={handleAmountChange}
              ref={unitInputRef}
            />

            {!isAmountValid && <InputError absolute>This field must be a number</InputError>}
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
