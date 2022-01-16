import { React, useState, useEffect } from 'react'
import { Table, Button, InputGroup, FormControl, Pagination } from 'react-bootstrap'
import axios from 'axios'
import { Link } from "react-router-dom"

function DListLeadComp() {

    const [leads, setLeads] = useState([]);
    const [paginationLimit, setPaginationLimit] = useState(10);
    const [paginationAttribute, setPaginationAttribute] = useState([]);
    const [term, setTerm] = useState([]);
    const [filterstage, setFilterstage] = useState("");
    const [filterstatus, setFilterstatus] = useState("");
    const [sortingStatus, setSortingStatus] = useState(true);
    const [sortingMobile, setSortingMobile] = useState(true);
    const [sortingEmail, setSortingEmail] = useState(true);
    const [sortingFullname, setSortingFullname] = useState(true);
    const [sortingStage, setSortingStage] = useState(true);

    useEffect(() => {

        retrieveLeads();

    }, []);

    async function retrieveLeads() {

        let requestLeads = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listLead',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseLeads = await axios(requestLeads);
        //console.log(responseLeads);
        setLeads(responseLeads.data.data);
        setPaginationAttribute(responseLeads.data);


    }

    async function retrieveLeadsPagination(paginationURL) {
        let requestLeads = {
            method: 'GET',
            url: paginationURL,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseLeads = await axios(requestLeads);
        setLeads(responseLeads.data.data);
        setPaginationAttribute(responseLeads.data);
        console.log(paginationAttribute);
    }

    async function searchLeads() {

        let formData = new FormData();
        formData.append('term', term);

        let requestLeads = {
            method: 'POST',
            url: process.env.REACT_APP_BACKENDURL + '/api/searchLead',
            headers: {
                "Content-Type": 'multipart/form-data',
                "Accept": 'application/json'
            },
            data: formData
        }

        let responseLeads = await axios(requestLeads);
        setLeads(responseLeads.data);
    }

    async function clearLeads() {
        let requestLeads = {
            method: 'GET',
            url: process.env.REACT_APP_BACKENDURL + '/api/listLead',
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseLeads = await axios(requestLeads);
        setLeads(responseLeads.data.data);
        setPaginationAttribute(responseLeads.data);
        setTerm("");
    }

    async function deleteLead(id) {
        console.log(`Lead ID: ${id}`)

        let requestDeleteLead = {
            method: 'DELETE',
            url: process.env.REACT_APP_BACKENDURL + '/api/deleteLead/' + id,
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }
        }

        let responseDeleteLead = await axios(requestDeleteLead);
        console.log(responseDeleteLead.data)
        retrieveLeads();
    }

    const SortingContentFullname = () => {
        setSortingFullname(!sortingFullname);
        setSortingFullname && leads.sort((a, b) => (a.fullname > b.fullname) ? -1 : ((b.fullname > a.fullname) ? 1 : 0));
        !sortingFullname && leads.sort((a, b) => (a.fullname > b.fullname) ? 1 : ((b.fullname > a.fullname) ? -1 : 0));
    }

    const SortingContentEmail = () => {
        setSortingEmail(!sortingEmail);
        setSortingEmail && leads.sort((a, b) => (a.email > b.email) ? -1 : ((b.email > a.email) ? 1 : 0));
        !sortingEmail && leads.sort((a, b) => (a.email > b.email) ? 1 : ((b.email > a.email) ? -1 : 0));
    }

    const SortingContentMobile = () => {
        setSortingMobile(!sortingMobile);
        setSortingMobile && leads.sort((a, b) => (a.mobile > b.mobile) ? -1 : ((b.mobile > a.mobile) ? 1 : 0));
        !sortingMobile && leads.sort((a, b) => (a.mobile > b.mobile) ? 1 : ((b.mobile > a.mobile) ? -1 : 0));
    }
    const SortingContentStage = () => {
        setSortingStage(!sortingStage);
        setSortingStage && leads.sort((a, b) => (a.stage > b.stage) ? -1 : ((b.stage > a.stage) ? 1 : 0));
        !sortingStage && leads.sort((a, b) => (a.stage > b.stage) ? 1 : ((b.stage > a.stage) ? -1 : 0));
    }

    const SortingContentStatus = () => {
        setSortingStatus(!sortingStatus);
        setSortingStatus && leads.sort((a, b) => (a.status > b.status) ? -1 : ((b.status > a.status) ? 1 : 0));
        !sortingStatus && leads.sort((a, b) => (a.status > b.status) ? 1 : ((b.status > a.status) ? -1 : 0));
    }

    const PaginationContent = () => {

        if (paginationAttribute.current_page == paginationAttribute.from) {
            return (

                <Pagination>
                    <Pagination.First
                        disabled={paginationAttribute.first_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.first_page_url)} />
                    <Pagination.Prev
                        disabled={paginationAttribute.prev_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.prev_page_url)} />

                    <Pagination.Item active>{paginationAttribute.current_page}</Pagination.Item>
                    <Pagination.Item onClick={() => retrieveLeadsPagination(process.env.REACT_APP_BACKENDURL + `/api/listLead?page=${paginationAttribute.current_page + 1}`)}>
                        {paginationAttribute.current_page + 1}
                    </Pagination.Item>
                    <Pagination.Item onClick={() => retrieveLeadsPagination(process.env.REACT_APP_BACKENDURL + `/api/listLead?page=${paginationAttribute.current_page + 2}`)}>
                        {paginationAttribute.current_page + 2}
                    </Pagination.Item>

                    <Pagination.Next
                        disabled={paginationAttribute.next_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.next_page_url)} />
                    <Pagination.Last
                        disabled={paginationAttribute.last_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.last_page_url)} />
                </Pagination>
            )
        }


        else if (paginationAttribute.current_page == paginationAttribute.last_page) {
            return (
                <Pagination>
                    <Pagination.First
                        disabled={paginationAttribute.first_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.first_page_url)} />
                    <Pagination.Prev
                        disabled={paginationAttribute.prev_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.prev_page_url)} />

                    <Pagination.Item onClick={() => retrieveLeadsPagination(process.env.REACT_APP_BACKENDURL + `/api/listLead?page=${paginationAttribute.current_page - 2}`)}>
                        {paginationAttribute.current_page - 2}
                    </Pagination.Item>
                    <Pagination.Item onClick={() => retrieveLeadsPagination(process.env.REACT_APP_BACKENDURL + `/api/listLead?page=${paginationAttribute.current_page - 1}`)}>
                        {paginationAttribute.current_page - 1}
                    </Pagination.Item>
                    <Pagination.Item active>{paginationAttribute.current_page}</Pagination.Item>


                    <Pagination.Next
                        disabled={paginationAttribute.next_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.next_page_url)} />
                    <Pagination.Last
                        disabled={paginationAttribute.last_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.last_page_url)} />
                </Pagination>
            )
        }

        else {

            return (
                <Pagination>
                    <Pagination.First
                        disabled={paginationAttribute.first_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.first_page_url)} />
                    <Pagination.Prev
                        disabled={paginationAttribute.prev_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.prev_page_url)} />

                    <Pagination.Item onClick={() => retrieveLeadsPagination(process.env.REACT_APP_BACKENDURL + `/api/listLead?page=${paginationAttribute.current_page - 1}`)}>
                        {paginationAttribute.current_page - 1}
                    </Pagination.Item>

                    <Pagination.Item active>{paginationAttribute.current_page}</Pagination.Item>

                    <Pagination.Item onClick={() => retrieveLeadsPagination(process.env.REACT_APP_BACKENDURL + `/api/listLead?page=${paginationAttribute.current_page + 1}`)}>
                        {paginationAttribute.current_page + 1}
                    </Pagination.Item>


                    <Pagination.Next
                        disabled={paginationAttribute.next_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.next_page_url)} />
                    <Pagination.Last
                        disabled={paginationAttribute.last_page_url === null ? true : false}
                        onClick={() => retrieveLeadsPagination(paginationAttribute.last_page_url)} />
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
                            onClick={searchLeads}
                            variant="btn btn-primary">Search</Button>
                        <Button
                            onClick={clearLeads}
                            variant="btn btn-danger">Clear</Button>

                    </InputGroup>
                </div>
            </div>
            <div className="container" style={{ overflow: "auto" }}>
                <Table hover bordered >
                    <thead>
                        <tr className='bg-primary text-light'>
                            <th className="text-center align-middle d-none d-sm-block">
                                <div className="d-flex justify-content-around">
                                    NAME
                                    <i className={sortingFullname ? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-up-alt"}
                                        onClick={SortingContentFullname}></i>
                                </div></th>
                            <th className="text-center align-middle">
                                <div className="d-flex justify-content-around">
                                    EMAIL
                                    <i className={sortingFullname ? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-up-alt"}
                                        onClick={SortingContentEmail}></i>
                                </div>
                            </th>
                            <th className="text-center align-middle d-none d-sm-block">
                                <div className="d-flex justify-content-around">
                                    MOBILE
                                    <i className={sortingEmail ? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-up-alt"}
                                        onClick={SortingContentEmail}></i>
                                </div>
                            </th>
                            <th className="text-center align-middle">
                                <div className="d-flex justify-content-around">
                                    STAGE
                                    <i className={sortingStage ? "bi bi-sort-alpha-up" : "bi bi-sort-alpha-up-alt"}
                                        onClick={SortingContentStage}></i>
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
                            leads.slice(0, paginationLimit).map((lead) =>
                                <tr key={lead.id} className='bg-secondary text-white'>
                                    <td className="text-center align-middle d-none d-sm-block" >{lead.fullname}</td>
                                    <td className="text-center align-middle">{lead.email}</td>
                                    <td className="text-center align-middle d-none d-sm-block">{lead.mobile}</td>
                                    <td className="text-center align-middle">{lead.stage}</td>
                                    <td className="text-center align-middle d-none d-sm-block">{lead.status}</td>
                                    <td className="text-center align-middle">
                                        <Link
                                            to={`/dashboard/viewLead/${lead.id}`}>
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
                                            onClick={() => deleteLead(lead.id)}>
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

export default DListLeadComp
