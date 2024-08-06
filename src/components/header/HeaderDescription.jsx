import React from 'react';

function HeaderDescription() {
  const frontendDeveloper = {
    name: 'Sondos',
    title: 'Frontend Developer',
    skills: ['HTML', 'CSS', 'Bootstrap', 'TailwindCSS', 'JavaScript', 'OOP', 
      'SASS', 'React', 'React Router Dom', 'Redux Toolkit', 'Redux', 'NextJs', 'API'],
    tools: ['GitHub', 'Git', 'Socket.io', 'Postman'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    employable: function() {
      return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    }
  };

  return (
    <div className='header__description'>
      <div className='header_description_close'>
            <div className='Bubble'></div>
            <div className='Bubble'></div>
            <div className='Bubble'></div>
      </div>
      <div className='header_description_code'>
      <code>
            <div>
                <span className='const'>const</span>
                <span className='nameVariable'>frontendDeveloper</span>
                <span className='Equals  '>=</span>
                <span className='openCarly'>{`{`}</span>
            </div>
            <div className='value'>
                <span className='nameProberty'>name: </span>
                 <span className='ValueProberty'>'Sondos'</span>
                 <span className='coma'>,</span>
            </div>
            <div className='value'>
                <span className='nameProberty'>title: </span>
                 <span className='ValueProberty'>'Frontend Developer'</span>
                 <span className='coma'>,</span>
            </div>
            <div className='value valueSkills'>
                <span className='nameProberty'>skills: </span>
                <span className='openArray'>{`[`}</span>
                 <span className='ValueProberty'>'HTML'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'CSS'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'TailwindCSS'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'BootStrap'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'JaveScript'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'DOM'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'BOM'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'OOP'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'Sass'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'React'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'React Hooks'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'React Router'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'Redux'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'NextJs'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'API'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'Socket.io'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'Git'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'GitHub'</span>
                 <span className='coma'>,</span>
                 <span className='ValueProberty'>'Postman'</span>
                 <span className='closeArray'>{`]`}</span>
                 <span className='coma'>,</span>
            </div>
            <div className='value'>
                <span className='nameProberty'>hardWorker: </span>
                <span className='ValueProberty'>true</span>
                <span className='coma'>,</span>
            </div>
            <div className='value'>
                <span className='nameProberty'>problemSolver: </span>
                <span className='ValueProberty'>true</span>
                <span className='coma'>,</span>
            </div>
            <div>
              <span className='closeCarly'>{`}`}</span>
            </div>
      </code>
      </div>
    </div>
  );
}

export default HeaderDescription;
