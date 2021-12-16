import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function OrderPackageForm() {


    useEffect(() => {

        retrieveOptiPackages();
        retrieveDeliveryOptions();

    }, []);

    // Packages, Delivery and Option States
    // =================================================
    const [optiPackages, setOptiPackages] = useState([])
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const navigate = useNavigate();



    // Package Order States
    // =================================================
    const [membershipPackageDetails, setMembershipPackageDetails] = useState([]);
    const [membershipPackage, setMembershipPackage] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [landline, setLandline] = useState("");
    const [gender, setGender] = useState("");
    const [civilStatus, setCivilStatus] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [filePath, setFilePath] = useState("");
    const [houseBuildname, setHouseBuildname] = useState("");
    const [street, setStreet] = useState("");
    const [barangray, setBarangray] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [deliveryOption, setDeliveryOption] = useState("ToBeDetermine");
    const [deliveryFee, setDeliveryFee] = useState("0.00");
    const [paymentOption, setPaymentOption] = useState("ToBeDetermine");
    const [paymentFee, setPaymentFee] = useState("0.00");



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

    async function retrieveDeliveryOptions() {
        let requestDeliveryOptions = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL +'/api/listDeliveryOptions',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseDeliveryOptions = await axios(requestDeliveryOptions);
        setDeliveryOptions(responseDeliveryOptions.data);
    }

    const addPackageItem = () => {

        membershipPackageDetails.push(
            {
                package: membershipPackage,
                quantity: quantity,
                price: price,
                subTotal: quantity * price
            })

        // To call usestate and re-render, update to state is needed
        // To qualify as update,  you have to destroy the OLD array and create a new one
        setMembershipPackageDetails([...membershipPackageDetails]);
        console.log(membershipPackageDetails);

    }

    function deletePackageItem(index) {

        console.log(index);
        membershipPackageDetails.splice(index, 1)

        // To call usestate and re-render, update to state is needed
        // To qualify as update,  you have to destroy the OLD array and create a new one
        setMembershipPackageDetails([...membershipPackageDetails]);

    }


    async function addPackage() {

        let formData = new FormData();
        formData.append('membership_package', JSON.stringify(membershipPackageDetails));
        formData.append('fullname', fullname);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('landline', landline);
        formData.append('gender', gender);
        formData.append('civil_status', civilStatus);
        formData.append('date_of_birth', dateofbirth);
        formData.append('file_path', filePath);
        formData.append('houseBuild_name', houseBuildname);
        formData.append('street', street);
        formData.append('barangray', barangray);
        formData.append('city', city);
        formData.append('province', province);
        formData.append('zipCode', zipCode);
        formData.append('delivery_option', deliveryOption);
        formData.append('delivery_fee', deliveryFee);
        formData.append('payment_option', paymentOption);
        formData.append('payment_fee', paymentFee);
        formData.append('total', membershipPackageDetails.length == 0 ?
            (deliveryFee * 1) + (paymentFee * 1) :
            (membershipPackageDetails
                .map(membershipPackageDetail => membershipPackageDetail.subTotal)
                .reduce((prev, next) => prev + next)
                + (deliveryFee * 1) + (paymentFee * 1)));

        let requestAddPackage = {
            method: 'POST',
            url: process.env.REACT_APP_BACKENDURL + '/api/addPackage',
            headers: {
                "Content-Type": 'multipart/form-data',
                "Accept": 'application/json'
            },
            data: formData
        }

        let responseAddPackage = await axios(requestAddPackage);
        navigate('/order/payment/' + responseAddPackage.data.order_code)

    }


    return (
        <section id="order-package-form">
            <div className="container my-5">
                <h1 className="text-start text-primary mb-5">Membership Package Form</h1>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <h4 className="text-start text-primary">Member Details</h4>
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
                                    membershipPackageDetails.length != 0 &&
                                    <p className="text-start text-success mb-0">
                                        <sub>Your Package is successfully added over "<b>Membership Package Summary</b>" below.
                                            Add new Package by selecting another <b>Package</b> and <b>Quantity</b></sub>
                                    </p>
                                }

                            </div>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">FullName</p>
                            <input type="text" className="form-control"
                                placeholder="Juan S. Dela Cruz Jr"
                                onChange={(e) => setFullname(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Email Address</p>
                            <input type="text" className="form-control"
                                placeholder="jualdelacruz@gmail.com"
                                onChange={(e) => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Mobile #</p>
                            <input type="text" className="form-control"
                                placeholder="0917 4976452"
                                onChange={(e) => setMobile(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Landline #</p>
                            <input type="text" className="form-control"
                                placeholder="02 81234567"
                                onChange={(e) => setLandline(e.target.value)}></input>
                            <p className="text-start mb-0 text-black-50"><small>If available. Else please provide alternative Mobile #</small></p>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Gender & Status</p>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="col-md-4" style={{ paddingRight: "2px" }}>
                                    <select className="form-control w-100" onChange={(e) => setGender(e.target.value)}>
                                        <option defaultValue>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-8">
                                    <select className="form-control" onChange={(e) => setCivilStatus(e.target.value)}>
                                        <option defaultValue>Select Civil Status</option>
                                        <option value="Single">Single</option>
                                        <option value="Married">Married</option>
                                        <option value="Divored or Seperated">Divored or Seperated</option>
                                        <option value="Widow or Widower">Widow or Widower</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Date of Birth</p>
                            <input type="text" className="form-control"
                                placeholder="2020-01-01"
                                onChange={(e) => setDateofbirth(e.target.value)}></input>
                            <p className="text-start mb-0 text-black-50"><small>Format: YYYY-MM-DD</small></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-start text-primary">Address Details</h4>

                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Unit, Floor and Building Name</p>
                            <input type="text" className="form-control"
                                placeholder="Unit14 63rd Flr Jaka Building"
                                onChange={(e) => setHouseBuildname(e.target.value)}></input>
                            <p className="text-start mb-0 text-black-50"><small>House no. is acceptable (eg. 4825)</small></p>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Street Name</p>
                            <input type="text" className="form-control" placeholder="Nicanor cor Garcia Street"
                                onChange={(e) => setStreet(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Barangay Name</p>
                            <input type="text" className="form-control" placeholder="Brgy Bel-Air"
                                onChange={(e) => setBarangray(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">City</p>
                            <input type="text" className="form-control" placeholder="Makati City"
                                onChange={(e) => setCity(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Province</p>
                            <input type="text" className="form-control" placeholder="Metro Manila"
                                onChange={(e) => setProvince(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">ZipCode</p>
                            <input type="text" className="form-control" placeholder="11209"
                                onChange={(e) => setZipCode(e.target.value)}></input>
                        </div>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Delivery Option</p>
                            <select className="form-control"
                                onChange={(e) => {
                                    const [deliveryOptionTemp, deliveryFeeTemp] = (e.target.value).split(",");
                                    setDeliveryOption(deliveryOptionTemp);
                                    setDeliveryFee(deliveryFeeTemp);
                                }}>
                                <option defaultValue>Please select Delivery Option...</option>
                                {deliveryOptions.map((deliveryOption) =>
                                    <option key={deliveryOption.id} value={[deliveryOption.delivery_option, deliveryOption.delivery_fee]}>{deliveryOption.delivery_option}</option>
                                )}
                            </select>
                        </div>
                    </div>
                </div>
                <div className=" row mt-3 d-flex justify-content-center">
                    <h4 className="text-start text-primary mb-2">Membership Package Summary</h4>
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
                                {membershipPackageDetails.map((membershipPackageDetail, index) =>
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <button value={index} onClick={() => deletePackageItem(index)}
                                                className="btn text-light"
                                                style={{ backgroundColor: "red" }}><i className="bi bi-trash"></i></button>
                                        </td>
                                        <td className="align-middle">{membershipPackageDetail.package}</td>
                                        <td className="align-middle">{(membershipPackageDetail.price * 1).toFixed(2)}</td>
                                        <td className="align-middle">{membershipPackageDetail.quantity}</td>
                                        <td className="align-middle">{membershipPackageDetail.subTotal == "" ? "" : (membershipPackageDetail.subTotal).toFixed(2)}</td>

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
                                            membershipPackageDetails.length == 0 ?
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
                <div className=" row mt-3 d-flex justify-content-center">
                    <button type="button" className="btn btn-success w-75"
                        onClick={addPackage} >Submit</button>
                </div>
            </div>
        </section>
    )
}

export default OrderPackageForm
