import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'
import withRouter from './WithRouter'

function DViewProductComp(props) {

    useEffect(() => {

        retrieveProduct();
        retrieveOptiGuestProducts();
        retrieveOptiMemberProducts();
        retrieveDeliveryOptions();
        retrievePaymentOptions();

    }, []);


    // Products, Delivery and Option States
    // =================================================
    const [DBDeliveryOptions, setDBDeliveryOptions] = useState([]);
    const [DBPaymentOptions, setDBPaymentOptions] = useState([]);
    const genderOptions = ["Female", "Male"];
    const civilStatusOptions = ["Single", "Married", "Divorced or Seperated", "Widow or Widower"];
    const orderStatusOptions = ["Order Placed", "Order Payment", "Payment Validation", "Order Sent", "Order Delivered"];

    // Add Products States
    // =================================================
    const [optiGuestProducts, setOptiGuestProducts] = useState([])
    const [optiMemberProducts, setOptiMemberProducts] = useState([])
    const [product, setProduct] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    // Products States
    // =================================================
    const [modalShowSuccess, setModalShowSuccess] = useState(false);
    const [modalShowError, setModalShowError] = useState(false);
    const [id, setID] = useState("");
    const [memberCode, setMemberCode] = useState("");
    const [productDetails, setProductDetails] = useState([]);
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


    async function retrieveProduct() {
        let requestProduct = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/getProduct/' + props.router.params.id,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseProduct = await axios(requestProduct);
        setID(responseProduct.data[0].id);
        setMemberCode(responseProduct.data[0].member_code);
        setProductDetails(JSON.parse(responseProduct.data[0].order_product));
        setOrderCode(responseProduct.data[0].order_code);
        setOrderStatus(responseProduct.data[0].order_status);
        setFullname(responseProduct.data[0].fullname);
        setEmail(responseProduct.data[0].email);
        setMobile(responseProduct.data[0].mobile);
        setLandLine(responseProduct.data[0].landline);
        setGender(responseProduct.data[0].gender);
        setCivilStatus(responseProduct.data[0].civil_status);
        setDateOfBirth(responseProduct.data[0].date_of_birth);
        setFilePath(responseProduct.data[0].slip_file_path);
        setHouseBuildName(responseProduct.data[0].houseBuild_name);
        setStreet(responseProduct.data[0].street);
        setBarangray(responseProduct.data[0].barangray);
        setCity(responseProduct.data[0].city);
        setProvince(responseProduct.data[0].province);
        setZipCode(responseProduct.data[0].zipCode);
        setDeliveryOption(responseProduct.data[0].delivery_option);
        setDeliveryFee(responseProduct.data[0].delivery_fee);
        setPaymentOption(responseProduct.data[0].payment_option);
        setPaymentFee(responseProduct.data[0].payment_fee);
        setDiscount(responseProduct.data[0].discount);
        setTotal(responseProduct.data[0].total);

        console.log(JSON.parse(responseProduct.data[0].order_product));

    }

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

    async function updateProduct() {

        if (!fullname || !email || !mobile) {

            console.log("One or all fields are empty");
            setModalShowError(true);

        }

        else {


            let formData = new FormData();
            formData.append('id', id);
            formData.append('member_code', memberCode);
            formData.append('order_product', JSON.stringify(productDetails));
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
            formData.append('total', productDetails.length == 0 ?
                (deliveryFee * 1) + (paymentFee * 1) :
                (productDetails
                    .map(productDetail => productDetail.subTotal)
                    .reduce((prev, next) => prev + next)
                    + (deliveryFee * 1) + (paymentFee * 1)));



            let requestUpdateProduct = {
                method: 'POST',
                url: process.env.REACT_APP_BACKENDURL + '/api/updateProductFromDashboard',
                headers: {
                    "Content-Type": 'multipart/form-data',
                    "Accept": 'application/json'
                },
                data: formData
            }

            let responseUpdateProduct = await axios(requestUpdateProduct);
            setID(responseUpdateProduct.data.id);
            setMemberCode(responseUpdateProduct.data.member_code);
            setProductDetails(JSON.parse(responseUpdateProduct.data.order_product));
            setOrderCode(responseUpdateProduct.data.order_code);
            setOrderStatus(responseUpdateProduct.data.order_status);
            setFullname(responseUpdateProduct.data.fullname);
            setEmail(responseUpdateProduct.data.email);
            setMobile(responseUpdateProduct.data.mobile);
            setLandLine(responseUpdateProduct.data.landline);
            setGender(responseUpdateProduct.data.gender);
            setCivilStatus(responseUpdateProduct.data.civil_status);
            setDateOfBirth(responseUpdateProduct.data.date_of_birth);
            setFilePath(responseUpdateProduct.data.slip_file_path);
            setHouseBuildName(responseUpdateProduct.data.houseBuild_name);
            setStreet(responseUpdateProduct.data.street);
            setBarangray(responseUpdateProduct.data.barangray);
            setCity(responseUpdateProduct.data.city);
            setProvince(responseUpdateProduct.data.province);
            setZipCode(responseUpdateProduct.data.zipCode);
            setDeliveryOption(responseUpdateProduct.data.delivery_option);
            setDeliveryFee(responseUpdateProduct.data.delivery_fee);
            setPaymentOption(responseUpdateProduct.data.payment_option);
            setPaymentFee(responseUpdateProduct.data.payment_fee);
            setDiscount(responseUpdateProduct.data.discount);
            setTotal(responseUpdateProduct.data.total);
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
        <section id="Dashboard-Product-View">
            <div className="container my-5">
                <h1 className="text-start text-primary mb-5">Product Form</h1>
                <div className="row">
                    <div className="col-md-6 mb-2">
                        <h4 className="text-start text-primary">Order Details</h4>
                        <div className="mb-2">
                            <p className="text-start mb-0 fw-bold">Member Code</p>
                            <input type="text" className="form-control"
                                placeholder={memberCode}
                                onChange={(e) => setMemberCode(e.target.value)}></input>
                        </div>
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
                                        <p className="text-start text-danger mb-0">
                                            <sub>If needed, you may add additional <b>Products</b> and <b>Bundle</b> here!!!</sub>
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
                                    <select className="form-control" onChange={(e) => setCivilStatus(e.target.value)}>
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
                    <div className="col-md-6">
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
                </div>
                <div className=" row mt-3 d-flex justify-content-center">
                    <h4 className="text-start text-primary mb-2">Product Order Summary</h4>
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
                                            <button value={index}
                                                // onClick={() => deleteProductItem(index)}
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
                    <button type="button" className="btn btn-success btn-lg w-100 mb-1"
                        onClick={updateProduct}
                    >Update</button>
                    <a className='btn btn-info btn-lg w-100'
                        href='/dashboard/listProduct'
                    >Back</a>
                </div>
            </div>

            <Modal show={modalShowSuccess} onHide={() => setModalShowSuccess(false)}>
                <Modal.Body style={{ color: "green" }}>
                    <p className="mb-0 fw-bold">Product Successfully Update</p>
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

export default withRouter(DViewProductComp)
