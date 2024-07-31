



















import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
// import "./style.css"
// import "./Index.css"
// import "./File.css"

//import Ccolor from './Ccolor.jsx'
import store from './store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
         <App/>
  </Provider>


)
