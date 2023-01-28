// import React from "react";

// const LunchCard = ({ launch }: any) => {
//   console.log(launch);
//   return (
//     <div>
//       {/* <Card
//         hoverable
//         title={launch.rocket.rocket_name}
//         extra={launch.launch_date_utc}
//         onClick={() => {}}
//       >
//         <p>
//           {launch.launch_success ? "Successful" : "Failed"} launch from{" "}
//           {launch.launch_site.site_name_long}
//         </p>
//       </Card> */}

//     </div>
//   );
// };

// export default LunchCard;
import React, { useState } from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Skeleton, Switch, Tooltip } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
interface LA {
  launch: {
    flight_number: number;
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

const LunchCard: React.FC<LA> = ({ launch }): any => {
  const [loading, setLoading] = useState(false);

  const onChange = (checked: boolean) => {
    setLoading(!checked);
  };

  return (
    <>
      {/* <Switch checked={!loading} onChange={onChange} /> */}

      {/* <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
        <Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title="Card title"
          description="This is the description"
        />
        <p>
          {launch.launch_success ? "Successful" : "Failed"} launch from{" "}
          {launch.launch_site.site_name_long}
        </p>
      </Card>

      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Skeleton loading={loading} avatar active>
          <Meta
            avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
            title="Card title"
            description="This is the description"
          />
        </Skeleton>
      </Card> */}
      <Tooltip
        color={"volcano-inverse"}
        placement="bottom"
        title={launch?.details ? launch?.details : "no details"}
      >
        <Link to={`singleflight/${launch.flight_number}`}>
          <Card
            hoverable
            style={{ width: 240, padding: 6 }}
            cover={<img alt="example" src={launch?.links?.mission_patch} />}
          >
            <Meta title={launch?.rocket?.rocket_name} />
            <p>Mission: {launch?.mission_name}</p>
            <Meta
              description={
                launch?.details
                  ? launch?.details.length > 20 &&
                    launch?.details.substring(0, 30)
                  : ""
              }
            />{" "}
          </Card>
        </Link>
      </Tooltip>
    </>
  );
};

export default LunchCard;
