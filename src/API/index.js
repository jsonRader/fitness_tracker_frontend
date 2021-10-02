export const BASE_URL = 'https://fitnesstrac-kr.herokuapp.com/api/'

/* --- USERS --- */
export {default as handleRegister} from './Users/handleRegister';
export {default as handleLogIn} from './Users/handleLogIn';

/* --- ROUTINES --- */
export {default as handleRoutines} from './Routines/handleRoutines';
export {default as handleMyRoutines} from './Routines/handleMyRoutines';
export {default as handleCreateRoutine} from './Routines/handleCreateRoutine';
export {default as handleEditRoutine} from './Routines/handleEditRoutine';
export {default as handleDeleteRoutine} from './Routines/handleDeleteRoutine';

/* --- ACTIVITIES --- */
export {default as handleActivities} from './Activities/handleActivities';