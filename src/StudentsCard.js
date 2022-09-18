import StudentDetails from "./StudentDetails";
import { Link } from 'react-router-dom';
import Student from "./Student";

function StudentsCard() {

    let studentList = StudentDetails.allStudents();
    return (
        <>
            {studentList.map((students) => (
                <div className="container" key={students.studentId}>
                    <Link to={`/students/${students.studentId}`}>
                        <Student students={students} />
                    </Link>
                </div>
            ))}
        </>

    )
}

export default StudentsCard