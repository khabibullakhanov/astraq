import React from 'react'

export function DashboarRightCardPagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }) {

    let pages = []
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div id="pagination">
            {
                pages.map((page, index) => {
                    return (
                        <div key={index}>
                            <button onClick={() => setCurrentPage(page)} id={page === currentPage ? "active" : ""}>{page}</button>
                        </div>
                    )
                })
            }
        </div>
    )
}