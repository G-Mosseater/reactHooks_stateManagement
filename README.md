
# Followed a tutorial in which I built an app showing how to create a **lightweight global store** in React without Redux.

## Features
- Custom `useStore` hook with `dispatch` actions  
- `shouldListen` flag to control re-renders  
- `React.memo` to prevent unnecessary updates  
- Toggle product favorites with `TOGGLE_FAV` action  
- Unique keys on product items  

## Flow
1. `Products` subscribes to store (`useStore(true)`)  
2. `ProductItem` only dispatches (`useStore(false)`)  
3. Only the updated product re-renders  
