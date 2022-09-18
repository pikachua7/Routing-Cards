const Student = ({ students: { studentId, studentName, studentAddress } }) => {
    return (
        <div className="movie" key={studentId}>
            <div>
                <img src={"https://via.placeholder.com/400"} />
            </div>

            <div>
                <span>{studentName}</span>
                <h3>{studentAddress}</h3>
            </div>
        </div>
    );
}

export default Student;