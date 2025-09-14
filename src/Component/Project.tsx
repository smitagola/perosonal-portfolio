import React from 'react';

interface ProjectProps {
  imageSrc: string;
  title: string;
  description: string;
  githubLink: string;
  deployLink?: string;
}

const Project: React.FC<ProjectProps> = ({
  imageSrc,
  title,
  description,
  githubLink,
  deployLink,
}) => {
  return (
    <div  className='mb-auto'>

    <div className="max-w-80  mx-auto my-auto  bg-transparent text-black border-black border-solid border-2 p-2 shadow-lg rounded-lg overflow-hidden mb-12 my-6 flex flex-col justify-between h-full sm">
      <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="mt-2">{description}</p>
        </div>

        {/* Buttons at the bottom of the card */}
        <div className={`mt-4 flex gap-4 ${deployLink ? 'justify-end' : 'justify-center'}`}>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-32 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors text-center"
          >
            GitHub
          </a>
          {deployLink && (
            <a
              href={deployLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-32 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors text-center"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
            </div>
  );
};

export default Project;
