import {React, useState, useEffect} from 'react';

import { getAllActivities } from '../API/index.js';
import { SingleActivity } from './index';

const Activities = () => {
    const [activities, setActivities] = useState([]);

    useEffect( async () => {
       
            try {
                const activities = await getAllActivities();
                console.log('THE ACTIVITIES ARE', [activities]) //this is giving me a "cors" response, not a list of activities?
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
        
        <div className="activitiesList">
            {
            activities.map((activity, i) => {
                <SingleActivity name={activity.name}
                            title={activity.title}
                        />
            })
             }   
            </div>

        </>
    )
}

export default Activities;