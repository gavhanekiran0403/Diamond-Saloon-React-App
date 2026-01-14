import React from "react";
import "./PaymentList.css";
const PaymentList = () => {

    return(
        <div className="payment-page">

            <h1 className="payment-title">Payment List</h1>

            <div className="payment-table-wrapper">
                <table>
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Payment ID</th>
                            <th>Appointment ID</th>
                            <th>Order ID</th>
                            <th>Amount</th>
                            <th>Payment Method</th>
                            <th>Payment Status</th>
                            <th>Transaction ID</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentList;