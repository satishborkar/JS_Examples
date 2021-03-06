import React from "react";

const Header = props => {
  return (
    <div className="row">
      <header className="blog-header py-3" style={{ width: "100%" }}>
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <a className="text-muted" href="#">
              Welcome, Adman Scheduller
            </a>
          </div>
          <div className="col-4 text-center">
            <a className="blog-header-logo text-dark" href="#">
              {props.title}
            </a>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <a className="text-muted" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-3"
              >
                <circle cx="10.5" cy="10.5" r="7.5" />
                <line x1="21" y1="21" x2="15.8" y2="15.8" />
              </svg>
            </a>
            <a className="btn btn-sm btn-outline-secondary" href="#">
              Sign up
            </a>
          </div>
        </div>
      </header>
      <div className="jumbotron p-3 p-md-5 text-white rounded bg-dark">
        <div className="col-md-6 px-0">
          <h1 className="display-4 font-italic">
            Title of a longer featured blog post
          </h1>
          <p className="lead my-3">
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </p>
          <p className="lead mb-0">
            <a href="#" className="text-white font-weight-bold">
              Continue reading...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className="row mb-2">
  <div className="col-md-6">
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-primary">World</strong>
        <h3 className="mb-0">
          <a className="text-dark" href="#">
            Featured post
          </a>
        </h3>
        <div className="mb-1 text-muted">Nov 12</div>
        <p className="card-text mb-auto">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
        <a href="#">Continue reading</a>
      </div>
      <img
        className="card-img-right flex-auto d-none d-md-block"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16252af9af0%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16252af9af0%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        alt="Card image cap"
      />
    </div>
  </div>
  <div className="col-md-6">
    <div className="card flex-md-row mb-4 box-shadow h-md-250">
      <div className="card-body d-flex flex-column align-items-start">
        <strong className="d-inline-block mb-2 text-success">Design</strong>
        <h3 className="mb-0">
          <a className="text-dark" href="#">
            Post title
          </a>
        </h3>
        <div className="mb-1 text-muted">Nov 11</div>
        <p className="card-text mb-auto">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p>
        <a href="#">Continue reading</a>
      </div>
      <img
        className="card-img-right flex-auto d-none d-md-block"
        src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22200%22%20height%3D%22250%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20200%20250%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_16252af9af0%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A13pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_16252af9af0%22%3E%3Crect%20width%3D%22200%22%20height%3D%22250%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2256.203125%22%20y%3D%22131%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
        alt="Card image cap"
      />
    </div>
  </div>
</div>; */
}
