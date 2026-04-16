import React from 'react'
import Ctwo from './Ctwo'
import Cthree from './Cthree'


const Cone = () => {
    const uname = "Rajoooo";
    return (
        <>
            <div>Cone welcome {uname}</div>
            <Ctwo unm={uname} />
            <Cthree />
        </>
    )
}

export default Cone