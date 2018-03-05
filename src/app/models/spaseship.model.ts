export interface Spaceship {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  type: string;
  isLongTripDedicated: boolean;
  capacity: number;
  isAndroidPilotOnboard: boolean;
  reservations: Reservation[];
  currentStation: Station;
}
