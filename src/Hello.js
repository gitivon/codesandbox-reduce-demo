import React from 'react';
import { action as doAction } from './store/action';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Button = styled.button`
  background-color: #f50;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 3px;
`;

class Hello extends React.Component {
  render() {
    const { id, onClick } = this.props;
    return (
      <div>
        id: {id}
        <Button onClick={onClick}>点我吧</Button>
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
