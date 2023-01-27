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
import { Avatar, Card, Skeleton, Switch } from "antd";

const { Meta } = Card;
interface LA {
  launch: {
    launch_success: boolean;
    launch_site: {
      site_name_long: string;
    };
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

      <Card style={{ width: 300, marginTop: 16 }} loading={loading}>
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
      </Card>
    </>
  );
};

export default LunchCard;
