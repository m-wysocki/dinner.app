import useFetchItems from './useFetchItems';

const useFetchItemsByParam = (itemsType, paramKey, paramValue) => {
  const items = useFetchItems(itemsType);
  const itemsFiltered = items ? items.filter(item => item[paramKey] === paramValue) : null;
  return itemsFiltered || [];
};

export default useFetchItemsByParam;
