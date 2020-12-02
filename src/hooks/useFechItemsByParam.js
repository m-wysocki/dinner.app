import useFetchItems from './useFetchItems';

const useFechItemsByParam = (itemsType, paramKey, paramValue) => {
  const items = useFetchItems(itemsType);
  const itemsFiltered = items ? items.filter(item => item[paramKey] === paramValue) : null;
  return itemsFiltered || [];
};

export default useFechItemsByParam;
