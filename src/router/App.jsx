import Nav from '@components/nav';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import MusicQQ from '@pages/music_qq';
import Music163 from '@pages/music_163';
import Footer from '@components/footer';

function App() {

  return (
    <Router>
      <div className="app">
        <Nav />
        <div className="music-poly-container">
          <Switch>
          <Redirect exact from="/" to="/QQmusic/home"/>
          <Redirect exact from="/QQmusic/" to="/QQmusic/home"/>
            <Route path="/QQmusic/" component={MusicQQ}></Route>
            <Route path="/music163/" component={Music163}></Route>
          </Switch>
        </div>
        <Footer />
      </div>

    </Router>

  )
}

export default App