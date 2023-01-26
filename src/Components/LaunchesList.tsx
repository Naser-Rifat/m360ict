// import React from 'react';
// import { useSelector } from 'react-redux';
// import { RootState } from '../store';
// import { Launch } from '../types';
import { Spin } from "antd";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { RootState } from "../Redux/store";

// const LaunchesList: React.FC = () => {
//   const launches = useSelector((state: RootState) => state.launches);
//   return (
//     <List
//       grid={{ gutter: 16, column: 4 }}
//       dataSource={launches}
//       renderItem={(launch: Launch) => (
//         <List.Item>
//           <Card
//             hoverable
//             title={launch.rocket.rocket_name}
//             extra={launch.launch_date_utc}
//             onClick={() => {}}
//           >
//             <p>
//               {launch.launch_success ? 'Successful' : 'Failed'} launch from{' '}
//               {launch.launch_site.site_name_long}
//             </p>
//           </Card>
//         </List.Item>
//       )}
//     />
//   );
// };

// export default LaunchesList;
const LaunchesList: React.FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state: RootState) => state.launches);

  useEffect(() => {
    dispatch(fetchLaunches());
  }, [dispatch]);

  if (status === "loading") {
    return <Spin />;
  }
  if (status === "error") {
    return <div>Error</div>;
  }
  return (
    <div>
      {data.map((launch: Object) => (
        <LaunchCard key={launch.flight_number} launch={launch} />
      ))}
    </div>
  );
};

export default LaunchesList;
