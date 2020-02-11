import React from 'react';
import {
  EuiPage,
  EuiPageBody,
  EuiPageContent,
  EuiPageContentBody,
  EuiPageContentHeader,
  EuiPageContentHeaderSection,
  EuiTitle,
} from '@elastic/eui';
import Converter from './conponent/Converter';

const App = () => {
  return (
    <EuiPage>
      <EuiPageBody>
        <EuiPageContent>
          <Converter />
        </EuiPageContent>
      </EuiPageBody>
    </EuiPage>
  );
}

export default App;
