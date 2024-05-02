import { Breadcrumb, Typography } from "antd";

export const HeaderSettings = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div>
        <Breadcrumb
          items={[
            {
              title: "General",
            },
            {
              title: <a>Settings</a>,
            },
          ]}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          style={{
            textAlign: "left",
            fontSize: 36,
            fontWeight: 500,
          }}
        >
          Settings
        </Typography>
      </div>
    </div>
  );
};
