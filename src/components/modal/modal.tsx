import React from "react";
import {  Modal } from "antd";
import { CustomModalProps } from "../../interfaces/modal";

export const ModalConfirm: React.FC<CustomModalProps> = ({
  message,
  ...props
}) => {
  return (
    <>
      <Modal
        transitionName=""
        title={
          <>
            <h3>{message}</h3>
          </>
        }
        {...props}
        footer={(_, { OkBtn, CancelBtn }) => (
          <div style={{ display: "flex" }}>
            <div style={{ flex: "1" }}>
              <CancelBtn />
            </div>
            <div style={{ flex: "1" }}>
              <OkBtn />
            </div>
          </div>
        )}
        width={300}
        centered
      ></Modal>
    </>
  );
};
