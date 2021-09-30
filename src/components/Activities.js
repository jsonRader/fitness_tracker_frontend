import {React, useState, useEffect} from 'react';

import { getAllActivities } from '../API/index.js';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect( async () => {
       
            try {
                const activities = await getAllActivities();
                setActivities([activities]);
            } catch (error) {
                console.error("ERROR getting all public routines.");
                throw error;
            }
       
    }, []);

    return (
        <>
        <div id="activitiesPage">
            <h1 className="activitiesH1">"Activities..."</h1>
        </div>
        
        <div className="Activities-list">
            {
            activities.map((activity) => {
                <Activities name={activity.name}
                            title={activity.title}
                        />
            })
             }   
            </div>

        </>
    )
}

export default Activities;