import BreadcrumbBar from "../components/BreadcrumbBar";
import StudentCard from '../components/StudentCard'

function Students() {
  return (
    <div className="container mt-3">

      <BreadcrumbBar />

      <div className="d-flex justify-content-between align-items-center border-bottom pb-2 mb-4">
        <h5 className="mb-0">Page Header</h5>
        <button className="btn btn-primary btn-sm">Add New Student</button>
      </div>

      <div className="row g-3 mb-4">

        <div className="col-12 col-sm-6 col-lg-3">
          <StudentCard id="101" name="Mariam" major="Software Engineering" year="3" gpa="3.5" />
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <StudentCard id="102" name="Maheen" major="Software Engineering" year="3" gpa="3.5" />
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <StudentCard id="103" name="Haneta" major="Software Engineering" year="3" gpa="3.8" />
        </div>

        <div className="col-12 col-sm-6 col-lg-3">
          <StudentCard id="104" name="Ali" major="Computer Science" year="2" gpa="2.1" />
        </div>

      </div>

    </div>
  )
}

export default Students





















/*import StudentCard from '../components/StudentCard'

function Students() {

  return (

    <div className="container mt-4">

      <h2 className="mb-4">Students</h2>

      <div className="row g-4">

        <div className="col-md-4">
          <StudentCard
            id="1"
            name="Ali"
            program="BSSE"
            semester="5"
          />
        </div>

        <div className="col-md-4">
          <StudentCard
            id="2"
            name="Sara"
            program="BSCS"
            semester="6"
          />
        </div>

        <div className="col-md-4">
          <StudentCard
            id="3"
            name="Ahmed"
            program="BSDS"
            semester="4"
          />
        </div>

      </div>

    </div>

  )
}

export default Students*/