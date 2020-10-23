import * as React                 from 'react';
import * as ReactDOM              from 'react-dom';
import      {HashRouter, Route }  from 'react-router-dom'

import      WelcomePage           from './views/WelcomePage'
import      RebuildFiles          from './views/RebuildFiles'
import      HomePage              from './views/HomePage'

import   * as Utils               from './utils/utils'

const App = () => (

    <HashRouter>      
      <div>
        <Route path="/"                       exact component=  { localStorage.getItem(Utils.WELCOME_PAGE_VISTIED_KEY) != Utils.WELCOME_PAGE_VISTIED_VAL ? WelcomePage:RebuildFiles} />
        <Route path="/home"                   exact component=  { HomePage            } />
        <Route path="/rebuildFiles"           exact component=  { RebuildFiles        } />
      </div>
    </HashRouter>
);

console.log(localStorage.getItem(Utils.WELCOME_PAGE_VISTIED_KEY))

ReactDOM.render(<App />, app);