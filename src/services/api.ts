import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZTIwOTFhZjYyYmNhZjI1NmMxNGUxMiIsIm5vbWUiOiJmZGdkZ2ZkZmciLCJlbWFpbCI6ImdnZ2dnZ2dAZ21haWwuY29tIiwiaXNBY3RpdmUiOnRydWUsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc0MzY0Mjg4NX0.mWqdMUIeFvmerpJsSUHKETFuZ5Z1uZHjERysxPd83DE"
    }
})

export default api;