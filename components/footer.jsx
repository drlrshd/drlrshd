export default function Footer() {
  return (
    <footer className="align-self-end bg-secondary border-top border-4 border-primary text-light text-center py-2 w-100">
      <div className="d-flex justify-content-center mb-1">
        <h5 className="mb-1 align-self-center me-2">
          Let&apos;s get in touch!
        </h5>
        <ul className="list-unstyled mb-0 ms-2">
          <li className="mb-0">
            <i className="bi bi-send" />
            <a href="mailto:hello@drlrshd.dev" target="_blank" rel="noreferrer">
              hello@drlrshd.dev
            </a>
          </li>
          <li className="mb-0">
            <i className="bi bi-github" />
            <a
              href="https://www.github.com/drlrshd"
              target="_blank"
              rel="noreferrer">
              Github
            </a>
          </li>
          <li className="mb-0">
            <i className="bi bi-linkedin" />{' '}
            <a
              href="https://www.linkedin.com/in/m-daryl-rashad"
              target="_blank"
              rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <small>&copy; Copyright 2022, Muhammad Daryl Rashad</small>
    </footer>
  );
}
