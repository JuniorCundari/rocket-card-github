import PropTypes from 'prop-types';

import { Container } from './styles';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';

export default function Card({ datas }) {
  return (
    <Container>
      <div id="backgroundCard">
        <Header datas={{ ...datas }} />
        <Body datas={{ ...datas }} />
        <Footer />
      </div>
    </Container>
  );
}

Card.propTypes = {
  datas: PropTypes.shape({
    login: PropTypes.string.isRequired,
    avatar_url: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    public_repos: PropTypes.number.isRequired,
    company: PropTypes.string,
    location: PropTypes.string,
  }).isRequired,
};
