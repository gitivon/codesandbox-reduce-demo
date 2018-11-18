import React from 'react';
import { action as doAction } from './store/action';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Theme } from './theme';
import Pic from './images/theme.jpg';

const Button = styled.button`
  background-color: ${props => props.theme.main};
  color: ${props => props.theme.font};
  border: none;
  outline: none;
  border-radius: 3px;
`;

Button.defaultProps = {
  theme: {
    main: 'blue',
    font: '#FFF'
  }
};

class Hello extends React.Component {
  changeColorHandle = e => {
    console.log(e.target.value);
    Theme.main = e.target.value;
  };

  render() {
    const { id, onClick } = this.props;
    return (
      <div>
        id: {id}
        <Button onClick={onClick}>点我吧</Button>
        <img src={Pic} alt="末日机甲" width="250" />
        <input
          type="color"
          value={Theme.main}
          onChange={this.changeColorHandle}
        />
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
