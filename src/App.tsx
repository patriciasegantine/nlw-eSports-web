import {LandingPage} from './views/landing-page/landing-page';
import {GlobalStyle} from './global.styles'
import {defaultTheme} from './themes/defaultTheme';
import {ThemeProvider} from 'styled-components';

function App() {

  return (

    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <LandingPage/>
    </ThemeProvider>
  )
}

export default App
