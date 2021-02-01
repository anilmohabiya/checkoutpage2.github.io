import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

import {Switch,Route, Redirect} from 'react-router-dom';
import Checkoutp2 from './Checkout2';
const App =()=>{

return(
<>

<Switch>
<Route exact path="/" component={Checkoutp2} />

<Redirect to ="/" />
</Switch>


</>


  );
};
export default App;
