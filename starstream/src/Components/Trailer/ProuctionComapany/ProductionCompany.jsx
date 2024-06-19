import React from 'react'

const ProductionCompany = ({companies}) => {
    if (!companies) return null;
  return (
    <div>
      <h3>Production Companies:</h3>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
            {company.name} <img src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt={company.name} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ProductionCompany
