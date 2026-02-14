import {useState} from "react"
import Header from "./components/Header"
import ApplicantTable from "./components/ApplicantTable"
import CSVUploader from "./components/CSVUploader"

// function to clean the CSVdata's keys from the object array
// row (a JS object) represents an applicant from each row in the CSV
function normalizeApplicant(row) {

  // debugging
  // console.log(Object.keys(row)) 

  const firstName = row["First name:"] || ""
  const lastName = row["Last name:"] || ""
  const gender = row["Gender:"] || ""
  const speakerTypeKey = Object.keys(row).find(key => key.toLowerCase().includes("are you a native"))
  const speakerType = row[speakerTypeKey].split(" ").slice(0,2).join(" ") || ""
  const spokenLanguagesKey = speakerType === "Native speaker" ? Object.keys(row).find(key => key.toLowerCase().includes("fluent in a language other than english")) : Object.keys(row).find(key => key.toLowerCase().includes("what is your native language"))
  const spokenLanguages = row[spokenLanguagesKey].split(/[,;]/)
  const multiplePartnersKey = Object.keys(row).find(key => key.toLowerCase().includes("more than one partner"))
  const multiplePartners = row[multiplePartnersKey] || ""
  const commentKey = Object.keys(row).find(key => key.toLowerCase().includes("comments"))

  const availability = {
    Monday: row["Monday"].split(";"),
    Tuesday: row["Tuesday"].split(";"),
    Wednesday: row["Wednesday"].split(";"),
    Thursday: row["Thursday"].split(";"),
    Friday: row["Friday"].split(";"),
    Saturday: row["Saturday"].split(";"),
    Sunday: row["Sunday"].split(";"),
  }

  const comment = row[commentKey] || ""

  return {
    firstName: firstName,
    lastName: lastName,
    gender: gender,
    speakerType: speakerType,
    spokenLanguages: spokenLanguages,
    availability: availability,
    multiplePartners: multiplePartners,
    comment: comment,
  }
}

function App() {

  const [applicants, setApplicants] = useState([]);

  function  handleCSVData(CSVdata) {
    const normalizedData = CSVdata.map(normalizeApplicant)
    console.log(normalizedData)
    setApplicants(normalizedData)
  }

  return (
    <>
      <Header />
      <ApplicantTable applicants={applicants} />
      <CSVUploader receiveCSVData={handleCSVData}  />
    </>
  )
}

export default App