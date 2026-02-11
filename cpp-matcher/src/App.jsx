import {useState} from "react"
import Header from "./components/Header"
import ApplicantTable from "./components/ApplicantTable"
import CSVUploader from "./components/CSVUploader"

// function to clean the CSVdata's keys from the object array
// row represents an applicant from each row in the CSV
function normalizeApplicant(row) {

  const speakerTypeKey = Object.keys(row).find(key => key.toLowerCase().includes("are you a native"))
  const spokenLanguagesKey = Object.keys(row).find(key => key.toLowerCase().includes("are you a native"))
  const multiplePartnersKey = Object.keys(row).find(key => key.toLowerCase().includes("more than one partner"))
  const commentKey = Object.keys(row).find(key => key.toLowerCase().includes("comments"))

  // normalize the spokelanguages for the specific speaker type

  return {
    firstName: row["First name:"] || "",
    lastName: row["Last name:"] || "",
    gender: row["Gender:"] || "",
    speakerType: row[speakerTypeKey].split(" ").slice(0,2).join(" ") || "",
    spokenLanguages: row[spokenLanguagesKey] || "",
    multiplePartners: row[multiplePartnersKey] || "",
    comment: row[commentKey] || ""
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

// oki see the console but why is it showing an array  ['Id', 'Start time', 'Completion time', 'Email', 'IMPORTANT: Please read this before you fill out the application form.', 'First name:', 'Last name:', 'Baruch email address: firstname.lastname@baruchmai…ny.edu OR firstname.lastname#@baruchmail.cuny.edu', 'Phone number:', 'Gender:', 'Class level:', 'Major:', 'EMPLID', 'Age:', 'Are you a native, near-native, or nonnative speake… Please read the following definitions carefully.', 'Sometimes more nonnative than native speakers appl…illing to have more than one partner. Even if the', 'What is your partner gender preference? (Please no…rease significantly if you mark "no preference".)', 'If you are a native English speaker, are you fluen…lect "Other" and type in "N/A" if not applicable.', 'If you are a nonnative speaker, what is your nativ…ect "Other" and type in "N/A" if not applicable.\n', ' If you are a nonnative speaker, how many years ha…ect "Other" and type in "N/A" if not applicable.\n', ' If you are a nonnative speaker, are you an intern…ect "Other" and type in "N/A" if not applicable.\n', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'If you are a NONNATIVE speaker, please rate how co…oficiency and cultural knowledge.\n.Spoken English', 'If you are a NONNATIVE speaker, please rate how co…ficiency and cultural knowledge.\n.Written English', 'If you are a NONNATIVE speaker, please rate how co…oficiency and cultural knowledge.\n.Pronounciation', 'If you are a NONNATIVE speaker, please rate how co…h proficiency and cultural knowledge.\n.Vocabulary', 'If you are a NONNATIVE speaker, please rate how co…lish proficiency and cultural knowledge.\n.Grammar', 'If you are a NONNATIVE speaker, please rate how co…and cultural knowledge.\n.Conversations in English', 'If you are a NONNATIVE speaker, please rate how co…d cultural knowledge.\n.Giving speeches in English', 'If you are a NONNATIVE speaker, please rate how co…y and cultural knowledge.\n.Participating in class', 'If you are a NONNATIVE speaker, please rate how co…and cultural knowledge.\n.Speaking with professors', 'If you are a NONNATIVE speaker, please rate how co…oficiency and cultural knowledge.\n.Baruch culture', 'If you are a NONNATIVE speaker, please rate how co…cy and cultural knowledge.\n.New York City culture', 'If you are a NONNATIVE speaker, please rate how co…proficiency and cultural knowledge.\n.U.S. culture', 'How did you find out about the Conversation Partners Program?', ' Are you getting extra credit or are you fulfillin…rement i