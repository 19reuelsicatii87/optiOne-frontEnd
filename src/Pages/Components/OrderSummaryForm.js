import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../../Assets/css/OrderPaymentForm.css'
import withRouter from './WithRouter'


function OrderSummaryForm(props) {

    useEffect(() => {



        retrievePackage();

    }, []);

    // Packages, Delivery and Option States
    // =================================================
    const navigate = useNavigate();
    const [membershipPackageDetails, setMembershipPackageDetails] = useState([]);
    const [orderStatus, setOrderStatus] = useState("");
    const [orderCode, setOrderCode] = useState();


    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [landline, setLandline] = useState("");


    const [houseBuildname, setHouseBuildname] = useState("");
    const [street, setStreet] = useState("");
    const [barangray, setBarangray] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");

    const [deliveryOption, setDeliveryOption] = useState();
    const [deliveryFee, setDeliveryFee] = useState();
    const [paymentOption, setPaymentOption] = useState();
    const [paymentFee, setPaymentFee] = useState();
    const [filePath, setFilePath] = useState();


    async function retrievePackage() {
        let requestOrderPackage = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/getPackage/' + props.router.params.order_code,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseOrderPackage = await axios(requestOrderPackage);
        console.log(responseOrderPackage);

        // Order Package Object
        // ================================     
        setMembershipPackageDetails(JSON.parse(responseOrderPackage.data[0].membership_package));
        setOrderCode(responseOrderPackage.data[0].order_code);
        setOrderStatus(responseOrderPackage.data[0].order_status);


        setFullname(responseOrderPackage.data[0].fullname);
        setEmail(responseOrderPackage.data[0].email);
        setMobile(responseOrderPackage.data[0].mobile);
        setLandline(responseOrderPackage.data[0].landline);


        setHouseBuildname(responseOrderPackage.data[0].houseBuild_name);
        setStreet(responseOrderPackage.data[0].street);
        setBarangray(responseOrderPackage.data[0].barangray);
        setCity(responseOrderPackage.data[0].city);
        setProvince(responseOrderPackage.data[0].province);
        setZipCode(responseOrderPackage.data[0].zipCode);


        setDeliveryOption(responseOrderPackage.data[0].delivery_option);
        setDeliveryFee(responseOrderPackage.data[0].delivery_fee);
        setPaymentOption(responseOrderPackage.data[0].payment_option);
        setPaymentFee(responseOrderPackage.data[0].payment_fee);
        setFilePath(responseOrderPackage.data[0].slip_file_path);


    }

    function orderStatusRender() {

        switch (orderStatus) {
            case 'Order Payment':
                return (
                    <>
                        <div className="steps-active">Order Placed</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Order Payment</div>
                        <span className="line-notActive"></span>
                        <div className="steps-notActive">Payment Validation</div>
                        <span className="line-notActive"></span>
                        <div className="steps-notActive">Order Sent</div>
                        <span className="line-notActive"></span>
                        <div className="steps-notActive">Order Delivered</div>
                    </>
                )
            case 'Payment Validation':
                return (
                    <>
                        <div className="steps-active">Order Placed</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Order Payment</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Payment Validation</div>
                        <span className="line-notActive"></span>
                        <div className="steps-notActive">Order Sent</div>
                        <span className="line-notActive"></span>
                        <div className="steps-notActive">Order Delivered</div>
                    </>
                )
            case 'Order Sent':
                return (
                    <>
                        <div className="steps-active">Order Placed</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Order Payment</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Payment Validation</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Order Sent</div>
                        <span className="line-notActive"></span>
                        <div className="steps-notActive">Order Delivered</div>
                    </>
                )

            case 'Order Delivered':
                return (
                    <>
                        <div className="steps-active">Order Placed</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Order Payment</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Payment Validation</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Order Sent</div>
                        <span className="line-active"></span>
                        <div className="steps-active">Order Delivered</div>
                    </>
                )
        }

    }











    return (
        <section id="order-package-form">
            <div className="container mt-5">

                <h1 className="text-start text-primary mb-0">Order Summary Details</h1>
                <div className="row my-5">
                    <div className="container">
                        <h4 className="text-start text-primary mb-0">Order Tracking</h4>
                        <p className="text-start m-0 p-0"><sub >Ensure to copy this code for tracking purposes</sub></p>
                        <h5 className="text-start text-light m-0 p-2 bg-primary"><b>Order Tracking Code: </b>{orderCode}</h5>

                        {/* Status Bar Step */}
                        {/* ======================================== */}
                        <div className="mt-3">
                            <div className="d-flex flex-row justify-content-center align-items-center">
                                {orderStatusRender()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <div className="d-flex flex-row mb-4">
                            <div className="col-md-5 mx-1">
                                <h4 className="text-start text-primary">Member Details</h4>
                                <div className="my-1" style={{ paddingLeft: "0.5em" }}>
                                    <p className="text-start mb-0 fw-bold">FullName:</p>
                                    <p className="text-start mb-0">{fullname}</p>
                                    <p className="text-start mb-0 fw-bold">Email:</p>
                                    <p className="text-start mb-0">{email}</p>
                                    <p className="text-start mb-0 fw-bold">Mobile:</p>
                                    <p className="text-start mb-0">{mobile}</p>
                                    <p className="text-start mb-0 fw-bold">Landline:</p>
                                    <p className="text-start mb-0">{landline}</p>
                                </div>
                            </div>
                            <div className="col-md-7 mx-1">
                                <h4 className="text-start text-primary">Address Details</h4>
                                <div className="my-1" style={{ paddingLeft: "0.5em" }}>
                                    <p className="text-start mb-0"><b>House | Building:</b> {houseBuildname}</p>
                                    <p className="text-start mb-0"><b>Street:</b> {street}</p>
                                    <p className="text-start mb-0"><b>Barangay:</b> {barangray}</p>
                                    <p className="text-start mb-0"><b>City:</b> {city}</p>
                                    <p className="text-start mb-0"><b>Province:</b> {province}</p>
                                    <p className="text-start mb-0"><b>ZipCode:</b> {zipCode}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-start text-primary mb-2">Membership Package Summary</h4>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="col-6">Description</th>
                                        <th className="col-2">Price</th>
                                        <th className="col-1">Quantity</th>
                                        <th className="col-3">SubTotal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {membershipPackageDetails.map((membershipPackageDetail, index) =>
                                        <tr key={index}>
                                            <td className="align-middle">{membershipPackageDetail.package}</td>
                                            <td className="align-middle">{(membershipPackageDetail.price * 1).toFixed(2)}</td>
                                            <td className="align-middle">{membershipPackageDetail.quantity}</td>
                                            <td className="align-middle">{membershipPackageDetail.subTotal == "" ? "" : (membershipPackageDetail.subTotal * 1).toFixed(2)}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td className="align-middle">
                                            <p className="mb-0">Delivery Fees:</p>
                                            <p className="mb-0">{deliveryOption}</p>
                                        </td>
                                        <td className="align-middle">{(deliveryFee * 1).toFixed(2)}</td>
                                        <td className="align-middle"></td>
                                        <td className="align-middle">{(deliveryFee * 1).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">
                                            <p className="mb-0">Others:</p>
                                            <p className="mb-0">{paymentOption}</p>
                                        </td>
                                        <td className="align-middle">{(paymentFee * 1).toFixed(2)}</td>
                                        <td className="align-middle"></td>
                                        <td className="align-middle">{(paymentFee * 1).toFixed(2)}</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle">Discounts</td>
                                        <td className="align-middle">TBD</td>
                                        <td className="align-middle"></td>
                                        <td className="align-middle">0.00</td>
                                    </tr>
                                    <tr>
                                        <td className="align-middle"></td>
                                        <td className="align-middle"></td>
                                        <th className="align-middle">Total</th>
                                        <td className="align-middle">
                                            {membershipPackageDetails.length == 0 ?
                                                ((deliveryFee * 1) + (paymentFee * 1)).toFixed(2) :
                                                (membershipPackageDetails
                                                    .map(membershipPackageDetail => membershipPackageDetail.subTotal)
                                                    .reduce((prev, next) => prev + next)
                                                    + (deliveryFee * 1) + (paymentFee * 1)).toFixed(2)
                                            }
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2 bg-primary">
                        <div className="mb-4">
                            <h4 className="text-start text-white my-3">Payment Slip</h4>
                            <div className="my-1">
                                <img src={`http://localhost:8000/` + filePath} className="img-fluid img-thumbnail" 
                                alt="Payment Slip" style={{ maxHeight: "35em"}}></img>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default withRouter(OrderSummaryForm)
