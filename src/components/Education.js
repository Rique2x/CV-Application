import React, {useState} from 'react';

import AddedEducation from './AddedEducation'; 

const Education = () => {

    const [ education, setEducation] = useState({
      institution: '',
      fieldOfFocus: '',
      dateFrom: '',
      dateTo: '',
    });
    const [allEducation, setAllEducation] = useState([]);

    const handleInstitutionChange = (event) => {
        setEducation((prevState) => ({
            education: {
              ...prevState.education,
              institution: event.target.value
            },
          }));
    }

    const handleFieldOfFocusChange = event => {
        setEducation((prevState) => ({
            education: {
              ...prevState.education,
              fieldOfFocus: event.target.value
            },
          }));
    }
    const handleDateFromChange = (event) => {
        setEducation((prevState) => ({
          education: {
            ...prevState.education,
            dateFrom: event.target.value
          },
        }));
      };
    
    const handleDateToChange = (event) => {
        setEducation((prevState) => ({
          education: {
            ...prevState.education,
            dateTo: event.target.value
          },
        }));
      };

    const onSubmitEducation = event => {
        event.preventDefault();
        setAllEducation(prevState => [...prevState, education]);
        setEducation((prevState) => ({
          allEducation: [...prevState.allEducation, prevState.education],
            education: {
         
                institution: '',
                fieldOfFocus: '',
                dateFrom: '',
                dateTo: '',
            }
        }));
      };

      const deleteEducation = (index) => {
        setEducation((prevState) => ({
          allEducation: prevState.allEducation.filter((education, i) => i !== index),
        }));
      };


        return (
            <div className="education">
                <h3>Education</h3>
                <div id="added-education">
                  <AddedEducation allEducation={allEducation} deleteEducation={deleteEducation}/>
                </div>
                <form onSubmit={onSubmitEducation} className="no-print">
                    <div>
                        <div>
                            <label>Institution:</label>
                            <input type="text" value={education.institution} onChange={handleInstitutionChange}></input>
                        </div>
                        <div>
                            <label>Field of Focus:</label>
                            <input type="text" value={education.fieldOfFocus} onChange={handleFieldOfFocusChange}></input>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>From:</label>
                            <input className="date" type="date" value={education.dateFrom} onChange={handleDateFromChange}></input>
                        </div>
                        <div>
                            <label>To:</label>
                            <input className="date" type="date" value={education.dateTo} onChange={handleDateToChange}></input>
                        </div>
                    </div>
                    <button id="add-education" className="no-print" type="submit">Save</button>
                </form>
            </div>
        )
}

export default Education;