import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Card from '../Card';
import Form from '../Form';

import useApi from '../../hooks/useApi';

import { Container } from './styles';

function App() {
  const {
    error,
    data,
    handleSearch,
    handleSubmit,
  } = useApi();

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Card datas={data} />
        <Form
          onInput={handleSearch}
          onButton={handleSubmit}
          error={error}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
