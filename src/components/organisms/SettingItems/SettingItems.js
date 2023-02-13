import React from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import DeleteButton from '../../atoms/DeleteButton/DeleteButton';
import { removeItem } from '../../../actions';

export const ItemWrapper = styled.div`
  margin-bottom: 15px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledDeleteButton = styled(DeleteButton)`
  align-self: center;
`;

export const IngredientMoreInfo = styled.div`
  font-size: 1.4rem;
  font-style: italic;
`;

const SettingItems = ({ items, itemsType, units, shopCategiories }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = async id => {
    try {
      await dispatch(removeItem(itemsType, id));
      toast.success('The recipe has been removed successfully');
    } catch (e) {
      toast.error("Something went wrong :( The recipe hasn't been removed");
    }
  };

  const getMoreInfoOfIngredient = (unitId, shopCategoryId) => {
    if (!unitId || itemsType !== 'ingredients') return null;

    const unitName = units?.filter(unit => unit?.id === unitId)[0]?.name;
    const shopCategoryName = shopCategiories?.filter(
      shopCategory => shopCategory?.id === shopCategoryId,
    )[0]?.name;

    return `(unit: ${unitName}, ${shopCategoryName})`;
  };

  return (
    <ul>
      {items?.map(item => (
        <ItemWrapper key={item?.id}>
          <Item>
            <li>{item?.name}</li>
            <StyledDeleteButton onClickFn={() => handleDeleteClick(item?.id)} />
          </Item>
          {itemsType === 'ingredients' && (
            <IngredientMoreInfo>
              {getMoreInfoOfIngredient(item?.unitId, item?.shopCategoryId)}
            </IngredientMoreInfo>
          )}
        </ItemWrapper>
      ))}
    </ul>
  );
};

export default SettingItems;
