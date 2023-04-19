import React, { useState } from "react";

import AddedExperience from "./AddedExperience";

const Experience = () => {
  
  const [experience, setExperience] = useState({
    company: {
      text: '',
    },
    position: {
      text: '',
    },
    dateFrom: {
      text: '',
    },
    dateTo: {
      text: '',
    },
    tasks: {
      text: '',
    },
  });



const [allExperience, setAllExperience] = useState([])

const handleCompanyChange = (event) => {
  setExperience((prevState) => ({
    ...prevState,
    company: {
        text: event.target.value,
    },
}));
};

const handlePositionChange = (event) => {
  setExperience((prevState) => ({
    ...prevState,
    position: {
        text: event.target.value,
    },
}));
};

const handleDateFromChange = (event) => {
  setExperience((prevState) => ({
    ...prevState,
    dateFrom: {
        text: event.target.value,
    },
}));
};

const handleDateToChange = (event) => {
  setExperience((prevState) => ({
    ...prevState,
            tasks: {
                text: event.target.value,
            },
        }));
    };

const handleTasksChange = (event) => {
  setExperience((prevState) => ({
    experience: {
      ...prevState.experience,
      tasks: {
        text: event.target.value,
      },
    },
  }));
};

const onSubmitExperience = (event) => {
  event.preventDefault();
  setAllExperience(prevState => [...prevState, experience]);
    setExperience({
      company: {
          text: '',
      },
      position: {
          text: '',
      },
      dateFrom: {
          text: '',
      },
      dateTo: {
          text: '',
      },
      tasks: {
          text: '',
      },
  });
};


const deleteExperience = (index) => {
  setAllExperience(prevState => 
    prevState.filter(
      (experience, i) => i !== index
    ),
  );
    }

  return (
    <div className="experience" id="">
      <h3>Experience</h3>
      <div id="added-experience">
        <AddedExperience
          allExperience={allExperience}
          deleteExperience={deleteExperience}
        />
      </div>
      <form onSubmit={onSubmitExperience} className="no-print">
        <div>
          <div>
            <label>Company:</label>
            <input
              type="text"
              value={experience.company.text}
              onChange={handleCompanyChange}
            ></input>
          </div>
          <div>
            <label>Position:</label>
            <input
              type="text"
              value={experience.position.text}
              onChange={handlePositionChange}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label>From:</label>
            <input
              className="date"
              type="date"
              value={experience.dateFrom.text}
              onChange={handleDateFromChange}
            ></input>
          </div>
          <div>
            <label>To:</label>
            <input
              className="date"
              type="date"
              value={experience.dateTo.text}
              onChange={handleDateToChange}
            ></input>
          </div>
        </div>
        <div>
          <div>
            <label>Tasks:</label>
            <textarea
              type="text"
              value={experience.tasks.text}
              onChange={handleTasksChange}
            ></textarea>
          </div>
        </div>
        <button className="no-print" id="add-experience" type="submit">
          Save
        </button>
      </form>
    </div>
  )
};



export default Experience;
