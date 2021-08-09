const initialState = {
  tweets: [],
  hashtags: [],
  max_id: '',
};

const chunkArray = (arr, index = 5) =>
  Array.isArray(arr) ? arr.filter((item, i) => i < index) : [];

const getHashtags = (data) => {
  let hashtags = [];
  if (Array.isArray(data)) {
    for (let item of data) {
      const hashtagArray = item.entities.hashtags;
      hashtagArray.forEach((element) => {
        hashtags.push(element.text);
      });
    }
  }

  return hashtags;
};
export const tweetsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TWITTER_SUCCESS': {
      const { statuses = [], search_metadata } = action.data?.body || {};
      const { max_id } = search_metadata || '';
      //   const tweets = chunkArray(statuses);
      const tweets = statuses;

      const hashtags = getHashtags(tweets);
      return {
        ...state,
        tweets: [...state.tweets, ...tweets],
        max_id,
        hashtags: [...state.hashtags, ...hashtags],
      };
    }

    default:
      return state;
  }
};
