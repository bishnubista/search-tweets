import React from 'react';

import { fetchTweet } from './actions';

import { Search, Tweets, Filter } from './component';
import { useDispatch } from 'react-redux';

const data = { q: 'cycling' };
function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchTweet(data));
  }, [dispatch]);
  return (
    <div className='App'>
      <header className='App-header'>Tweet Feed</header>
      <Search />
      <Tweets />
      <Filter />
    </div>
  );
}

export default App;
