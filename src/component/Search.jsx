import React from 'react';
import { useDispatch } from 'react-redux';

import { fetchTweet } from '../actions';

export function Search() {
  const [input, setInput] = React.useState('');
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (input.length > 3) {
      dispatch(fetchTweet({ q: input }));
    }
  }, [dispatch, input]);

  return (
    <div>
      <input
        id='search'
        type='text'
        placeholder='Search by keyword'
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
    </div>
  );
}
