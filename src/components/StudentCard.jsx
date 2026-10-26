import { useState } from 'react'
import { Link } from 'react-router-dom'

// CHANGE: props badle (program/semester ki jagah major/year/gpa)
function StudentCard({ id, name, major, year, gpa }) {

  // NEW: Delete button ke liye
  const [deleted, setDeleted] = useState(false)

  // const [views, setViews] = useState(0)            // COMMENT kiya
  // const [showDetails, setShowDetails] = useState(false)   // COMMENT kiya
  // function handleView() { setViews(views + 1) }    // COMMENT kiya

  // NEW: delete hone par card gayab
  if (deleted) {
    return null
  }

  return (
    <div className="card shadow-sm h-100">

      {/* NEW: avatar */}
      <svg
        viewBox="0 0 100 100"
        className="card-img-top bg-secondary-subtle"
        style={{ height: '150px' }}
      >
        <circle cx="50" cy="38" r="18" fill="#6c757d" />
        <ellipse cx="50" cy="92" rx="32" ry="26" fill="#6c757d" />
      </svg>

      <div className="card-body">

        {/* CHANGE: h2 ki jagah h6 */}
        <h6 className="card-title">{name}</h6>

        {/* CHANGE: ye 4 lines miss ke program/semester/views ki jagah */}
        <p className="card-text small mb-1">ID: {id}</p>
        <p className="card-text small mb-1">Major: {major}</p>
        <p className="card-text small mb-1">Year: {year}</p>
        <p className="card-text small mb-3">GPA: {gpa}</p>

        {/* CHANGE: miss ke Link ka text aur class (btn-sm, me-1) */}
        <Link
          to={`/students/${id}`}
          className="btn btn-outline-primary btn-sm me-1"
        >
          View Profile
        </Link>

        {/* NEW */}
        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() => setDeleted(true)}
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default StudentCard