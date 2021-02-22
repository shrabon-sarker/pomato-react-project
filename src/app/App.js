import { Helmet } from 'react-helmet';
import RouterApp from "./router";

function App() {
  return (
    <div >
      <Helmet>
        <title>Pomato</title>
        <meta name="keywords" content="html css javascript react bootstarp" />
        <meta name="description" content="this is a html template react convert doing" />
        <meta name="author" content="shrabon" />
        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />
      </Helmet>
      <RouterApp />
    </div>
  );
}

export default App;
