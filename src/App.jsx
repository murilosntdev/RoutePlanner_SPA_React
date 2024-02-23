import { GlobalStyled } from './GlobalStyled';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from './themes/theme.js';
import MainRoutes from './routes';

function App() {
  return (
    <>
      <GlobalStyled />
      <ThemeProvider theme={theme}>
        <Router>
          <MainRoutes />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
