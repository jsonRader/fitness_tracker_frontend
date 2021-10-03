const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api";

export async function handleCreateActivity(name,goal){
    try {
        const token = localStorage.getItem('Token');
           console.log(name) 
           console.log(goal) 
        const response = await fetch(`${BASE_URL}/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`},
            body: JSON.stringify({
                    name: name,
                    description: goal
                }
              )
        }).then(response => response.json())
        .then(result => {
            console.log(result)
        })
    } catch (error) {
        console.error(error);
    }
}

export default handleCreateActivity;
