export type VehicleLocation = {
  vehicleId: string;
  location: {
    lat: number;
    lng: number;
  };
  timestamp: Date;
};
