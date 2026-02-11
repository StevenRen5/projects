const sampleApplicants = [
  {
    id: "a1",
    name: "Bob Chen",
    email: "bob.chen@baruchmail.cuny.edu",
    phone: "123-456-789",
    gender: "male",
    classLevel: "sophomore",
    major: "finance",
    emplid: 123456789,
    speakerType: "native",
    spokenLanguages: ["Chinese", "Taiwanese"],
    availability: {
      Monday: ["12–1pm"],
      Tuesday: [],
      Wednesday: ["3–4pm"],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    },
    multiplePartners: false,
    partnerGenderPref: "male",
    comment: "N/A"
  },
  {
    id: "a2",
    name: "Mary Lee",
    email: "mary.lee@baruchmail.cuny.edu",
    phone: "123-456-789",
    gender: "female",
    classLevel: "freshman",
    major: "art",
    emplid: 123456789,
    speakerType: "nonnative",
    spokenLanguages: ["French"],
    availability: {
      Monday: [],
      Tuesday: ["4–5pm"],
      Wednesday: [],
      Thursday: [],
      Friday: [],
      Saturday: [],
      Sunday: []
    },
    multiplePartners: true,
    partnerGenderPref: "male",
    comment: "N/A"
  }
];

export default sampleApplicants;
