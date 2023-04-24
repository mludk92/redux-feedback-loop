import '../Steps/Steps.css';


function StepOne() {
    return (
      <>
        <div>How are you feeling today?</div>
        <form>
          <select id="input" name="feeling">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Next" />
          <br/> Select a value
        </form>
      </>
    );
  }
  
  export default StepOne;
  