import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function OrderProductForm() {



    useEffect(() => {

        retrieveOptiGuestProducts();
        retrieveOptiMemberProducts();
        retrieveDeliveryOptions();

    }, []);

    // Products, Delivery and Option States
    // =================================================
    const [optiGuestProducts, setOptiGuestProducts] = useState([])
    const [optiMemberProducts, setOptiMemberProducts] = useState([])
    const [deliveryOptions, setDeliveryOptions] = useState([]);
    const navigate = useNavigate();


    // Package Order States
    // =================================================
    const [memberCode, setMemberCode] = useState("");
    const [productDetails, setProductDetails] = useState([]);
    const [product, setProduct] = useState("");
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

    async function retrieveOptiGuestProducts() {
        let requestOptiGuestProducts = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listGuestOptiProducts',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseOptiGuestProducts = await axios(requestOptiGuestProducts);
        setOptiGuestProducts(responseOptiGuestProducts.data);
    }

    async function retrieveOptiMemberProducts() {
        let requestOptiMemberProducts = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listMemberOptiProducts',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseOptiMemberProducts = await axios(requestOptiMemberProducts);
        setOptiMemberProducts(responseOptiMemberProducts.data);
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

    const addProductItem = () => {

        productDetails.push(
            {
                product: product,
                quantity: quantity,
                price: price,
                subTotal: quantity * price
            })

        // To call usestate and re-render, update to state is needed
        // To qualify as update,  you have to destroy the OLD array and create a new one
        setProductDetails([...productDetails]);
        console.log(productDetails);

    }

    function deleteProductItem(index) {

        console.log(index);
        productDetails.splice(index, 1)

        // To call usestate and re-render, update to state is needed
        // To qualify as update,  you have to destroy the OLD array and create a new one
        setProductDetails([...productDetails]);

    }


    async function addPackage() {

        let formData = new FormData();
        formData.append('order_product', JSON.stringify(productDetails));
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
        formData.append('total', productDetails.length == 0 ?
            (deliveryFee * 1) + (paymentFee * 1) :
            (productDetails
                .map(productDetails => productDetails.subTotal)
                .reduce((prev, next) => prev + next)
                + (deliveryFee * 1) + (paymentFee * 1)));

        let requestAddPackage = {
            method: 'POST',
            url: process.env.REACT_APP_BACKENDURL + '/api/addProduct',
            headers: {
                "Content-Type": 'multipart/form-data',
                "Accept": 'application/json'
            },
            data: formData
        }

        let responseAddPackage = await axios(requestAddPackage);
        navigate('/order/payment/' + responseAddPackage.data.order_code)

    }


    // Order Product as Guest or Member
    // =================================================
    const [sponsorCodeStatus, setsponsorCodeStatus] = useState(false);
    function SponsorCode() {
        return (

            sponsorCodeStatus
                ?
                <div className="mb-1">
                    <p for="exampleInputEmail1" className="text-start mb-0 fw-bold">Sponsor Code</p>
                    <input type="text" className="form-control" onChange={(e) => setMemberCode(e.target.value)}></input>
                </div >
                :
                <div className="mb-1" hidden>
                    <p for="exampleInputEmail1" className="text-start mb-0 fw-bold">Sponsor Code</p>
                    <input type="text" className="form-control"></input>
                </div >
        )
    }

    function OptiProducts() {
        return (

            memberCode.length == 0
                ?
                optiGuestProducts.map((optiGuestProduct) =>
                    <option key={optiGuestProduct.id} value={[optiGuestProduct.order_product, optiGuestProduct.price]}>{`${optiGuestProduct.order_product} - ${optiGuestProduct.bundle}`}</option>
                )
                :
                optiMemberProducts.map((optiMemberProduct) =>
                    <option key={optiMemberProduct.id} value={[optiMemberProduct.order_product, optiMemberProduct.price]}>{`${optiMemberProduct.order_product} - ${optiMemberProduct.bundle}`}</option>
                )
        )
    }




    return (
        <section id="order-package-form">
            <div className="container my-5">
                <h1 className="text-start text-primary mb-5">Product Form</h1>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <h4 className="text-start text-primary">Order Details</h4>
                        <div className="mb-3 form-check">
                            <input type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                                onChange={() => setsponsorCodeStatus(!sponsorCodeStatus)}></input>
                            <p className="text-start mb-0 fw-bold"><small>Claim your rebates and order as Member</small></p>
                        </div>
                        {SponsorCode()}
                        <p className="text-start mb-0 fw-bold">Products and Bundle</p>
                        <div className="mb-2 p-3" style={{ backgroundColor: "lightgray" }}>
                            <div className="d-flex flex-row justify-content-between">
                                <div className="col-md-7" style={{ paddingRight: "2px" }}>
                                    <select className="form-control"
                                        onChange={(e) => {
                                            const [productTemp, priceTemp] = (e.target.value).split(",");
                                            setProduct(productTemp);
                                            setPrice(priceTemp);
                                        }}>
                                        <option defaultValue>Select Product</option>
                                        {OptiProducts()}
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
                                    <button type="button" className="btn btn-success" onClick={addProductItem}>ADD</button>
                                </div>
                            </div>
                            <div>
                                {
                                    productDetails.length != 0 &&
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
                                {productDetails.map((productDetail, index) =>
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <button value={index} onClick={() => deleteProductItem(index)}
                                                className="btn text-light"
                                                style={{ backgroundColor: "red" }}><i className="bi bi-trash"></i></button>
                                        </td>
                                        <td className="align-middle">{productDetail.product}</td>
                                        <td className="align-middle">{(productDetail.price * 1).toFixed(2)}</td>
                                        <td className="align-middle">{productDetail.quantity}</td>
                                        <td className="align-middle">{productDetail.subTotal == "" ? "" : (productDetail.subTotal).toFixed(2)}</td>

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
                                            productDetails.length == 0 ?
                                                ((deliveryFee * 1) + (paymentFee * 1)).toFixed(2) :
                                                (productDetails
                                                    .map(productDetail => productDetail.subTotal)
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

export default OrderProductForm
