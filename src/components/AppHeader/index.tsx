import * as React from 'react';
import styled from '../../theme';

const NavWrapper = styled.div`
  display:block;
  padding-left: 0;
  margin-bottom: 0;
  list-style: none;

  position: relative;
  min-height: 50px;
  margin-bottom: 20px;
  border: 1px solid transparent;
`;

class AppHeader extends React.Component {
    public render() {
      return(
        <NavWrapper className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">Robpool</a>
            </div>
          </div>
        </NavWrapper>  
      )
    }
}

export default AppHeader;