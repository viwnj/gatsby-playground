import axios from "axios"
const cosmicApi = axios.create({
  baseURL: "https://api.cosmicjs.com",

  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZpdG9yaG1zMTBAZ21haWwuY29tIiwicGFzc3dvcmQiOiJiNzlmN2YxMDlmNmI2YTNkMWJhYTY3MjYwOWUzZTJmNSIsImlhdCI6MTU3Mzg0ODM2Nn0.1A1TNpymp4RrFMLE89_y-rFlY-cdI98rtaSmpgkr7P4",
  },
})

export default cosmicApi
