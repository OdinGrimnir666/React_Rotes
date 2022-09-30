const Header = (props) =>{
    return  <header>
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          React Router
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {props.children}
          </ul>
        </div>
      </div>
    </nav>
  </header>
}

export {Header};