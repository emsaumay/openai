import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <div className="projects">
            <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Project 1 */}
                <div className="project-card bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-2">Project 1</h3>
                    <p className="text-gray-400">Description of Project 1.</p>
                </div>
                {/* Project 2 */}
                <div className="project-card bg-gray-800 p-4 rounded-lg">
                    <h3 className="text-2xl font-bold text-white mb-2">Project 2</h3>
                    <p className="text-gray-400">Description of Project 2.</p>
                </div>
                {/* Add more projects as needed */}
            </div>
        </div>
    );
};

export default Projects;