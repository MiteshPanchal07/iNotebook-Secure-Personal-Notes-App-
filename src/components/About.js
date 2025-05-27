import React from 'react';


const About = () => {
  return (
    <div>
      <div className="container my-4">
        <h2 className="text-center mb-4">About iNotebook</h2>
        <div className="row">
          <div className="col-md-6">
            <h4>Your Digital Notebook Solution</h4>
            <p>iNotebook is a secure cloud-based note-taking application that helps you keep your thoughts, ideas and important information organized and accessible from anywhere.</p>
            <p>With iNotebook, you can:</p>
            <ul>
              <li>Create, edit and delete notes easily</li>
              <li>Add tags to categorize your notes</li>
              <li>Access your notes securely with user authentication</li>
              <li>Store your notes safely in the cloud</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Why Choose iNotebook?</h4>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">🔒 Secure</h5>
                <p className="card-text">Your notes are protected with user authentication and stored securely</p>
              </div>
            </div>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">☁️ Cloud Storage</h5>
                <p className="card-text">Access your notes from any device, anytime</p>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">🚀 Easy to Use</h5>
                <p className="card-text">Simple and intuitive interface for managing your notes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
