import React from 'react';

const WithClass1 = (WrappedComponent, className)=>{
    return (props) =>(
        <div className = {className}>
            <WrappedComponent {...props}></WrappedComponent>
        </div>
    )
}

export default WithClass1;