import React from 'react';
import './ProductionCompany.css';

const ProductionCompany = ({ companies }) => {
  if (!companies || companies.length === 0) return null;

  return (
    <div className="production-companies">
      <h3>Production Companies:</h3>
      <ul>
        {companies.map(company => (
          <li key={company.id}>
            {company.name} 
            {company.logo_path && <img src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`} alt={company.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductionCompany;
