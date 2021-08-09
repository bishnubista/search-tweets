// export const fetchApiAction = (data) => {
//   post: (data) => ({ type: 'FETCH_TWITTER', data });
// };

export const fetchTweet = (query) => async (dispatch) => {
  try {
    const response = await fetch('/api/twitter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query),
    });
    const data = await response.json();
    dispatch({ type: 'FETCH_TWITTER_SUCCESS', data });
  } catch (err) {
    console.error('Error in ', err);
  }
};
