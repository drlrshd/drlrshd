export default function CardGrid() {
  return (
    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 h-100 g-3 mt-0">
      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title mb-0 pb-0 ">drlrshd.dev</h4>
            <em className="card-subtitle  text-muted">August 2022 - ongoing</em>
            <p className="card-text text-em">
              This website! 😁
              <a
                href="https://github.com/drlrshd/drlrshd.dev"
                target="_blank"
                rel="noreferrer"
                className="stretched-link text-muted">
                (Click on this card to view on Github)
              </a>
            </p>
          </div>
          <div className="card-footer">
            <span className="badge">HTML</span>
            <span className="badge">CSS</span>
            <span className="badge">Javascript</span>
            <span className="badge">Bootstrap</span>
            <span className="badge">Node.Js</span>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title mb-0 pb-0 ">Homelab/-server</h4>
            <em className="card-subtitle  text-muted">August 2022 - ongoing</em>
            <p className="card-text text-em">
              Linux server used mainly for file storage, experimenting and doing
              projects.
            </p>
          </div>
          <div className="card-footer">
            <span className="badge">Linux</span>
            <span className="badge">Debian</span>
            <span className="badge">Apache2</span>
            <span className="badge">Networking</span>
            <span className="badge">VM</span>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title mb-0 pb-0 ">VierGewinnt</h4>
            <em className="card-subtitle  text-muted">Summer 2022</em>
            <p className="card-text text-em">
              Local multiplayer game of Connect-Four built with Java.
            </p>
          </div>
          <div className="card-footer">
            <span className="badge">Java</span>
            <span className="badge">Object-Oriented Programming</span>
            <span className="badge">IntelliJ</span>
            <span className="badge">MVC</span>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card h-100">
          <div className="card-body">
            <h4 className="card-title mb-0 pb-0 ">
              Bluetooth-controlled Mini-car
            </h4>
            <em className="card-subtitle  text-muted">Winter 2021</em>
            <p className="card-text text-em">
              AVR-based mini-car controlled remotely via bluetooth.
            </p>
          </div>
          <div className="card-footer">
            <span className="badge">AVR</span>
            <span className="badge">Microcomputer</span>
            <span className="badge">C/C++</span>
            <span className="badge">Atmel Studio</span>
          </div>
        </div>
      </div>
    </div>
  );
}
