import React, { useState } from 'react'
import "./Contact.css"
import { Header } from "../../Companenta/Header/Header"
import { ContactUser } from '../../Companenta/Contact Companents/ContactUser/ContactUser'
import { ContactPagination } from "../../Companenta/Contact Companents/ContactPagination"


export function Contact() {

    const [user] = useState([]);
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage] = useState(12)
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentUsers = user.slice(firstPostIndex, lastPostIndex);

    return (
        <div id='contact-main-container'>
            <Header />
            <div>
                <ContactUser user={currentUsers} />
                <ContactPagination
                    totalPosts={user.length}
                    setCurrentPage={setCurrentPage}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                />
            </div>
        </div>
    )
}
