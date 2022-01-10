
import { connect } from 'react-redux';

import { decrementAction } from './actions';

function B({ counter, decrement }) {
  const decrementFn = () => {
    decrement(counter);
  }
  return (
    <div>
      B<br />
      {counter}<br />
      <button onClick={decrementFn}>-</button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
  decrement: (counter) => { 
    if (counter > 0) {
      dispatch(decrementAction)
    }
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(B);
