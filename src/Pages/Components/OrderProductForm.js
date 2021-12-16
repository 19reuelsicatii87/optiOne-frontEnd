import React, { useState, useEffect } from 'react';
import axios from 'axios'

function OrderProductForm() {

    // Packages, Delivery and Option States
    // =================================================
    const [optiPackages, setOptiPackages] = useState([])
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const [paymentOptions, setPaymentOptions] = useState([]);

    useEffect(() => {

        retrieveOptiPackages();
        retrieveDeliveryOptions();
        retrievePaymentOptions();

    }, [0]);

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
            url: process.env.REACT_APP_BACKENDURL + '/api/listDeliveryOptions',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseDeliveryOptions = await axios(requestDeliveryOptions);
        setDeliveryOptions(responseDeliveryOptions.data);
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
        setPaymentOptions(responsePaymentOptions.data);
    }



    // Package Order States
    // =================================================
    const [membershipPackageDetails, setMembershipPackageDetails] = useState({package: "", price: "", quantity: ""});
    const [membershipPackage, setMembershipPackage] = useState("ToBeDetermine");
    const [quantity, setQuantity] = useState("0");
    const [price, setPrice] = useState("0.00");
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
    const [total, setTotal] = useState(0.00);


    // Order Product as Guest or Member
    // =================================================
    const [sponsorCodeStatus, setsponsorCodeStatus] = useState(false);
    function SponsorCode() {
        return (

            sponsorCodeStatus
                ?
                <div className="mb-1">
                    <p for="exampleInputEmail1" className="text-start mb-0 fw-bold">Sponsor Code</p>
                    <input type="text" className="form-control" id="exampleInputPassword1"></input>
                </div >
                :
                <div className="mb-1" hidden>
                    <p for="exampleInputEmail1" className="text-start mb-0 fw-bold">Sponsor Code</p>
                    <input type="text" className="form-control" id="exampleInputPassword1"></input>
                </div >
        )
    }


    async function addPackage() {

        let formData = new FormData();
        formData.append('membership_package', membershipPackage);
        formData.append('price', price);
        formData.append('quantity', quantity);
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
        formData.append('total', ((price * quantity) + (deliveryFee * 1) + (paymentFee * 1)));

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
        //console.log(responseAddPackage.data)

        setMembershipPackageDetails(...membershipPackageDetails, {package: "testone", price: "testtwo", quantity: "testthree"})

    }


    return (
        <section id="order-package-form">
            <div className="container my-5">
                <h1 className="text-start text-primary mb-5">Product Order Form</h1>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <h4 className="text-start text-primary">Member Details</h4>
                        <div className="mb-3 form-check">
                            <input type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                onChange={() => setsponsorCodeStatus(!sponsorCodeStatus)}></input>
                            <p className="text-start mb-0 fw-bold"><small>Claim your rebates and order as Member</small></p>
                        </div>
                        {SponsorCode()}

                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Opti Products</p>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="col-md-9" style={{ paddingRight: "2px" }}>
                                    <select className="form-control"
                                        onChange={(e) => {
                                            const [membershipPackageTemp, priceTemp] = (e.target.value).split(",");
                                            setMembershipPackage(membershipPackageTemp);
                                            setPrice(priceTemp);
                                        }}>
                                        <option selected>Select MemberShip Package</option>
                                        {optiPackages.map((optiPackage) =>
                                            <option value={[optiPackage.membership_package, optiPackage.price]}>{optiPackage.membership_package}</option>
                                        )}
                                    </select>

                                </div>
                                <div className="col-md-3">
                                    <select className="form-control" onChange={(e) => setQuantity(e.target.value)}>
                                        <option selected>Quantity</option>
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
                                        <option selected>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="col-md-8">
                                    <select className="form-control" onChange={(e) => setCivilStatus(e.target.value)}>
                                        <option selected>Select Civil Status</option>
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
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Upload Govt Issued ID</p>
                            <input type="file" className="form-control"
                                onChange={(e) => setFilePath(e.target.files[0])}></input>
                            <p className="text-start mb-0 text-black-50"><small>Passport, Driver's License, SSS UMID Card, Postal ID, etc</small></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="text-start text-primary">Address and Payment Details</h4>

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
                                <option selected>Please select Delivery Option...</option>
                                {deliveryOptions.map((deliveryOption) =>
                                    <option value={[deliveryOption.delivery_option, deliveryOption.delivery_fee]}>{deliveryOption.delivery_option}</option>
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
                                }}>
                                <option selected>Please select Payment Option...</option>
                                {paymentOptions.map((paymentOption) =>
                                    <option value={[paymentOption.payment_option, paymentOption.payment_fee]}>{paymentOption.payment_option}</option>
                                )}
                            </select>
                        </div>

                    </div>

                </div>

                <div className=" row mt-3 d-flex justify-content-center">
                    <h4 className="text-start text-primary mb-2">Membership Package Summary</h4>
                    <div className="container">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th className="col-5">Description</th>
                                    <th className="col-2">Price</th>
                                    <th className="col-1">Quantity</th>
                                    <th className="col-4">SubTotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="align-middle">{membershipPackage}</td>
                                    <td className="align-middle">{(price * 1).toFixed(2)}</td>
                                    <td className="align-middle">{quantity}</td>
                                    <td className="align-middle">{(price * quantity).toFixed(2)}</td>
                                </tr>
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
                                        {
                                            ((price * quantity) + (deliveryFee * 1) + (paymentFee * 1)).toFixed(2)
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

export default OrderProductForm
