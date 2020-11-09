import React from 'react'
import FileUpload from './component/FileUpload'
import './App.css';

function App() {
  return (
    <div className='container mt-4'>
      <h4 className="display-4 text-center mb-4">
        <i className="fab fa-react"></i> React File Upload
        <FileUpload />
      </h4>
    </div>
  );
}

export default App;
