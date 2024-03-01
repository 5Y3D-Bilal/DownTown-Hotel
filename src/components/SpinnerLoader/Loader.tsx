import React from 'react';

type LoaderProps = {

};

const Loader: React.FC<LoaderProps> = () => {

    return <div>
        <svg className='loader' viewBox="25 25 50 50">
            <circle className='loaderCircle' r="20" cy="50" cx="50"></circle>
        </svg>
    </div>
}
export default Loader;