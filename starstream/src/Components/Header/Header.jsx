import React from 'react';
const PageHeader = props => {
    return (
        <div className="page-header" style={{backgroundImage: `url(${bg})`}}>
            <h2>{props.children}</h2>
        </div>
    );
}


export default PageHeader;