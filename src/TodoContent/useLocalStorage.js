import React from 'react';

function useLocalStorage(itemName, initValue) {
    const [item, setItem] = React.useState(initValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    
    React.useEffect( () => {
      setTimeout(() => {
        try {
          let localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initValue));
            parsedItem = initValue;
          }
          else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          }
  
          setLoading(false);
        } catch(error){
          setError(true);
          setLoading(false);
        }
        
      }, 2000);
    }, [ ]);
    
    
  
    
    const saveItem = (newItems) => {
      localStorage.setItem(itemName, JSON.stringify(newItems));
      setItem(newItems);
    }
  
    return {
      item, 
      saveItem, 
      loading, 
      error
    };
  }

  export { useLocalStorage };