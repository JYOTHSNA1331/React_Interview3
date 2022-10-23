import State  from './Components/State'
import Effect from './Components/Effect';
import Reducer from './Reducer'
import Parent from './Components/Parent';

function App() {
  return (
    <div className="App">
      <h3>Difference between Axios and fetch</h3>
      <table border="1px">
        <tr>
        <th>Axios</th>
        <th>Fetch</th>
        </tr>
        <tr>
          <td>Axios has url in request object.</td>
          <td>Fetch has no url in request object.</td>
        </tr>
        <tr>
          <td>Axios enjoys built-in XSRF protection.</td>
          <td>Fetch does not</td>
        </tr>
        <tr>
          <td>Axios uses the data property.</td>
          <td>Axios uses the body property.</td>
          </tr>
          <tr>
          <td>Axios performs automatic transforms of JSON data.</td>
          <td>Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.</td>
          </tr>
      </table>
      <h3>What is UseState Hook ?(Implementation)</h3>
      <State />
      <h3>What is UseEffect Hook ?(Implementation)</h3>
      <Effect />
      <h3>What is UseReducer Hook ?(Implementation)</h3>
      <Reducer />
      <h3>How do you pass data from parent to child</h3>
      <Parent />
    </div>
  );
}

export default App;
