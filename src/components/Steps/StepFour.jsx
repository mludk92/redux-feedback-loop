import '../Steps/Steps.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';



function StepFour () {
    const history = useHistory();
    const dispatch = useDispatch();
    const commentVal = useSelector(store => store.comments);
    console.log(commentVal, 'comment')

    const handleChange = (event) => {
        const action = { type: 'SET_COMMENT', payload: event.target.value };
        console.log(event.target.value)
        dispatch(action);
        console.log(commentVal)
    }

    const nextPage = () => {
        
        history.push('/review');
}
    return (
        <>
        <div>Any comments?</div>
        <form>
          <input type="text" onChange={handleChange}/>
          <input type="submit" value="Next" onClick={nextPage}/>
          
        </form>
      </>
    )
}

export default StepFour