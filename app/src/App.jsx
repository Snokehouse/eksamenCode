import React from 'react';

import Theme from './Components/Styles/Theme';
import Routes from './Components/Struktur/Routes';
import AuthProvider from './Components/Struktur/Context/AuthProvider';

const App = () => (
  <>
    <Theme>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Theme>
  </>
);

export default App;
