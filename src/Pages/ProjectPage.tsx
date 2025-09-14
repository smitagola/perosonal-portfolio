import Project from '../Component/Project';
import { sampleProjects } from '../data';

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-indigo-950 mb-4">
            Projects & Work
          </h1>
          <p className="text-xl text-indigo-800 max-w-2xl mx-auto">
            Here are some of the projects I’ve worked on during my education and career.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            {sampleProjects.map((project) => (
              <div
                key={project.sectionId}
                className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out w-64"
              >
                <Project
                  imageSrc={project.imageSrc}
                  title={project.title}
                  description={project.description}
                  githubLink={project.githubLink}
                  deployLink={project.deployLink}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;