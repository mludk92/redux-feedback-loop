
import '../Steps/Steps.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function StepTwo () {
    const history = useHistory();
    const dispatch = useDispatch();
    const understandVal = useSelector(store => store.understand);
    console.log(understandVal, 'understand')

    const handleChange = (event) => {
        const action = { type: 'SET_UNDERSTANDING', payload: event.target.value };
        console.log(event.target.value)
        dispatch(action);
        console.log(understandVal)
    }


    const nextPage = (event) => {
        if(understandVal !=='Select From Values')
            {history.push('/step-3');
        } else {
        alert('Select a value')}
        }
    return (
        <>
         <>
        <div>How well are you understanding the content?</div>
        <form>
          <select id="input" name="content" onChange={handleChange}>
            <option value="0">Select From Values</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Next" onClick={nextPage}/>
          <br/> Select a value
        </form>
      </>
        </>
    )
}

export default StepTwo