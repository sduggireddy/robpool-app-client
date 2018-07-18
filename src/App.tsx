import * as React from 'react';
import AppHeader from './components/AppHeader';
import { device } from './styles/device';
import styled from './theme';

const AppWrapper = styled.div`
  margin-top:15px;
  padding-right:15px;
  padding-left:15px;
  margin-right:auto;
  margin-left:auto;

  @media ${device.tablet} {
    max-width: 750px;
  }

  @media ${device.desktop} {
    max-width: 970px;
  }

  @media ${device.desktopL} {
    max-width: 1170px;
  }
`;

const AppIntro = styled.p`
  font-size: large;
`;

class App extends React.Component {
  public render() {
    return (
      <AppWrapper>
        <AppHeader />
        
        <AppIntro>
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </AppIntro>
      </AppWrapper>
    );
  }
}

export default App;
