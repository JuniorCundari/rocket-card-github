import PropTypes from 'prop-types';

import { Container } from './styles';

import followers from '../../assets/images/followers.svg';
import following from '../../assets/images/following.svg';
import repository from '../../assets/images/repository.svg';
import company from '../../assets/images/company.svg';
import location from '../../assets/images/location.svg';

export default function Information({ datas }) {
  return (
    <Container>
      <div id="infos">
        <img src={followers} alt="Ícone de seguidores" />
        <span>
          {`${datas.followers} Seguidores`}
        </span>
      </div>
      <div id="infos">
        <img src={following} alt="Ícone de seguidores" />
        <span>{`${datas.following} Seguindo`}</span>
      </div>
      <div id="infos">
        <img src={repository} alt="Ícone de seguidores" />
        <span>{`${datas.public_repos} Repositórios`}</span>
      </div>
      <div id="infos">
        <img src={company} alt="Ícone de seguidores" />
        <span>
          {
          datas.company === null
            ? 'Empresa'
            : datas.company
          }
        </span>
      </div>
      <div id="infos">
        <img src={location} alt="Ícone de seguidores" />
        <span>
          {
          datas.location === null
            ? 'Cidade'
            : datas.location
          }
        </span>
      </div>
    </Container>
  );
}

Information.propTypes = {
  datas: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
