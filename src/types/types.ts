export interface Launch {
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
  launch_success: boolean;
  rocket: {
    rocket_name: string;
    rocket_type: string;
  };
  launch_site: {
    site_name_long: string;
  };
}
