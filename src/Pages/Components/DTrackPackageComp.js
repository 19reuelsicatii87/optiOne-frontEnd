import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap'
import axios from 'axios'
import withRouter from './WithRouter'

function DTrackPackageComp() {

    useEffect(() => {

        retrieveOptiPackages();
        retrieveDeliveryOptions();
        retrievePaymentOptions();

    }, []);


    // Packages, Delivery and Option States
    // =================================================
    const [optiPackages, setOptiPackages] = useState([])
    const [DBDeliveryOptions, setDBDeliveryOptions] = useState([]);
    const [DBPaymentOptions, setDBPaymentOptions] = useState([]);
    const genderOptions = ["Female", "Male"];
    const civilStatusOptions = ["Single", "Married", "Divorced or Seperated", "Widow or Widower"];
    const orderStatusOptions = ["Order Placed", "Order Payment", "Payment Validation", "Order Sent", "Order Delivered"];

    // Add Packages States
    // =================================================
    const [membershipPackage, setMembershipPackage] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    // Packages States
    // =================================================
    const [modalShowSuccess, setModalShowSuccess] = useState(false);
    const [modalShowError, setModalShowError] = useState(false);
    const [id, setID] = useState("");
    const [packageDetails, setPackageDetails] = useState([]);
    const [orderCode, setOrderCode] = useState("");
    const [orderStatus, setOrderStatus] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [landline, setLandLine] = useState("");
    const [gender, setGender] = useState("");
    const [civilStatus, setCivilStatus] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [filePath, setFilePath] = useState("");
    const [houseBuildName, setHouseBuildName] = useState("");
    const [street, setStreet] = useState("");
    const [barangray, setBarangray] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [deliveryOption, setDeliveryOption] = useState("");
    const [deliveryFee, setDeliveryFee] = useState("");
    const [paymentOption, setPaymentOption] = useState("");
    const [paymentFee, setPaymentFee] = useState("");
    const [discount, setDiscount] = useState("");
    const [total, setTotal] = useState("");


    async function retrievePackage(trackingCode) {


        let requestPackage = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/getPackage/' + trackingCode,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responsePackage = await axios(requestPackage);

        setID(responsePackage.data[0].id);
        setPackageDetails(JSON.parse(responsePackage.data[0].membership_package));
        setOrderCode(responsePackage.data[0].order_code);
        setOrderStatus(responsePackage.data[0].order_status);
        setFullname(responsePackage.data[0].fullname);
        setEmail(responsePackage.data[0].email);
        setMobile(responsePackage.data[0].mobile);
        setLandLine(responsePackage.data[0].landline);
        setGender(responsePackage.data[0].gender);
        setCivilStatus(responsePackage.data[0].civil_status);
        setDateOfBirth(responsePackage.data[0].date_of_birth);
        setFilePath(responsePackage.data[0].slip_file_path);
        setHouseBuildName(responsePackage.data[0].houseBuild_name);
        setStreet(responsePackage.data[0].street);
        setBarangray(responsePackage.data[0].barangray);
        setCity(responsePackage.data[0].city);
        setProvince(responsePackage.data[0].province);
        setZipCode(responsePackage.data[0].zipCode);
        setDeliveryOption(responsePackage.data[0].delivery_option);
        setDeliveryFee(responsePackage.data[0].delivery_fee);
        setPaymentOption(responsePackage.data[0].payment_option);
        setPaymentFee(responsePackage.data[0].payment_fee);
        setDiscount(responsePackage.data[0].discount);
        setTotal(responsePackage.data[0].total);

        console.log(JSON.parse(responsePackage.data[0].member_package));

    }

    async function retrieveOptiPackages() {
        let requestOptiPackages = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listOptiPackages',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseOptiPackages = await axios(requestOptiPackages);
        setOptiPackages(responseOptiPackages.data);
    }

    const addPackageItem = () => {

        packageDetails.push(
            {
                package: membershipPackage,
                quantity: quantity,
                price: price,
                subTotal: quantity * price
            })

        // To call usestate and re-render, update to state is needed
        // To qualify as update,  you have to destroy the OLD array and create a new one
        setPackageDetails([...packageDetails]);
        console.log(packageDetails);

    }

    async function updatePackage() {

        if (!fullname || !email || !mobile) {

            console.log("One or all fields are empty");
            setModalShowError(true);

        }

        else {


            let formData = new FormData();
            formData.append('id', id);
            formData.append('membership_package', JSON.stringify(packageDetails));
            formData.append('order_code', orderCode);
            formData.append('order_status', orderStatus);
            formData.append('fullname', fullname);
            formData.append('email', email);
            formData.append('mobile', mobile);
            formData.append('landline', landline);
            formData.append('gender', gender);
            formData.append('civil_status', civilStatus);
            formData.append('date_of_birth', dateOfBirth);
            formData.append('slip_file_path', filePath);
            formData.append('houseBuild_name', houseBuildName);
            formData.append('street', street);
            formData.append('barangray', barangray);
            formData.append('city', city);
            formData.append('province', province);
            formData.append('zipCode', zipCode);
            formData.append('delivery_option', deliveryOption);
            formData.append('delivery_fee', deliveryFee);
            formData.append('payment_option', paymentOption);
            formData.append('payment_fee', paymentFee);
            // formData.append('discount', discount);
            formData.append('total', packageDetails.length == 0 ?
                (deliveryFee * 1) + (paymentFee * 1) :
                (packageDetails
                    .map(packageDetail => packageDetail.subTotal)
                    .reduce((prev, next) => prev + next)
                    + (deliveryFee * 1) + (paymentFee * 1)));



            let requestUpdatePackage = {
                method: 'POST',
                url: process.env.REACT_APP_BACKENDURL + '/api/updatePackageFromDashboard',
                headers: {
                    "Content-Type": 'multipart/form-data',
                    "Accept": 'application/json'
                },
                data: formData
            }

            let responseUpdatePackage = await axios(requestUpdatePackage);
            setID(responseUpdatePackage.data.id);
            setPackageDetails(JSON.parse(responseUpdatePackage.data.membership_package));
            setOrderCode(responseUpdatePackage.data.order_code);
            setOrderStatus(responseUpdatePackage.data.order_status);
            setFullname(responseUpdatePackage.data.fullname);
            setEmail(responseUpdatePackage.data.email);
            setMobile(responseUpdatePackage.data.mobile);
            setLandLine(responseUpdatePackage.data.landline);
            setGender(responseUpdatePackage.data.gender);
            setCivilStatus(responseUpdatePackage.data.civil_status);
            setDateOfBirth(responseUpdatePackage.data.date_of_birth);
            setFilePath(responseUpdatePackage.data.slip_file_path);
            setHouseBuildName(responseUpdatePackage.data.houseBuild_name);
            setStreet(responseUpdatePackage.data.street);
            setBarangray(responseUpdatePackage.data.barangray);
            setCity(responseUpdatePackage.data.city);
            setProvince(responseUpdatePackage.data.province);
            setZipCode(responseUpdatePackage.data.zipCode);
            setDeliveryOption(responseUpdatePackage.data.delivery_option);
            setDeliveryFee(responseUpdatePackage.data.delivery_fee);
            setPaymentOption(responseUpdatePackage.data.payment_option);
            setPaymentFee(responseUpdatePackage.data.payment_fee);
            setDiscount(responseUpdatePackage.data.discount);
            setTotal(responseUpdatePackage.data.total);
            setModalShowSuccess(true);
        }


    }

    async function retrieveDeliveryOptions() {
        let requestDeliveryOptions = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listDeliveryOptions',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseDeliveryOptions = await axios(requestDeliveryOptions);
        setDBDeliveryOptions(responseDeliveryOptions.data);
    }

    async function retrievePaymentOptions() {
        let requestPaymentOptions = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listPaymentOptions',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responsePaymentOptions = await axios(requestPaymentOptions);
        setDBPaymentOptions(responsePaymentOptions.data);
    }


    return (
        <section id="Dashboard-Package-View">
            <div className='container mt-5'>
                <h1 className="text-start text-primary mb-3">Package Form</h1>
                <div className='row d-flex justify-content-start'>
                    <div className="col-lg-6 ">
                        <InputGroup className="mb-3">
                            <Button
                                onClick={() => retrievePackage(orderCode)}
                                variant="btn btn-primary">Track</Button>
                            <FormControl
                                className="mx-2"
                                placeholder="Order Tracking Code"
                                aria-label="Name or Description"
                                aria-describedby="basic-addon2"
                                onChange={(e) => setOrderCode(e.target.value)}
                            />
                        </InputGroup>
                    </div>
                </div>
            </div>
            <div className="container mt-4">


                <div className="row">
                    <div className="col-md-5 mb-2">
                        <h4 className="text-start text-primary">Order Details</h4>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Order Status</p>
                            <select className="form-control"
                                onChange={(e) => setOrderStatus(e.target.value)}>
                                <option defaultValue={orderStatus}>{orderStatus != null ? orderStatus : 'Select Status'}</option>
                                {orderStatusOptions.map((orderStatusOption) =>
                                    orderStatusOption != orderStatus
                                    && <option Value={orderStatusOption}>{orderStatusOption}</option>
                                )}
                            </select>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Membership Package</p>
                            <div className="mb-2 p-3" style={{ backgroundColor: "lightgray" }}>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="col-md-7" style={{ paddingRight: "2px" }}>
                                        <select className="form-control"
                                            onChange={(e) => {
                                                const [membershipPackageTemp, priceTemp] = (e.target.value).split(",");
                                                setMembershipPackage(membershipPackageTemp);
                                                setPrice(priceTemp);
                                            }}>
                                            <option defaultValue>Select MemberShip Package</option>
                                            {optiPackages.map((optiPackage) =>
                                                <option key={optiPackage.id} value={[optiPackage.membership_package, optiPackage.price]}>{optiPackage.membership_package}</option>
                                            )}
                                        </select>
                                    </div>
                                    <div className="col-md-3">
                                        <select className="form-control" onChange={(e) => setQuantity(e.target.value)}>
                                            <option defaultValue>Quantity</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                        </select>
                                    </div>
                                    <div className="col-md-2 d-flex justify-content-end">
                                        <button type="button" className="btn btn-success" onClick={addPackageItem}>ADD</button>
                                    </div>
                                </div>
                                <div>
                                    {
                                        packageDetails.length != 0 &&
                                        <p className="text-start text-success mb-0">
                                            <sub>Your Package is successfully added over "<b>Membership Package Summary</b>" below.
                                                Add new Package by selecting another <b>Package</b> and <b>Quantity</b></sub>
                                        </p>
                                    }

                                </div>
                            </div>
                        </div>

                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">FullName</p>
                            <input type="text" className="form-control"
                                placeholder={fullname}
                                onChange={(e) => setFullname(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Email Address</p>
                            <input type="text" className="form-control"
                                placeholder={email}
                                onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Mobile #</p>
                            <input type="text" className="form-control"
                                placeholder={mobile}
                                onChange={(e) => setMobile(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Landline #</p>
                            <input type="text" className="form-control"
                                placeholder={landline}
                                onChange={(e) => setLandLine(e.target.value)}></input>
                            <p className="text-start mb-0 text-black-50"><small>If available. Else please provide alternative Mobile #</small></p>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Gender & Status</p>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="col-md-4" style={{ paddingRight: "2px" }}>
                                    <select className="form-control w-100"
                                        onChange={(e) => setGender(e.target.value)}>
                                        <option defaultValue={gender}>{gender != null ? gender : 'Select Gender'}</option>
                                        {genderOptions.map((genderOption) =>
                                            genderOption != gender
                                            && <option Value={genderOption}>{genderOption}</option>
                                        )}
                                    </select>
                                </div>
                                <div className="col-md-8">
                                    <select className="form-control"
                                        onChange={(e) => setCivilStatus(e.target.value)}>
                                        <option defaultValue={civilStatus}>{civilStatus != null ? civilStatus : 'Select Status'}</option>
                                        {civilStatusOptions.map((civilStatusOption) =>
                                            civilStatusOption != civilStatus
                                            && <option Value={civilStatusOption}>{civilStatusOption}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Date of Birth</p>
                            <input type="text" className="form-control"
                                placeholder={dateOfBirth}
                                onChange={(e) => setDateOfBirth(e.target.value)}></input>
                            <p className="text-start mb-0 text-black-50"><small>Format: YYYY-MM-DD</small></p>
                        </div>
                    </div>
                    <div className="col-md-3 mb-2">
                        <h4 className="text-start text-primary">Address Details</h4>

                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Unit, Floor and Building Name</p>
                            <input type="text" className="form-control"
                                placeholder={houseBuildName}
                                onChange={(e) => setHouseBuildName(e.target.value)}></input>
                            <p className="text-start mb-0 text-black-50"><small>House no. is acceptable (eg. 4825)</small></p>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Street Name</p>
                            <input type="text" className="form-control"
                                placeholder={street}
                                onChange={(e) => setStreet(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Barangay Name</p>
                            <input type="text" className="form-control"
                                placeholder={barangray}
                                onChange={(e) => setBarangray(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">City</p>
                            <input type="text" className="form-control"
                                placeholder={city}
                                onChange={(e) => setCity(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Province</p>
                            <input type="text" className="form-control"
                                placeholder={province}
                                onChange={(e) => setProvince(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">ZipCode</p>
                            <input type="text" className="form-control"
                                placeholder={zipCode}
                                onChange={(e) => setZipCode(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Delivery Option</p>
                            <select className="form-control"
                                onChange={(e) => {
                                    const [deliveryOptionTemp, deliveryFeeTemp] = (e.target.value).split(",");
                                    setDeliveryOption(deliveryOptionTemp);
                                    setDeliveryFee(deliveryFeeTemp);
                                }}
                            >
                                <option defaultValue={deliveryOption}>{deliveryOption}</option>
                                {DBDeliveryOptions.map((DBDeliveryOption) =>
                                    DBDeliveryOption.delivery_option != deliveryOption
                                    && <option key={DBDeliveryOption.id} Value={[DBDeliveryOption.delivery_option, DBDeliveryOption.delivery_fee]}>{DBDeliveryOption.delivery_option}</option>
                                )}


                            </select>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Payment Option</p>
                            <select className="form-control"
                                onChange={(e) => {
                                    const [paymentOptionTemp, paymentFeeTemp] = (e.target.value).split(",");
                                    setPaymentOption(paymentOptionTemp);
                                    setPaymentFee(paymentFeeTemp);
                                }}
                            >
                                <option defaultValue={paymentOption}>{paymentOption}</option>
                                {DBPaymentOptions.map((DBPaymentOption) =>
                                    DBPaymentOption.payment_option != paymentOption
                                    && <option key={DBPaymentOption.id} Value={[DBPaymentOption.payment_option, DBPaymentOption.payment_fee]}>{DBPaymentOption.payment_option}</option>
                                )}
                            </select>
                        </div>
                    </div>
                    <div className="col-md-4 bg-primary">
                        <div className="mb-4">
                            <h4 className="text-start text-white my-3">Payment Slip</h4>
                            <div className="my-1">
                                <img src={filePath} className="img-fluid img-thumbnail"
                                    alt="Payment Slip" style={{ maxHeight: "35em" }}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" row mt-3 d-flex justify-content-center">
                    <h4 className="text-start text-primary mb-2">Package Order Summary</h4>
                    <div className="container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="col-1"></th>
                                    <th className="col-6">Description</th>
                                    <th className="col-2">Price</th>
                                    <th className="col-1">Quantity</th>
                                    <th className="col-2">SubTotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {packageDetails.map((packageDetail, index) =>
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <button value={index}
                                                // onClick={() => deleteProductItem(index)}
                                                className="btn text-light"
                                                style={{ backgroundColor: "red" }}><i className="bi bi-trash"></i></button>
                                        </td>
                                        <td className="align-middle">{packageDetail.package}</td>
                                        <td className="align-middle">{(packageDetail.price * 1).toFixed(2)}</td>
                                        <td className="align-middle">{packageDetail.quantity}</td>
                                        <td className="align-middle">{packageDetail.subTotal == "" ? "" : (packageDetail.subTotal).toFixed(2)}</td>

                                    </tr>
                                )}
                                <tr>
                                    <td></td>
                                    <td className="align-middle">
                                        <p className="mb-0">Delivery Fees:</p>
                                        <p className="mb-0">{deliveryOption}</p>
                                    </td>
                                    <td className="align-middle">{(deliveryFee * 1).toFixed(2)}</td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle">{(deliveryFee * 1).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="align-middle">
                                        <p className="mb-0">Others:</p>
                                        <p className="mb-0">{paymentOption}</p>
                                    </td>
                                    <td className="align-middle">{(paymentFee * 1).toFixed(2)}</td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle">{(paymentFee * 1).toFixed(2)}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="align-middle">Discounts</td>
                                    <td className="align-middle">TBD</td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle">0.00</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="align-middle"></td>
                                    <td className="align-middle"></td>
                                    <th className="align-middle">Total</th>
                                    <td className="align-middle">
                                        {
                                            packageDetails.length == 0 ?
                                                ((deliveryFee * 1) + (paymentFee * 1)).toFixed(2) :
                                                (packageDetails
                                                    .map(packageDetail => packageDetail.subTotal)
                                                    .reduce((prev, next) => prev + next)
                                                    + (deliveryFee * 1) + (paymentFee * 1)).toFixed(2)
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className=" row mt-3 d-flex justify-content-center">
                    <button type="button" className="btn btn-success btn-lg w-75 mb-1"
                        onClick={updatePackage}
                    >Update</button>
                    <a className='btn btn-info w-75'
                        href='/dashboard/listPackage'
                    >Back</a>
                </div>
            </div>

            <Modal show={modalShowSuccess} onHide={() => setModalShowSuccess(false)}>
                <Modal.Body style={{ color: "green" }}>
                    <p className="mb-0 fw-bold">Package Successfully Update</p>
                    <small>Good job.. Well done!!</small>
                </Modal.Body>
            </Modal>
            <Modal show={modalShowError} onHide={() => setModalShowError(false)}>
                <Modal.Body style={{ color: "red" }}>
                    <p className="mb-0 fw-bold">One or more fields are invalid or empty</p>
                    <small>Please check the fields and click "Submit" button again!</small>
                </Modal.Body>
            </Modal>
        </section >
    )
}

export default DTrackPackageComp
