import React from 'react';
import PropTypes from 'prop-types';
import { object, string } from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Input from '../../atoms/Input/Input';
import InputLiveSearch from '../../atoms/InputLiveSearch/InputLiveSearch';
import { addItem } from '../../../actions';
import Heading from '../../atoms/Heading/Heading';
import Button from '../../atoms/Button/Button';
import InputError from '../../atoms/InputError/InputError';

const AddIngredientsForm = ({ name, toggleModal, afterSuccessFn }) => {
  const itemsType = 'ingredients';
  const dispatch = useDispatch();
  const addIngredients = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  return (
    <div>
      <Heading small>Add new ingredient</Heading>
      <Formik
        validationSchema={object({
          name: string()
            .min(3, 'Name is too short.')
            .required('This field is required'),
          unitId: string()
            .min(3)
            .required('This field is required'),
          shopCategoryId: string()
            .min(3)
            .required('This field is required'),
        })}
        initialValues={{
          name,
          unitId: '',
          shopCategoryId: '',
        }}
        onSubmit={values => {
          addIngredients(itemsType, values).then(ingredientId => {
            afterSuccessFn(ingredientId);
            toast.success('👌 The ingredient was added successfully');
            setTimeout(() => {
              toggleModal();
            }, 300);
          });
        }}
      >
        {() => (
          <Form>
            <Field name="name">
              {({ field }) => <Input id="name" name="name" label="Name*" {...field} />}
            </Field>
            <ErrorMessage name="name" component={InputError} />
            <InputLiveSearch
              withAddingToFormikContext
              name="unitId"
              searchItems="units"
              label="Search for a unit*"
              focusField
            />
            <ErrorMessage name="unitId" component={InputError} />
            <InputLiveSearch
              withAddingToFormikContext
              name="shopCategoryId"
              searchItems="shopCategories"
              label="Search shop category*"
            />
            <ErrorMessage name="shopCategoryId" component={InputError} />
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

AddIngredientsForm.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  afterSuccessFn: PropTypes.func,
  name: PropTypes.string,
};

AddIngredientsForm.defaultProps = {
  afterSuccessFn: () => null,
  name: '',
};
