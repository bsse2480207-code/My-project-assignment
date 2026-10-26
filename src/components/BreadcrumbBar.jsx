import { Link } from 'react-router-dom'

function BreadcrumbBar() {
  return (
    <nav aria-label="breadcrumb">
      <ol
        className="breadcrumb bg-dark rounded px-3 py-2 mb-3"
        style={{ '--bs-breadcrumb-divider-color': '#fff' }}
      >
        <li className="breadcrumb-item">
          <Link className="text-white" to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link className="text-white" to="/students">Students</Link>
        </li>
        <li className="breadcrumb-item active text-white fw-bold" aria-current="page">
          Directory
        </li>
      </ol>
    </nav>
  )
}

export default BreadcrumbBar