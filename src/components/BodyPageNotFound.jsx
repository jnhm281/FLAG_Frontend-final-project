function BodyPageNotFound() {
  return (
    <>
      <div className="body-notFound-page">
        <section className="notFound-container">
          <h1 className="section-title notFound-title">404 Page Not Found</h1>
          <h2 className="section-subTitle notFound-subtitle">
            It looks like you took a wrong turn somewhere...
          </h2>
          <span className="notFound-img-wrapper">
            <img
              src="/images/Jupiter.png"
              alt="Planet image"
              className="notFound-img"
            />
          </span>
        </section>
      </div>
    </>
  );
}

export default BodyPageNotFound;
