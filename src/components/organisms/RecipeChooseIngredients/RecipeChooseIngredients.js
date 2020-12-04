import React, { useEffect, useRef, useState } from 'react';
import { useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../actions';
import Modal from '../Modal/Modal';
import useModal from '../../../hooks/useModal';
import AddIngredientsForm from '../AddIngredientsForm/AddIngredientsForm';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import Select from '../../atoms/Select/Select';
import Input from '../../atoms/Input/Input';
import * as S from './RecipeChooseIngredientsStyles';

const RecipeChooseIngredients = () => {
  const ingredientItems = 'ingredients';
  const unitItems = 'units';
  const { values } = useFormikContext();
  const dispatch = useDispatch();
  const items = useSelector(state => state[ingredientItems]);
  const units = useSelector(state => state[unitItems]);
  const unitTextElement = useRef(null);
  const [ingredient, setIngredient] = useState({
    id: '',
    name: '',
    amount: '',
    unit: '',
  });
  const [ingredients, setIngredients] = useState(values.ingredients);

  const handleFormChange = event => {
    const { target } = event;
    const { name, value } = target;
    if (name === 'id') {
      const selectedIngredient = items.filter(item => item.id === value)[0];
      const unit = units.filter(item => item.id === selectedIngredient.unitId)[0];
      setIngredient(prevState => ({
        ...prevState,
        [name]: value,
        name: selectedIngredient.name,
        unit: unit.name,
      }));
    } else {
      setIngredient(prevState => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleAddIngredient = e => {
    e.preventDefault();
    setIngredients(prevState => [...prevState, ingredient]);
  };

  useEffect(() => {
    dispatch(fetchItems(ingredientItems));
    dispatch(fetchItems(unitItems));
    values.ingredients = ingredients;
  }, [dispatch, ingredientItems, unitItems, ingredients, values]);

  const { isModalOpen, toggleModal } = useModal();

  return (
    <div>
      <Heading small>Add ingredients</Heading>
      <S.Content>
        <S.AddIngredient>
          <Select
            name="id"
            value={ingredient.id}
            label="Select ingredient"
            firstOption=""
            onChangeFn={handleFormChange}
            items={items && [{ id: '', name: '', isDisabled: true }, ...items]}
          />
          <S.StyledInput
            as={Input}
            type="text"
            name="amount"
            value={ingredient.amount}
            label="amount"
            onChange={handleFormChange}
          />
          <S.Unit ref={unitTextElement}>{ingredient.unit}</S.Unit>
          <Button secondary small type="button" onClick={handleAddIngredient}>
            add
          </Button>
        </S.AddIngredient>

        <S.MissingIngredient>
          <p>The ingredient you need isn't on the list?</p>
          <Button small secondary type="button" onClick={toggleModal}>
            add ingredient
          </Button>
          <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
            <AddIngredientsForm />
          </Modal>
        </S.MissingIngredient>
      </S.Content>

      {values.ingredients && values.ingredients.length > 0 && (
        <S.IngredientList>
          <Heading small>Ingredients</Heading>
          <ul>
            {values.ingredients.map(item => (
              <li key={item.id}>
                {item.name} {item.amount} {item.unit}
              </li>
            ))}
          </ul>
        </S.IngredientList>
      )}
    </div>
  );
};

export default RecipeChooseIngredients;
