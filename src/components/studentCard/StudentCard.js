import React from 'react'

const StudentCard = ({student}) => {

    const { email, company, firstName, pic, lastName, grades, skill, id } = student;

    const calculateAverage = (grades) => {
        const sum = grades.reduce((sum, val) => sum + Number(val), 0) 
        return sum / grades.length;
    }
return (
    <div key={id} >
       
    <img src={pic} alt={`${firstName} ${lastName}`} />
        
        <h1> {firstName} {lastName} </h1>
        <ul>
        </ul>
        <li>email: {email}</li>
        <li>comapany: {company}</li>
        <li>Average: {calculateAverage(grades)}%</li>
        <li>skill: {skill}</li>

    </div>
)
  
}

export default StudentCard
