import React, {useState} from 'react';
import axios  from "axios";
function Form() {
    //const classes = useStyle();

    const [student,  setStudent] = useState({
        regNo : 0,
        studentName: '',
        grade : '',
        section: ''
    });

    const createStudent = () => {
        axios.post('http://localhost:5000/students',student).then(() =>
        {
          window.location.reload(false);
        })
    }
  return (
      <>
      <h2> Create Student </h2>
    <form noValidate autoComplete="off">
      <input id="standard-basic" label="Reg.NUmber" variant="standard" value={student.regNo} 
        onChange={(event) => {setStudent({...student, regNo: event.target.value}) }}/>
      <input id="standard-basic" label="Name" variant="standard" value={student.studentName} 
        onChange={(event) => {setStudent({...student, studentName: event.target.value}) }}/>
      <input id="standard-basic" label="Grade" variant="standard" value={student.grade}
        onChange={(event) => {setStudent({...student, grade: event.target.value}) }}/>
      <input id="standard-basic" label="Section" variant="standard" value={student.section}
        onChange={(event) => {setStudent({...student, section: event.target.value}) }}/>


      <button variant='contained' color='primary' onClick={createStudent}>

        Create
      </button>
    </form>
    </>
  )
}

export default Form;