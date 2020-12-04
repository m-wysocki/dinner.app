import React from 'react';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import Input from '../../atoms/Input/Input';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import { addItem } from '../../../actions';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';

const AddIngredientsForm = () => {
  const itemsType = 'ingredients';
  const dispatch = useDispatch();
  const addIngredients = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  return (
    <div>
      <Heading small>Add new ingredient</Heading>
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
              {({ field }) => <Input id="name" name="name" label="Name" {...field} />}
            </Field>
            <InputLiveSearch
              id="unitId"
              name="unitId"
              searchItems="units"
              label="Search for a unit"
            />
            <InputLiveSearch
              id="shopCategoryId"
              name="shopCategoryId"
              searchItems="shopCategories"
              label="Search shop category"
            />
            <Button small type="submit">
              add
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddIngredientsForm;
