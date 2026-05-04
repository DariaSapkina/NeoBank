import { useState, type FC } from "react";
import "./ThirdStepTable.scss";
import { type ITableProps, Table, Button, Checkbox } from "@/components";
import { ModalsThirdStep } from "../ModalsThirdStep/ModalsThirdStep";

interface IThirdStepTableProps extends ITableProps {
  onClick: () => void;
}

const ThirdStepTable: FC<IThirdStepTableProps> = ({
  columns,
  rows,
  onClick,
}) => {
  const [checked, setChecked] = useState(false);
  const [modalWindowActive, setModalWindowActive] = useState(false);

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
      <ModalsThirdStep
        setModalWindowActive={setModalWindowActive}
        modalWindowActive={modalWindowActive}
      />
    </section>
  );
};

export { ThirdStepTable };
