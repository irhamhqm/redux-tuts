
import { useSelector, useDispatch } from 'react-redux'

import { incrementAction } from './actions';

function A() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      A<br />
      {counter}<br />
      <button onClick={() => { dispatch(incrementAction) }}>+</button>
    </div>
  )
}

export default A;
