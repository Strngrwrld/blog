import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Profile from '../containers/profile';
import ErrorNotFound from '../components/errorNotFound';

const App = () => (
  <BrowserRouter>
    <Switch>
      {/* <Route exact path='/' component={Profile} /> */}
      <Route component={ErrorNotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
