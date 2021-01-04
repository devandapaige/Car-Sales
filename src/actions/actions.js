const ADD_FEATURE = "ADD_FEATURE";
const addFeature = (itemId) => {
  return {
    type: ADD_FEATURE,
    payload: itemId,
  };
};

const REMOVE_FEATURE = "REMOVE_FEATURE";
const removeFeature = (itemId) => {
  return {
    type: REMOVE_FEATURE,
    payload: itemId,
  };
};

export { ADD_FEATURE, addFeature, REMOVE_FEATURE, removeFeature };
