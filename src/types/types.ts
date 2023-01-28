export interface Launch {
  launch: {
    launch_success: boolean;
    launch_site: {
      site_name_long: string;
    };
    links: {
      mission_patch: string;
    };
    mission_name: string;
    details: string;
    rocket: { rocket_name: string };
  };
}
