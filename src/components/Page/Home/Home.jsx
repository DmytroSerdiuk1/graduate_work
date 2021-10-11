import React, { useEffect } from 'react'
import Error from '../../Error/Error'
import Main from '../../Main'
import MainCatalog from '../../MainCatalog'
import {useLocation} from 'react-router-dom';

const Home = () => {
    return (
        <Error>
            <Main/>
            <MainCatalog/>
        </Error>
    )
}

export default Home
