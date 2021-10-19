import React from 'react'
import Error from '../../Error/Error'
import Main from '../../Main'
import MainCatalog from '../../MainCatalog'

const Home = () => {
    return (
        <Error>
            <Main/>
            <MainCatalog/>
        </Error>
    )
}

export default Home
