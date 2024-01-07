
// import HomePage from 'pages/HomePage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectSchedulePage from './pages/ProjectSchedulePage';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  function AppUI() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProjectSchedulePage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    );
  }

  return (
    <>
      <Provider store={store}>
        <AppUI />
      </Provider>
    </>
  );
}

export default App;
