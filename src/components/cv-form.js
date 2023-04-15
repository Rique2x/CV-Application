import React from "react";
import ErrorPage from './errorpage';

class CvForm extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  replaceWithBr = (string) => {
    return string.replace(/\n/g, "<br />");
  };

  handlePrint = () => {
    alert('Print Successful!');
  }

  render() {
    const { result } = this.props;
    if (JSON.stringify(result) === '{}') {
      return <ErrorPage />;
    }

    return (
      <>
        <button onClick={this.handlePrint}>Print Page</button>
        <main className='container' ref={this.componentRef}>
        <header className='header'>
            <div>
              <h1>{result.fullName}</h1>
              <p className='resumeTitle headerTitle'>
                {result.currentPosition} ({result.currentTechnologies})
              </p>
              <p className='resumeTitle'>{result.currentLength} year(s) work experience</p>
            </div>
            <div>
              <img src={result.image_url} alt={result.fullName} className='resumeImage' />
            </div>
          </header>
          <div className='resumeBody'>
            <div>
              <h2 className='resumeBodyTitle'>PROFILE SUMMARY</h2>
              <p
                dangerouslySetInnerHTML={{ __html: this.replaceWithBr(result.objective) }}
                className='resumeBodyContent'
              />
            </div>
            <div>
              <h2 className='resumeBodyTitle'>WORK HISTORY</h2>
              {result.workHistory.map((work) => (
                <p className='resumeBodyContent' key={work.name}>
                  <span style={{ fontWeight: "bold" }}>{work.name}</span> - {work.position}
                </p>
              ))}
            </div>
            <div>
              <h2 className='resumeBodyTitle'>JOB PROFILE</h2>
              <p
                dangerouslySetInnerHTML={{ __html: this.replaceWithBr(result.jobResponsibilities) }}
                className='resumeBodyContent'
              />
            </div>
            <div>
              <h2 className='resumeBodyTitle'>JOB RESPONSIBILITIES</h2>
              <p
                dangerouslySetInnerHTML={{ __html: this.replaceWithBr(result.keypoints) }}
                className='resumeBodyContent'
              />
            </div>
          </div>
        </main>
      </>
    );
  }
}

export default CvForm