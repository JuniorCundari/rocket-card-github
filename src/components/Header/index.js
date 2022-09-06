import PropTypes from 'prop-types';

import { Container } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header({ datas }) {
  return (
    <Container>
      <div id="backgroundImage">
        <img src={logo} alt="Logo Rocketseat" />
      </div>
      <h3>{datas.login}</h3>
    </Container>
  );
}

Header.propTypes = {
  datas: PropTypes.shape({
    login: PropTypes.string.isRequired,
  }).isRequired,
};
