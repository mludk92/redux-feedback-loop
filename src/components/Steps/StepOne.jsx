import '../Steps/Steps.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function StepOne() {
    const history = useHistory();
    const dispatch = useDispatch();
    const feelingVal = useSelector(store => store.feeling);
    console.log(feelingVal, 'feeling')

    const handleChange = (event) => {
        const action = { type: 'SET_FEELING_TODAY', payload: event.target.value };
        console.log(event.target.value)
        dispatch(action);
        console.log(feelingVal)
    }

   const nextPage = (event) => {
    if(feelingVal !=='Select From Values')
        {history.push('/step-2');
    } else {
    alert('Select a value')}
    }

    return (
      <>
        <div>How are you feeling today?</div>
        <form>
          <select id="input" name="feeling" onChange={handleChange}>
          <option value="0">Select From Values</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Next" onClick={nextPage} />
          <br/> Select a value
        </form>
      </>
    );
  }
  
  export default StepOne;
  