// // import React from 'react';
// // import { useSelector } from 'react-redux';
// // import { RootState } from '../store';
// // import { Launch } from '../types';

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchLaunches } from "../Redux/ActionCreators";

// // const LaunchesList: React.FC = () => {
// //   const launches = useSelector((state: RootState) => state.launches);
// //   return (
// //     <List
// //       grid={{ gutter: 16, column: 4 }}
// //       dataSource={launches}
// //       renderItem={(launch: Launch) => (
// //         <List.Item>
// //           <Card
// //             hoverable
// //             title={launch.rocket.rocket_name}
// //             extra={launch.launch_date_utc}
// //             onClick={() => {}}
// //           >
// //             <p>
// //               {launch.launch_success ? 'Successful' : 'Failed'} launch from{' '}
// //               {launch.launch_site.site_name_long}
// //             </p>
// //           </Card>
// //         </List.Item>
// //       )}
// //     />
// //   );
// // };

// // .then((data) => console.log(data));

// const LaunchesList = () => {
//   // const add = () =>
//   //   axios
//   //     .get("https://api.spacexdata.com/v3/launches")
//   //     .then((res) => console.log(res));
//   const dispatch = useDispatch();
//   const any = useSelector((state) => state);
//   console.log(any);

//   console.log(ad);
//   useEffect(() => {}, [dispatch]);
//   dispatch({ type: "TEST", payload: "jjj" });

//   // if (status === "loading") {
//   //   return "loading...";
//   // }
//   // if (status === "error") {
//   //   return <div>Error</div>;
//   // }
//   return (
//     <div>
//       {/* {fetchLaunches?.map((launch: Object): void => (
//         <LaunchCard key={launch.flight_number} launch={launch} />
//       ))} */}
//       <button onClick={() => dispatch({ type: "dsdsds" })}> click</button>
//     </div>
//   );
// };

// export default LaunchesList;
import React from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchLaunches } from "../Redux/ActionCreators";
import LunchCard from "./LunchCard";

const LaunchesList = () => {
  const dispatch = useDispatch();
  const { launch }: any = useSelector((state) => state);
  // const status = useSelector((state) => state.status);
  // const error = useSelector((state) => state.error);
  console.log(launch);
  launch?.map((launches: any) => console.log(launches));
  // useEffect(() => {
  //   // dispatch(fetchLaunches());
  // }, [dispatch]);
  // dispatch({ type: "TEST", payload: "jjj" });
  // if (status === "loading") {
  //   return <p>Loading...</p>;
  // }

  // if (status === "failed") {
  //   return <p>Error: {error}</p>;
  // }
  useEffect(() => {
    dispatch(() => {
      fetch("https://api.spacexdata.com/v3/launches")
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: "FETCH_SUCCESS", payload: data });
        })
        .catch((error) => {
          dispatch({ type: "FETCH_ERROR", payload: error });
        });
    });
  }, []);
  return (
    <div>
      <ul>
        <button onClick={() => dispatch({ type: "dsdsds", payload: "sdas" })}>
          Click
        </button>

        <div
          style={{
            display: "flex",
          }}
        >
          {launch?.map((launches: any, i: number) => (
            <LunchCard key={i} launch={launches} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default LaunchesList;
