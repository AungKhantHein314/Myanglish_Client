import { Link } from 'react-router-dom';
import { Button as Buttons } from '@mui/material';
import styled from 'styled-components';

const getButton = props => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

/**
 * @param size Button size 'small | medium | large'
 * @param variant 'contained | outlined'
 * @param href Link
 * @param bgcolor Custom button color
 * @param startIcon Left icon
 * @param endIcon Right icon
 */

const Button = props => {
  return props.href ? <Link to={props.href}>{getButton(props)}</Link> : getButton(props);
};

export default Button;

const ButtonStyled = styled(Buttons)`
  background-color: ${props => props.bgcolor && props.bgcolor + '!important'};
  font-size: ${props => props.fontSize.sm}px !important;
`;
