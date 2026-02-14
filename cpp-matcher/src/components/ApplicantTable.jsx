function ApplicantTable(props) {

  // debugging
  // Returns an array of all property names (keys) of the object
  if (props.applicants.length > 0) { console.log(Object.keys(props.applicants[0])) }
  console.log(props.applicants)

  const applicant = props.applicants.map(applicant => {

    const spokenLanguages = applicant.spokenLanguages.map(language => {
        return (
            <span>{language} </span>
        )
    })

    // Convert availability object keys (days) into an array we can iterate over
    const availability = Object.keys(applicant.availability).map(day => {
        return applicant.availability[day].length > 0 ? `${day}: ${applicant.availability[day].join(", ")}` : ""
    }).filter(day => day != "").join(", ") 

    return (
        <tr>
            <td>{applicant.firstName}</td>
            <td>{applicant.lastName}</td>
            <td>{applicant.gender}</td>
            <td>{applicant.speakerType}</td>
            <td>{spokenLanguages}</td>
            <td>{applicant.multiplePartners === "Yes" ? "Yes" : "No"}</td>
            <td>{availability}</td>
            <td>{applicant.comment}</td>
        </tr>
    )
  })

  return (
      <table className="applicant-table">
          <thead>
              <tr>
                  <td>First Name</td>
                  <td>Name</td>
                  <td>Gender</td>
                  <td>Speaker Type</td>
                  <td>Spoken Languages</td>
                  <td>Multiple Partners</td>
                  <td>Availability</td>
                  <td>Comment</td>
              </tr>
          </thead>
          <tbody>{applicant}</tbody>
      </table>
  )
}
export default ApplicantTable

// format spokenlanguages & availbility