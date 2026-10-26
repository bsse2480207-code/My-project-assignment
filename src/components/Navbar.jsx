import { Link } from 'react-router-dom'

function Navbar() {

  return (

    // CHANGE: bg-dark navbar-dark hata kar bg-white border-bottom
    <nav className="navbar navbar-expand-lg bg-white border-bottom">

      <div className="container">

        {/* CHANGE: brand ka naam */}
        <Link className="navbar-brand" to="/">
          StudentPortal
        </Link>

        {/* CHANGE: me-auto add kiya (links left, baaqi right) */}
        <div className="navbar-nav me-auto">

          {/* CHANGE: Home ki jagah Dashboard */}
          <Link className="nav-link" to="/">
            Dashboard
          </Link>

          <Link className="nav-link" to="/students">
            Students
          </Link>

          <Link className="nav-link" to="/courses">
            Courses
          </Link>

          {/* NEW */}
          <a className="nav-link" href="#">
            Reports
          </a>

        </div>

        {/* NEW: Settings dropdown */}
        <div className="navbar-nav">
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              data-bs-toggle="dropdown"
            >
              Settings
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Profile</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>

        {/* NEW: Search box */}
        <form className="d-flex ms-3" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control form-control-sm me-2"
            type="search"
            placeholder="Search"
          />
          <button className="btn btn-primary btn-sm" type="submit">
            Search
          </button>
        </form>

      </div>

    </nav>

  )
}

export default Navbar