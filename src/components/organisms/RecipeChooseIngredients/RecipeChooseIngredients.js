import React, { useEffect, useRef, useState } from 'react';
import { useFormikContext } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../../actions';
import BreakLine from '../../atoms/BreakLine/BreakLine';
import Modal from '../Modal/Modal';
import useModal from '../../../hooks/useModal';
import AddIngredientsForm from '../AddIngredientsForm/AddIngredientsForm';

const RecipeChooseIngredients = () => {
  const ingredientItems = 'ingredients';
  const unitItems = 'units';
  const { values } = useFormikContext();
  const dispatch = useDispatch();
  const items = useSelector(state => state[ingredientItems]);
  const units = useSelector(state => state[unitItems]);
  const unitTextElement = useRef(null);
  const [ingredient, setIngredient] = useState({
    id: 'wybierz składnik',
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
      <h3>Dodaj składniki</h3>
      <select name="id" value={ingredient.id} onChange={handleFormChange}>
        <option disabled="disabled">wybierz składnik</option>
        {items &&
          items.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
      </select>
      <input
        type="text"
        name="amount"
        value={ingredient.amount}
        placeholder="ilość"
        onChange={handleFormChange}
      />
      <span ref={unitTextElement}>{ingredient.unit}</span>
      <button type="button" onClick={handleAddIngredient}>
        dodaj
      </button>

      <div>
        <p>
          Jeżeli na liście nie ma potrzebnego składnika -
          <button type="button" onClick={toggleModal}>
            dodaj składnik
          </button>
          <Modal isModalOpen={isModalOpen} toggleModal={toggleModal}>
            <AddIngredientsForm />
          </Modal>
        </p>
      </div>

      <div>
        <h4>Składniki:</h4>
        <ul>
          {values.ingredients &&
            values.ingredients.length > 0 &&
            values.ingredients.map(item => (
              <li key={item.id}>
                {item.name} {item.amount} {item.unit}
              </li>
            ))}
        </ul>
      </div>

      <BreakLine />
    </div>
  );
};

export default RecipeChooseIngredients;
