const BASE_URL = "https://fitnesstrac-kr.herokuapp.com/api/";

export async function handleCreateRoutineActivity(
  routineId,
  activityId,
  count,
  duration,
) {
  try {
      const token = localStorage.getItem('Token');
      console.log(routineId, activityId, count, duration);
    const response = await fetch(
      BASE_URL + `/routines/${routineId}/activities`,
      {
          method: 'POST',
        headers: {
          "content-type": "application/json",
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ activityId, count, duration }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
};

export default handleCreateRoutineActivity;