import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import slugify from 'react-slugify';
import { array, object, string } from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormikWizard from '../FormikWizard/FormikWizard';
import FormikWizardStep from '../FormikWizardStep/FormikWizardStep';
import { addItem } from '../../../actions';
import RecipeBasicInformation from '../RecipeBasicInformation/RecipeBasicInformation';
import RecipeSource from '../RecipeSource/RecipeSource';
import RecipeChooseIngredients from '../RecipeChooseIngredients/RecipeChooseIngredients';

const AddRecipeMultiStepForm = () => {
  const itemsType = 'recipes';
  const dispatch = useDispatch();
  const addRecipe = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));
  const history = useHistory();

  return (
    <>
      <ToastContainer />
      <FormikWizard
        initialValues={{
          name: '',
          image: '',
          categoryId: '',
          sourceType: 'link',
          bookId: '',
          bookSite: '',
          link: '',
          preparationTime: '',
          ingredients: [],
          slug: '',
        }}
        onSubmit={values => {
          // eslint-disable-next-line no-param-reassign
          values.slug = slugify(values.name);
          addRecipe(itemsType, values);
          toast.success('👌 The recipe was added successfully', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setTimeout(() => {
            history.push('/recipes');
          }, 2000);
        }}
      >
        <FormikWizardStep
          validationSchema={object({
            name: string()
              .min(3, 'Name is too short.')
              .required('This field is required'),
            categoryId: string()
              .min(3)
              .required('This field is required'),
          })}
        >
          <RecipeBasicInformation />
        </FormikWizardStep>

        <FormikWizardStep>
          <RecipeSource />
        </FormikWizardStep>

        <FormikWizardStep
          validationSchema={object({
            ingredients: array().min(1, 'Ingredients are required'),
          })}
        >
          <RecipeChooseIngredients />
        </FormikWizardStep>
      </FormikWizard>
    </>
  );
};

export default AddRecipeMultiStepForm;
