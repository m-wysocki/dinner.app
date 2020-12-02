import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../actions';

const useFetchItems = itemsType => {
  const items = useSelector(state => state[itemsType]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItems(itemsType));
  }, [dispatch, itemsType]);

  return items;
};

export default useFetchItems;
