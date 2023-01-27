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

const { Meta } = Card;
interface LA {
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

const LunchCard: React.FC<LA> = ({ launch }) => {
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
      <Card
        hoverable
        className="p-3"
        style={{ width: 240 }}
        cover={<img alt="example" src={launch?.links?.mission_patch} />}
      >
        <Meta title={launch?.rocket?.rocket_name} />
        <p>Mission: {launch?.mission_name}</p>
        <Tooltip
          color={"volcano-inverse"}
          placement="bottom"
          title={launch?.details ? launch?.details : "no details"}
        >
          <Meta
            description={
              launch?.details
                ? launch?.details.length > 20 &&
                  launch?.details.substring(0, 30)
                : ""
            }
          />{" "}
        </Tooltip>
      </Card>
    </>
  );
};

export default LunchCard;
