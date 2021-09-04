export const getJokes = () => 
    fetch(process.env.REACT_APP_API).then((response) => response.json());