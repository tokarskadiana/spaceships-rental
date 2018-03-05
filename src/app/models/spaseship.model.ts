export enum SpaceshipType {
  SMALL,
  MEDIUM,
  LARGE
}
export interface Spaceship {
  id: number;
  name: string;
  mainImageUrl: string;
  allImagesUrl: string[];
  shortDescription: string;
  description: string;
  type: SpaceshipType;
  isLongTripDedicated: boolean;
  capacity: number;
  isAndroidPilotOnboard: boolean;
  reservations: Reservation[];
  currentStation: Station;
}
