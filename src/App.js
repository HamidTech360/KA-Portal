import APP_ROUTES from './routes'
import UserDetailsProvider from './context/user';

import './styles/bootstrap.css'
import './styles/main.css'




function App() {

  return (
   
       <UserDetailsProvider>
            <APP_ROUTES/>
       </UserDetailsProvider>
  
  );
}

export default App;
