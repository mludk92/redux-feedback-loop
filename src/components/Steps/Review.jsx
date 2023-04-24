
import '../Steps/Steps.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Review () {
    const history = useHistory();


    const nextPage = (event) => {

        history.push('/step-2');
}
    return (
        <>
        <div>Review </div>
        </>
    )
}

export default Review 