
import '../Steps/Steps.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

function Review () {
    const history = useHistory();
    const feelingVal = useSelector(store => store.feeling);
    const understandVal = useSelector(store => store.understand);
    const supportVal = useSelector(store => store.support);
    const commentVal = useSelector(store => store.comments);



const sendToServer = () => {
    axios.post('/review', {
        name: personName,
        type: activityType,
        minutes: minutes,
        miles: miles,
    }).then(response => {
        // Clear our inputs
        dispatch({ type: 'CLEAR_FORM' });
        // Navigate to the start page
        history.push('/')
    }).catch(error => {
        alert('Something went wrong! Please try again later.');
        console.log(error);
    });
}
    return (
        <>
        <div>Review </div>
        <br/>
        <div>
            <div>My Feeling Rating -- {feelingVal}</div>
            <div>My Understanding Rating -- {understandVal}</div>
            <div>My Support Rating -- {supportVal}</div>
            <div>My Comments -- {commentVal}</div>
        </div>
        <input type="submit" value="Finalize" onClick={sendToServer} />
        </>
    )
}

export default Review 