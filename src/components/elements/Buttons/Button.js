import { Link } from 'react-router-dom';
import { Button as Buttons } from '@mui/material';
import styled from 'styled-components';

const getButton = props => {
  return <ButtonStyled onClick={props.onclick} {...props}>{props.children}</ButtonStyled>;
};

/**
 * @param size fontsize
 * @param variant 'contained | outlined'
 * @param href Link
 * @param bgcolor Custom button color
 * @param onclick
 */

const Button = props => {
  return <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
    {props.href ? <Link to={props.href}>{getButton(props)}</Link> : getButton(props)}
  </div>

};

export default Button;

const ButtonStyled = styled(Buttons)`
  background-color: ${props => props.bgcolor && props.bgcolor + '!important'};
  font-size: ${props => props.size}px !important;
  color: black;
  width: ${props => props.width};
`;
