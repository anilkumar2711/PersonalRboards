import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import NewProjectForm from './pages/NewProjectForm';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path= "/newproject" element={<NewProjectForm/>}/>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


