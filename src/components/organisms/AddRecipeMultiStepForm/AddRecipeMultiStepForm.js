import React from 'react';
import { useDispatch } from 'react-redux';
import slugify from 'react-slugify';
import FormikWizard from '../FormikWizard/FormikWizard';
import FormikWizardStep from '../FormikWizardStep/FormikWizardStep';
import { addItem } from '../../../actions';
import RecipeBasicInformation from '../RecipeMainInformation/RecipeBasicInformation';
import RecipeSource from '../RecipeSource/RecipeSource';
import RecipeChooseIngredients from '../RecipeChooseIngredients/RecipeChooseIngredients';

const AddRecipeMultiStepForm = () => {
  const itemsType = 'recipes';
  const dispatch = useDispatch();
  const addRecipe = (itemType, itemContent) => dispatch(addItem(itemType, itemContent));

  return (
    <FormikWizard
      initialValues={{
        name: '',
        image: 'https://picsum.photos/id/1068/400/300',
        categoryId: '',
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
      }}
    >
      <FormikWizardStep>
        <RecipeBasicInformation />
      </FormikWizardStep>

      <FormikWizardStep>
        <RecipeSource />
      </FormikWizardStep>

      <FormikWizardStep>
        <RecipeChooseIngredients />
      </FormikWizardStep>
    </FormikWizard>
  );
};

export default AddRecipeMultiStepForm;
