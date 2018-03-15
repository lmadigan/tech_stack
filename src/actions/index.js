export const selectLibrary = (libraryId) => {
  return {
    type: 'select_library',
    payload: libraryId
  };
};


//action creators are functions that return actions
//actions are objects with type properties that tell the application
//how to mutate the state - tell reducer to update in a very specific fashion
