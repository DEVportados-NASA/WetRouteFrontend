export interface PredictionDto {
  id: number;
  date: Date;
  max_temperature: number;
  min_temperature: number;
  average_temperature: number;
  rain_probability_percentage: number;
  cloud_cover_percentage: number;
  createdAt: Date;
}
