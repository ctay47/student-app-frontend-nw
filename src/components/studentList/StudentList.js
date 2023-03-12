import { useState, useEffect } from 'react';

import StudentCard from '../studentCard/StudentCard'





const StudentList = () => {
    
    const API_URL = "http://localhost:9000"
    
    
    const [studentData, setStudentData] = useState([])
  
    useEffect(() => {
               async function fetchData() {
            const response = await fetch(`${API_URL}/students`)
            const json = await response.json()
            const { data } = json;
            setStudentData(data)
               }
        
        fetchData()
    }, []) //empyty array means run on mount

    
  
    return (
        <div className='studentList'>
            {studentData.map((student) => (
                <StudentCard key={student.id}  student={student} />  
            ))}
        </div>
  )
}

export default StudentList










