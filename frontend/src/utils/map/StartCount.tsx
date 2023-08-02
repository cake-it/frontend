import { View } from 'react-native';

import Star from '@assets/images/map/star.svg';
import OffStar from '@assets/images/map/offStar.svg';

export const StarRating = ({ stars }: { stars: number }) => {
  // 별점에 따른 스타 배열 생성
  const starElements = Array.from({ length: 5 }, (_, index) =>
    index < stars ? <Star key={index} /> : <OffStar key={index} />
  );

  return <View style={{ flexDirection: 'row', gap: 4 }}>{starElements}</View>;
};
