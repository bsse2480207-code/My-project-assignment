function Home() {
  return (
    <>
      <div className="container mt-3">
        <nav>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Library</a></li>
            <li className="breadcrumb-item active">Data</li>
          </ol>
        </nav>
      </div>

      <div className="container text-center py-5">
        <h1>Welcome to SCD Lab</h1>
        <p>We are learning React Components.</p>
        <button className="btn btn-primary me-2">Get Started</button>
        <button className="btn btn-outline-secondary">Learn More</button>
      </div>

      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Card One</h5>
                <p className="card-text">Some short text for card one.</p>
                <button className="btn btn-success">Buy</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Card Two</h5>
                <p className="card-text">Some short text for card two.</p>
                <button className="btn btn-warning">Buy</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">Card Three</h5>
                <p className="card-text">Some short text for card three.</p>
                <button className="btn btn-danger">Buy</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Home