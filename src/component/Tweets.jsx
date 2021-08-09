import React from 'react';
import { useSelector } from 'react-redux';

import { Tweet } from './Tweet';
import { Image } from './Image';

export function Tweets() {
  const tweetsList = useSelector((state) => state.tweetsList);
  const { tweets } = tweetsList;
  console.log('tweets ', tweets);
  return (
    <div>
      <Image />
      <Tweet />
    </div>
  );
}
