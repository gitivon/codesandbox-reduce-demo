import React from "react";
import { action as doAction } from "./store/action";
import { connect } from "react-redux";

class Hello extends React.Component {
  render() {
    const { id, onClick } = this.props;
    return (
      <div>
        id: {id}
        <button onClick={onClick}>点我吧</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    id: state.reducerA.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick() {
      dispatch(doAction(3));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello);
