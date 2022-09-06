import PropTypes from 'prop-types';

import { Container } from './styles';

import Information from '../Information';

export default function Body({ datas }) {
  return (
    <Container>
      <div id="backgroundPerfil">
        <img src={datas.avatar_url} alt="Foto de Perfil" />
      </div>
      <Information datas={{ ...datas }} />
    </Container>
  );
}

Body.propTypes = {
  datas: PropTypes.shape({
    avatar_url: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
