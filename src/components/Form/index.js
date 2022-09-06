import PropTypes from 'prop-types';

import { Container } from './styles';

import Input from '../Input';
import GeneratorColor from '../GeneratorColor';
import Button from '../Button';

export default function Form(props) {
  return (
    <Container>
      <form onSubmit={props.onButton}>
        <label htmlFor="name">
          Busque o Usuário:
          <Input
            type="text"
            placeholder="Pesquisar usuário"
            id="name"
            onChange={props.onInput}
            error={props.error}
          />
          {
          props.error === 'Not Found'
            ? <small>Usuário não encontrado! &#128528;</small>
            : ''
          }
          <Button type="submit">Buscar</Button>
        </label>
      </form>
      <GeneratorColor />
    </Container>
  );
}

Form.propTypes = {
  onButton: PropTypes.func.isRequired,
  onInput: PropTypes.func.isRequired,
  error: PropTypes.string,
};

Form.defaultProps = {
  error: null,
};
