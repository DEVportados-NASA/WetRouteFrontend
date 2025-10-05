export interface ActivityRecommendationDto {
  id: number;
  cacheKey: string;
  createdAt: Date;
  items: ActivityRecommendationItemDto[];
}

export interface ActivityRecommendationItemDto {
  id: number;
  city: string;
  reason: string;
  ranking: number;
}
