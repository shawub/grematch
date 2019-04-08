import React from "react";
import { connect } from "react-redux";

const Count = props => (
  <div>
    <h1>The count is: {props.count}</h1>
    <button onClick={props.increment}>Add 1</button>
    <button onClick={props.incrementAsync}>Add 1 Async</button>
  </div>
);

const mapState = state => ({
  count: state.count
})

const mapDispatch = ({ count: { increment, incrementAsync }}) => ({
  increment: () => increment(1),
  incrementAsync: () => incrementAsync(1)
})

export default connect(mapState, mapDispatch)(Count);