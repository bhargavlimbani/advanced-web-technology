import React, { useEffect, useState } from "react";

const ClockPage = () => {
    const [hh, setHh] = useState(0);
    const [mm, setMm] = useState(0);
    const [ss, setSs] = useState(0);
    const [laps, setLaps] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            let s = ss + 1;
            let m = Math.floor(s/60);
            s = s%60;
            let h = Math.floor(m/60);
            m = m%60;
            setSs(s);
            setHh(h);
            setMm(m);
        }, 1000);

        return () => {

        }
    }, [ss])

    const handleAdd = () => {
        setLaps((l) => [`${hh}:${mm}:${ss}`, ...l])
    }

    return (
        <div>
            <div style={{display : 'inline-block' }}> {hh} </div>:
            <div style={{display : 'inline-block' }}> {mm} </div>:
            <div style={{display : 'inline-block' }}> {ss} </div>
            <br /><button onClick={handleAdd}> Add Lap </button>
           <h2>Recodes</h2>
           {
            laps.map((lap)=>(<p key={lap}>{lap}</p>))
           }
        </div>
    );
}

export default ClockPage;