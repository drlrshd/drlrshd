export default function CardGrid() {
  return (
    <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 h-100 g-3 mt-0">
      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title mb-0 pb-0 ">drlrshd.dev</h4>
            <em class="card-subtitle  text-muted">August 2022 - ongoing</em>
            <p class="card-text text-em">
              This website! 😁
              <a
                href="https://github.com/drlrshd/drlrshd.dev"
                target="_blank"
                rel="noreferrer"
                class="stretched-link text-muted">
                (Click on this card to view on Github)
              </a>
            </p>
          </div>
          <div class="card-footer">
            <span class="badge">HTML</span>
            <span class="badge">CSS</span>
            <span class="badge">Javascript</span>
            <span class="badge">Bootstrap</span>
            <span class="badge">Node.Js</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title mb-0 pb-0 ">Homelab/-server</h4>
            <em class="card-subtitle  text-muted">August 2022 - ongoing</em>
            <p class="card-text text-em">
              Linux server used mainly for file storage, experimenting and doing
              projects.
            </p>
          </div>
          <div class="card-footer">
            <span class="badge">Linux</span>
            <span class="badge">Debian</span>
            <span class="badge">Apache2</span>
            <span class="badge">Networking</span>
            <span class="badge">VM</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title mb-0 pb-0 ">VierGewinnt</h4>
            <em class="card-subtitle  text-muted">Summer 2022</em>
            <p class="card-text text-em">
              Local multiplayer game of Connect-Four built with Java.
            </p>
          </div>
          <div class="card-footer">
            <span class="badge">Java</span>
            <span class="badge">Object-Oriented Programming</span>
            <span class="badge">IntelliJ</span>
            <span class="badge">MVC</span>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="card h-100">
          <div class="card-body">
            <h4 class="card-title mb-0 pb-0 ">Bluetooth-controlled Mini-car</h4>
            <em class="card-subtitle  text-muted">Winter 2021</em>
            <p class="card-text text-em">
              AVR-based mini-car controlled remotely via bluetooth.
            </p>
          </div>
          <div class="card-footer">
            <span class="badge">AVR</span>
            <span class="badge">Microcomputer</span>
            <span class="badge">C/C++</span>
            <span class="badge">Atmel Studio</span>
          </div>
        </div>
      </div>
    </div>
  );
}
