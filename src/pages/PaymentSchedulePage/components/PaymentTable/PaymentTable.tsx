import { useState, type FC } from "react";
import { type ITableProps, Table, Button, Checkbox } from "@/components";
import { PaymentModals } from "../PaymentModals/PaymentModals";
import "./PaymentTable.scss";

interface IPaymentTableProps extends ITableProps {
  onClick: () => void;
};

const PaymentTable: FC<IPaymentTableProps> = ({ columns, rows, onClick }) => {
  const [checked, setChecked] = useState(false);
  const [modalWindowActive, setModalWindowActive] = useState(false);

  return (
    <div className="paymentTable">
      <div className="paymentTable__header">
        <h1 className="paymentTable__title">Continuation of the application</h1>
        <span className="paymentTable__step">Step 3 of 5</span>
      </div>
      <Table columns={columns} rows={rows} />
      <div className="paymentTable__buttonsWrapper">
        <div className="paymentTable__buttonWrapper">
          <Button
            title="Deny"
            radius="small"
            size="large"
            isReject={true}
            onClick={() => setModalWindowActive(true)}
          />
        </div>
        <div className="paymentTable__checkWrapper">
          <Checkbox
            checked={checked}
            onChange={setChecked}
            label="I agree with the payment schedule"
          />
        </div>
        <div className="paymentTable__buttonWrapper">
          <Button
            title="Send"
            radius="small"
            size="large"
            isDisable={!checked}
            onClick={onClick}
          />
        </div>
      </div>
      <PaymentModals
        setModalWindowActive={setModalWindowActive}
        modalWindowActive={modalWindowActive}
      />
    </div>
  );
};

export { PaymentTable };
