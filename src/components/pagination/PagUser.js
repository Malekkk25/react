import React from 'react'

const PagUser = ({postsPerPage ,totalPosts ,paginate}) => {
    const pageNumbers =[];
    for(let i =1; i<=Math.ceil(totalPosts/ postsPerPage);i++){
pageNumbers.push(i);
    }
  return (
    <nav>
        <ul className='pagination'>
            {
                pageNumbers.map(number =>(
                    <li key={number} className='page-item' style={{marginRight:'5px'}} >
                            <a onClick={()=>paginate(number)} href='User?/!#' className='page-link'>
                                {number}
                            </a>
                    </li>
                ))
            }
        </ul>
    </nav>
  )
}

export default PagUser