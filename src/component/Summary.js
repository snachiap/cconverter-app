import React, { Fragment } from 'react';
import { EuiTitle } from '@elastic/eui';
import { EuiText } from '@elastic/eui';
import { EuiButtonIcon } from '@elastic/eui';
import { EuiTextColor } from '@elastic/eui';

const Summary = () => {

  return (
    <Fragment>
      <EuiTitle>
        <h3>Task Summary</h3>
      </EuiTitle>
      <EuiText grow={false}>
        <p>Currency converter service built with Java Spring boot backend and React Frontend</p>
        <ui>
          <li>Spring boot backend gitrepo <EuiButtonIcon
            iconType="logoGithub"
            target="_blank"
            onClick={() => { }}
            href="https://github.com/snachiap/cconverter" />
            <ul>
              <li> <EuiTextColor color="subdued">Used EhCache </EuiTextColor></li>
              <li> <EuiTextColor color="subdued">Used interface design pattern </EuiTextColor></li>
              <li> <EuiTextColor color="subdued">CSRF security enabled with cookie storage policy </EuiTextColor></li>
              <li> <EuiTextColor color="subdued">React App is served as a static files. This is done just for deployment purpose </EuiTextColor></li>
            </ul>
          </li>
        </ui>

        <ui>
          <li>React front end gitrepo <EuiButtonIcon
            iconType="logoGithub"
            target="_blank"
            onClick={() => { }}
            href="https://github.com/snachiap/cconverter-app" />
          </li>
          <ul>
            <li><EuiTextColor color="subdued">Internaltinalization done in UI</EuiTextColor></li>
          </ul>
        </ui>

        <h5>Whats accomplished</h5>
        <ui>
          <li>
            <EuiTextColor color="subdued">
              {'Web i18n framework added to the UI, but not from the API level.'}
            </EuiTextColor>
          </li>
          <li>
            <EuiTextColor color="subdued">
              {'CSRF added with Cookie storage policy'}
            </EuiTextColor>
          </li>
          <li>
            <EuiTextColor color="subdued">
              {'CSP meta to block script. Not styles'}
            </EuiTextColor>
          </li>
          <li>
            <EuiTextColor color="subdued">
              {'Deployed to Heroku'}
            </EuiTextColor>
          </li>
        </ui>


        <h5>Whats NOT accomplished</h5>
        <ui>
          <li>
            <EuiTextColor color="subdued">
              {'Instrumentation has not been added. Frankly, I have not dont this and no before hand experience.'}
            </EuiTextColor>
          </li>
        </ui>

        <h4>Sample below</h4>
      </EuiText>
    </Fragment>
  )
}

export default Summary;