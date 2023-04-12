import React from "react";
import Loading from "./loading";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      date: "",
      lastName: "",
      schoolName: "",
      study: "",
      isLoading: false,
      headshot: null,
      jobDescriptions: { name: "", position: "" },
      setJobDescriptions: { name: "", position: "" },
    };
  }

  handleHeadshotChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      this.setState({ headshot: e.target.result });
    };
    reader.readAsDataURL(file);
  };

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhoneChange = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  handleDateChange = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleLastNameChange = (e) => {
    this.setState({
      lastName: e.target.value,
    });
  };

  handleSchoolNameChange = (e) => {
    this.setState({
      schoolName: e.target.value,
    });
  };

  handleStudyChange = (e) => {
    this.setState({
      study: e.target.value,
    });
  };

  handleSubmit = (e) => {
    this.setState({
      isLoading: true,
    });
    e.preventDefault();

    setTimeout(() => {
      // Set isLoading state to false after a delay (simulating API call or processing)
      this.setState({ isLoading: false });
      // Do something with the form data or handle success
    }, 2000); // Delay for 2 seconds (for demonstration purposes)
  };

  handleAddCompany = () => {
  const { jobDescriptions, setJobDescriptions }= this.state;
  if (setJobDescriptions) {
    this.setState({
      jobDescriptions: [...jobDescriptions,  setJobDescriptions], // Add new job description to the workExperience array
      setJobDescriptions: '', // Reset the newJobDescription state field
    });
  }
}

  handleRemoveCompany = (index) => {
    const {jobDescriptions}= this.state;
    this.setState({
      jobDescriptions: jobDescriptions.filter((job, i) => i !== index),
    });
  }

handleUpdateCompany = (index, setJobDescriptions) => {
  this.setState((prevState) => {
  const updatedJobDescriptions = [...prevState.jobDescriptions];
  updatedJobDescriptions[index] = setJobDescriptions;
  return {
    jobDescriptions: updatedJobDescriptions,
  };
});
}



  render() {
    const { name, lastName, schoolName, study, email, phone, date, isLoading,
       jobDescriptions, setJobDescriptions} =
      this.state;

    return (
      <div className="cvContainer">
        <div className="cvHeader">CV-Application Generator</div>
        {isLoading ? (
          <Loading /> // Render the Loading component when isLoading is true
          ) : (
          <form onSubmit={this.handleSubmit}>
            <h4>General Information</h4>

            <div className="info">
              <label htmlFor="name">
                {" "}
                First-Name:
                <input
                  onChange={this.handleNameChange}
                  name="name"
                  value={name}
                  type={"text"}
                  id="taskInput"
                  required
                />
              </label>

              <label htmlFor="lastName">
                {" "}
                Last-Name:
                <input
                  onChange={this.handleLastNameChange}
                  name="lastName"
                  value={lastName}
                  type={"text"}
                  id="taskInput"
                  required
                />
              </label>

              <label htmlFor="lastName">
                {" "}
                Email:
                <input
                  onChange={this.handleEmailChange}
                  name="email"
                  value={email}
                  type={"email"}
                  id="taskInput"
                  required
                />
              </label>

              <label htmlFor="lastName">
                {" "}
                Phone-Number:
                <input
                  onChange={this.handlePhoneChange}
                  name="phone"
                  value={phone}
                  type={"tel"}
                  id="taskInput"
                  required
                />
              </label>
            </div>

            <h4>Experience</h4>

            <div className="experience">
              <label htmlFor="lastName">
                {" "}
                School-Name:
                <input
                  onChange={this.handleSchoolNameChange}
                  name="schoolName"
                  value={schoolName}
                  type={"text"}
                  id="taskInput"
                  required
                />
              </label>

              <label htmlFor="lastName">
                {" "}
                Title of Study:
                <input
                  onChange={this.handleStudyChange}
                  name="study"
                  value={study}
                  type={"text"}
                  id="taskInput"
                  required
                />
              </label>

              <label htmlFor="lastName">
                {" "}
                Start:
                <input
                  onChange={this.handleDateChange}
                  name="date"
                  value={date}
                  type={"date"}
                  id="taskInput"
                  required
                />
              </label>

              <label htmlFor="lastName">
                {" "}
                End:
                <input
                  onChange={this.handleDateChange}
                  name="date"
                  value={date}
                  type={"date"}
                  id="taskInput"
                  required
                />
              </label>
              <label htmlFor="photo">
                Upload your headshot image
                <input
                  type="file"
                  name="photo"
                  required
                  id="photo"
                  accept="image/x-png,image/jpeg"
                  onChange={this.handleHeadshotChange}
                />
              </label>
            </div>

  
              <h3>Companies you have worked at</h3>

              <ul>
  {jobDescriptions.map((job, index) => ( 
    <li key={job.id}>
      {index}
       {/* Assuming job has an 'id' property */}
      {job.description} {/* Assuming job has a 'description' property */}
      <button type="button" onClick={() => this.handleRemoveJob(job.id)}>Remove</button> {/* Pass job.id as the argument */}
    </li>
  ))}
</ul>
                <div className="nestedContainer" >
                  <div className="companies">
                   <label htmlFor='name'>Company Name</label>
                   <input
                            type='text'
                            name='name'
                            value={jobDescriptions}
                            required
                            onChange={this.handleUpdateCompany}
                        />
                  </div>
                  <div className='companies'>
                        <label htmlFor='position'>Position Held</label>
                        <input
                            type='text'
                            name='position'
                            value={setJobDescriptions}
                            required
                            onChange={this.handleUpdateCompany}
                        />
                    </div>

                    <div className='btn__group'>
                    {jobDescriptions.length - 1 ===  jobDescriptions.length < 4 && (
                            <button id='addBtn' onClick={this.handleAddCompany}>
                                Add
                            </button>
                        )}
                        {jobDescriptions.length > 1 && (
                            <button id='deleteBtn' onClick={this.handleRemoveCompany}>
                                Del
                            </button>
                        )}
                    </div>
                </div>
            <h4>
              <button>CREATE RESUME</button>
            </h4>
          </form>
        )};
      </div>
    );
  }
}
   
export default Home;
