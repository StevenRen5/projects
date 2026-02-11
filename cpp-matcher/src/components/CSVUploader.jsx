import Papa from "papaparse"


// reads the CSV file 
function CSVUploader(props) {

    const sendDataToApp = props.receiveCSVData

    function handleFile(event) {
        const file = event.target.files[0]
        if (file === undefined || file === null) {return;}
        Papa.parse(file, {
            header: true, // uses first row of CSV as key names in objects
            skipEmptyLines: true,
            transformHeader: (h) => h.replace(/\s+/g, " ").trim(), // collapse whitespace from header (prevents "\n" from appearing)
            complete: (results) => sendDataToApp(results.data)
            // After PapaParse finishes parsing the CSV, it gives us results, and we send results.data to the function that App provided.
            // results.data is an array of objects ("rows")
        })
    }

    return (
        <input type="file" accept=".csv" onChange={handleFile}  />
    )
}

export default CSVUploader