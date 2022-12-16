
import './App.css';
import {

  Routes as Switch,
  Route
} from "react-router-dom";
import * as Sentry from "@sentry/react";
import { BrowserTracing } from "@sentry/tracing";
import { Main } from './components/main/main';
import { DetailView } from './components/detailview';
import { Menu } from './components/header';

Sentry.init({
  dsn: "https://3450e248a5b948b19e1eb7ad248ba366@o1170635.ingest.sentry.io/6264364",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

function App() {

  //Si me da tiempo añadir Header y Footer
 
  return (
    <div className="App">
        <Menu />
        <Switch>
          <Route path="/" element={<Main />}/>
          <Route path="/:id" element={<DetailView/>}/> 
        </Switch>

    
    </div>
  );
}

export default App;
