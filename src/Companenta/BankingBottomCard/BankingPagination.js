import React from 'react'
import "./BankingPagination.css"

export function BankingPagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {

    let pages = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div id="pagination">
            {
                pages.map((page, index) => {
                    return (
                        <>
                            <button onClick={() => setCurrentPage(page)} key={index} className={page === currentPage ? "active" : ""}>{page}</button>
                        </>
                    )
                })
            }
        </div>
    )
}
