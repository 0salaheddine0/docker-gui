import { Provider } from 'mobx-react'
import React from 'react'
import {
  Router as ReactRouter,
  Route,
  browserHistory,
  IndexRedirect,
} from 'react-router'
import AppStore from 'stores/AppStore'
import Login from './components/Login/Login'
import App from './components/App'
import Images from './components/Images/Images'
import Containers from './components/Containers/Containers'
import Volumes from './components/Volumes/Volumes'
import Networks from './components/Networks/Networks'
import Logs from './components/Logs/Logs'
import ContainerStat from './components/ContainerStats/ContainerStats'
import ContainerRLTStats from './components/ContainerStats/ContainerRLTStats'

export default class Router extends React.Component {
  props: {
    store: AppStore,
  };

  render() {
    return (
      <Provider store={this.props.store}>
        <ReactRouter history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRedirect to="images" />
            <Route path="login" component={Login} />
            <Route path="images" component={Images} />
            <Route path="containers" component={Containers} />
            <Route path="container-stats" component={ContainerStat} />
            <Route path="container-stats/:id" component={ContainerRLTStats} />
            <Route path="volumes" component={Volumes} />
            <Route path="networks" component={Networks} />
            <Route path="Logs" component={Logs} />
          </Route>
        </ReactRouter>
      </Provider>
    )
  }
}
