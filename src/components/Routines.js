import {React, useState, useEffect} from 'react';

import {apiGetAllPublicRoutines} from '../API/index.js';

const Routines = () => {
    const [publicRoutines, setPublicRoutines] = useState([]);

    useEffect(() => {
        async function getAllPublicRoutines() {
            try {
                const handleAllPublicRoutines = await apiGetAllPublicRoutines();
                setPublicRoutines([handleAllPublicRoutines]);
            } catch (error) {
                console.error("ERROR getting all public routines.");
                throw error;
            }
        }
        getAllPublicRoutines();
    }, []);

    return (
        <div id="routinesPage">
            <h1 className="routinepageH1">"Routines Page..."</h1>
        </div>
    )
}

export default Routines;