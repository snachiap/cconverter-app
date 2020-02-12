import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent
} from '@elastic/eui';
import Converter from './component/Converter';
import Summary from './component/Summary';

const App = () => {
  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent>
          <Summary />
          <Converter />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default App;
