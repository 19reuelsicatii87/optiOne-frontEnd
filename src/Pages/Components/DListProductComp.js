import { React, useState, useEffect } from 'react'
import { Table, Button, InputGroup, FormControl, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { Link } from "react-router-dom"

function DListProductComp() {

    const [products, setProducts] = useState([]);
    const [paginationLimit, setPaginationLimit] = useState(10);
    const [paginationAttribute, setPaginationAttribute] = useState([]);
    const [term, setTerm] = useState([]);
    const [sortingStatus, setSortingStatus] = useState(true);
    const [sortingMobile, setSortingMobile] = useState(true);
    const [sortingEmail, setSortingEmail] = useState(true);
    const [sortingFullname, setSortingFullname] = useState(true);

    useEffect(() => {

        retrieveProducts();

    }, []);

    async function retrieveProducts() {
        let requestProducts = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listProduct',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseProducts = await axios(requestProducts);
        setProducts(responseProducts.data.data);
        setPaginationAttribute(responseProducts.data);
    }

    async function retrieveProductsPagination(paginationURL) {
        let requestProducts = {
            method: 'GET',
            url: paginationURL,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseproducts = await axios(requestProducts);
        setProducts(responseproducts.data.data);
        setPaginationAttribute(responseproducts.data);
        //console.log(paginationAttribute);
    }

    async function searchProducts() {

        let formData = new FormData();
        formData.append('term', term);

        let requestProducts = {
            method: 'POST',
            url: process.env.REACT_APP_BACKENDURL + '/api/searchProduct',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            data: formData
        }

        let responseProducts = await axios(requestProducts);
        setProducts(responseProducts.data);
    }

    async function clearProducts() {
        let requestProducts = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listProduct',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseProducts = await axios(requestProducts);
        setProducts(responseProducts.data.data);
        setTerm("");
    }

    async function deleteProduct(id) {
        console.log(`Lead ID: ${id}`)

        let requestDeleteProduct = {
            method: 'DELETE',
            url: process.env.REACT_APP_BACKENDURL + '/api/deleteProduct/' + id,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseDeleteProduct = await axios(requestDeleteProduct);
        console.log(responseDeleteProduct.data)
        retrieveProducts();
    }

    const SortingContentFullname = () => {
        setSortingFullname(!sortingFullname);
        setSortingFullname && products.sort((a, b) => (a.fullname > b.fullname) ? -1 : ((b.fullname > a.fullname) ? 1 : 0));
        !sortingFullname && products.sort((a, b) => (a.fullname > b.fullname) ? 1 : ((b.fullname > a.fullname) ? -1 : 0));
    }

    const SortingContentEmail = () => {
        setSortingEmail(!sortingEmail);
        setSortingEmail && products.sort((a, b) => (a.email > b.email) ? -1 : ((b.email > a.email) ? 1 : 0));
        !sortingEmail && products.sort((a, b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0));
    }

    const SortingContentMobile = () => {
        setSortingMobile(!sortingMobile);
        setSortingMobile && products.sort((a, b) => (a.mobile > b.mobile) ? -1 : ((b.mobile > a.mobile) ? 1 : 0));
        !sortingMobile && products.sort((a, b) => (a.mobile > b.mobile) ? 1 : ((b.mobile > a.mobile) ? -1 : 0));
    }

    const SortingContentStatus = () => {
        setSortingStatus(!sortingStatus);
        setSortingStatus && products.sort((a, b) => (a.order_status > b.order_status) ? -1 : ((b.order_status > a.order_status) ? 1 : 0));
        !sortingStatus && products.sort((a, b) => (a.order_status > b.order_status) ? 1 : ((b.order_status > a.order_status) ? -1 : 0));
    }

    const PaginationContent = () => {


        if (paginationAttribute.current_page == paginationAttribute.from) {
            return (
                <Pagination>
                    <Pagination.First
                        disabled={paginationAttribute.first_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.first_page_url)} />
                    <Pagination.Prev
                        disabled={paginationAttribute.prev_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.prev_page_url)} />

                    <Pagination.Item active>{paginationAttribute.current_page}</Pagination.Item>
                    <Pagination.Item onClick={() => retrieveProductsPagination(process.env.REACT_APP_BACKENDURL + `/api/listProduct?page=${paginationAttribute.current_page + 1}`)}>
                        {paginationAttribute.current_page + 1}
                    </Pagination.Item>
                    <Pagination.Item onClick={() => retrieveProductsPagination(process.env.REACT_APP_BACKENDURL + `/api/listProduct?page=${paginationAttribute.current_page + 2}`)}>
                        {paginationAttribute.current_page + 2}
                    </Pagination.Item>

                    <Pagination.Next
                        disabled={paginationAttribute.next_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.next_page_url)} />
                    <Pagination.Last
                        disabled={paginationAttribute.last_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.last_page_url)} />
                </Pagination>
            )
        }
        else if (paginationAttribute.current_page == paginationAttribute.last_page) {
            return (
                <Pagination>
                    <Pagination.First
                        disabled={paginationAttribute.first_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.first_page_url)} />
                    <Pagination.Prev
                        disabled={paginationAttribute.prev_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.prev_page_url)} />

                    <Pagination.Item onClick={() => retrieveProductsPagination(process.env.REACT_APP_BACKENDURL + `/api/listProduct?page=${paginationAttribute.current_page - 2}`)}>
                        {paginationAttribute.current_page - 2}
                    </Pagination.Item>
                    <Pagination.Item onClick={() => retrieveProductsPagination(process.env.REACT_APP_BACKENDURL + `/api/listProduct?page=${paginationAttribute.current_page - 1}`)}>
                        {paginationAttribute.current_page - 1}
                    </Pagination.Item>
                    <Pagination.Item active>{paginationAttribute.current_page}</Pagination.Item>


                    <Pagination.Next
                        disabled={paginationAttribute.next_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.next_page_url)} />
                    <Pagination.Last
                        disabled={paginationAttribute.last_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.last_page_url)} />
                </Pagination>
            )
        }

        else {

            return (
                <Pagination>
                    <Pagination.First
                        disabled={paginationAttribute.first_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.first_page_url)} />
                    <Pagination.Prev
                        disabled={paginationAttribute.prev_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.prev_page_url)} />

                    <Pagination.Item onClick={() => retrieveProductsPagination(process.env.REACT_APP_BACKENDURL + `/api/listProduct?page=${paginationAttribute.current_page - 1}`)}>
                        {paginationAttribute.current_page - 1}
                    </Pagination.Item>

                    <Pagination.Item active>{paginationAttribute.current_page}</Pagination.Item>

                    <Pagination.Item onClick={() => retrieveProductsPagination(process.env.REACT_APP_BACKENDURL + `/api/listProduct?page=${paginationAttribute.current_page + 1}`)}>
                        {paginationAttribute.current_page + 1}
                    </Pagination.Item>


                    <Pagination.Next
                        disabled={paginationAttribute.next_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.next_page_url)} />
                    <Pagination.Last
                        disabled={paginationAttribute.last_page_url === null ? true : false}
                        onClick={() => retrieveProductsPagination(paginationAttribute.last_page_url)} />
                </Pagination>
            )

        }
    }

    return (
        <section id="Dashboard-ProductList">
            <div className="container">
                <div className="col-lg-6 float-end pt-5">
                    <InputGroup className="mb-3  ">
                        <FormControl
                            placeholder="Name or Mobile"
                            aria-label="Name or Description"
                            aria-describedby="basic-addon2"
                            onChange={(e) => setTerm(e.target.value)}
                            value={term}
                        />
                        <Button className="mx-1"
                            onClick={searchProducts}
                            variant="btn btn-primary">Search</Button>
                        <Button
                            onClick={clearProducts}
                            variant="btn btn-danger">Clear</Button>

                    </InputGroup>
                </div>
            </div>
            <div className="container" style={{ overflow: "auto" }}>
                <Table hover bordered >
                    <thead>
                        <tr className='bg-primary text-light'>
                            <th className="text-center align-middle d-none d-sm-block">ORDER CODE</th>
                            <th className="text-center align-middle">
                                <div className="d-flex justify-content-around">
                                    NAME
                                    <i className={sortingFullname ? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-up-alt"}
                                        onClick={SortingContentFullname}></i>
                                </div></th>
                            <th className="text-center align-middle d-none d-sm-block">
                                <div className="d-flex justify-content-around">
                                    EMAIL
                                    <i className={sortingEmail ? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-up-alt"}
                                        onClick={SortingContentEmail}></i>
                                </div>
                            </th>
                            <th className="text-center align-middle">
                                <div className="d-flex justify-content-around">
                                    MOBILE
                                    <i className={sortingMobile ? "bi bi-sort-numeric-up" : "bi bi-sort-numeric-down-alt"}
                                        onClick={SortingContentMobile}></i>
                                </div>
                            </th>
                            <th className="text-center align-middle d-none d-sm-block">
                                <div className="d-flex justify-content-around">
                                    STATUS
                                    <i className={sortingStatus ? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-up-alt"}
                                        onClick={SortingContentStatus}></i>
                                </div>
                            </th>
                            <th className="text-center align-middle">OPERATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map((product) =>
                                <tr key={product.id} className='bg-secondary text-white'>
                                    <td className="text-center align-middle d-none d-sm-block" >{product.order_code}</td>
                                    <td className="text-center align-middle">{product.fullname}</td>
                                    <td className="text-center align-middle d-none d-sm-block">{product.email}</td>
                                    <td className="text-center align-middle">{product.mobile}</td>
                                    <td className="text-center align-middle d-none d-sm-block">{product.order_status}</td>
                                    <td className="text-center align-middle">
                                        <Link
                                            to={`/dashboard/viewProduct/${product.order_code}`}>
                                            <button
                                                className="btn btn-sm text-light"
                                                style={{ backgroundColor: "green" }}>
                                                <i className="bi bi-pencil"></i>
                                            </button>
                                        </Link>
                                        {' '}
                                        <button
                                            className="btn btn-sm text-light"
                                            style={{ backgroundColor: "red" }}
                                            onClick={() => deleteProduct(product.id)}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
                <div className="row">

                    <div className="col-3">
                        <select className="form-control text-primary fw-bold"
                            aria-label="Default select example"
                            style={{ maxWidth: "55px", borderWidth: "1px" }}
                            onChange={(e) => setPaginationLimit(e.target.value)}>
                            <option defaultValue="10">10</option>
                            <option value="15">15</option>
                            <option value="20">20</option>
                            <option value="25">25</option>
                            <option value="30">30</option>
                        </select>
                    </div>
                    <div className="col-9 d-flex justify-content-end">
                        {PaginationContent()}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DListProductComp
