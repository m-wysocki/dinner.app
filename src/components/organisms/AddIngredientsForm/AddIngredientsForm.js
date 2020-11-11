import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import Input from '../../atoms/Input/Input';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import { addItem } from '../../../actions';

const AddIngredientsForm = () => {
  const itemsType = 'ingredients';
  const dispatch = useDispatch();
  const addIngredients = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  return (
    <div>
      <h3>Dodaj składniki do bazy</h3>
      <Formik
        initialValues={{
          name: '',
          unitId: '',
          shopCategoryId: '',
        }}
        onSubmit={values => {
          addIngredients(itemsType, values);
        }}
      >
        {() => (
          <Form>
            <Field name="name">
              {({ field }) => <Input id="name" name="name" label="Tytuł" {...field} />}
            </Field>
            <InputLiveSearch
              id="unitId"
              name="unitId"
              searchItems="units"
              label="Wyszukaj jednostkę"
            />
            <InputLiveSearch
              id="shopCategoryId"
              name="shopCategoryId"
              searchItems="shopCategories"
              label="Wyszukaj kategorię sklepową"
            />
            <button type="submit">dodaj składnik do bazy</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddIngredientsForm;
