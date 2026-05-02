import { useState, type FC } from "react";
import "./ThirdStepTable.scss";
import {
  type ITableProps,
  Table,
  Button,
  Checkbox,
  ModalWindow,
} from "@/components";
import { useNavigate } from "react-router-dom";

interface IThirdStepTableProps extends ITableProps {
  onClick: () => void;
}

const ThirdStepTable: FC<IThirdStepTableProps> = ({
  columns,
  rows,
  onClick,
}) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState(false);
  const [modalWindowActive, setModalWindowActive] = useState(false);
  const [modalDeniedActive, setModalDeniedActive] = useState(false);
  return (
    <section className="thirdStepTable">
      <div className="thirdStepTable__header">
        <h1 className="thirdStepTable__title">
          Continuation of the application
        </h1>
        <span className="thirdStepTable__step">Step 3 of 5</span>
      </div>
      <Table columns={columns} rows={rows} />
      <div className="thirdStepTable__buttonsWrapper">
        <div className="thirdStepTable__buttonWrapper">
          <Button
            title="Deny"
            radius="small"
            size="large"
            isReject={true}
            onClick={() => setModalWindowActive(true)}
          />
        </div>
        <div className="thirdStepTable__checkWrapper">
          <Checkbox
            checked={checked}
            onChange={setChecked}
            label="I agree with the payment schedule"
          />
        </div>
        <div className="thirdStepTable__buttonWrapper">
          <Button
            title="Send"
            radius="small"
            size="large"
            isDisable={!checked}
            onClick={onClick}
          />
        </div>
      </div>
      <ModalWindow
        active={modalWindowActive}
        setActive={setModalWindowActive}
        title="Deny application"
      >
        <p className="thirdStepTable__denyParagraph">
          You exactly sure, you want to cancel this application?
        </p>
        <div className="thirdStepTable__denyButtonsWrapper">
          <div className="thirdStepTable__buttonWrapper">
            <Button
              title="Deny"
              radius="small"
              size="large"
              isReject={true}
              onClick={() => {
                setModalWindowActive(false);
                setModalDeniedActive(true);
              }}
            />
          </div>
          <div className="thirdStepTable__buttonWrapper">
            <Button
              title="Send"
              radius="small"
              size="large"
              onClick={() => setModalWindowActive(false)}
            />
          </div>
        </div>
      </ModalWindow>
      <ModalWindow
        active={modalDeniedActive}
        setActive={setModalDeniedActive}
        title="Deny application"
      >
        <p className="thirdStepTable__denyParagraph">
          Your application has been deny!
        </p>
        <div className="thirdStepTable__buttonWrapperDenied">
          <Button
            title="Send"
            radius="small"
            size="large"
            onClick={() => {
              setModalDeniedActive(false);
              navigate("/");
            }}
          />
        </div>
      </ModalWindow>
    </section>
  );
};

export { ThirdStepTable };
