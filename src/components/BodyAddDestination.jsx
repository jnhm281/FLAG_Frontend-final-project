function BodyAddDestination() {
  return (
    <>
      <div className="body-add-destination-page">
        <section className="addDestination-container">
          <div className="section-title">
            <h2>Recent trips</h2>
          </div>
          <form id="form" action="" method="get" class="form-wrapper">
            <div class="form-newDestination">
              <label
                for="tripDestination"
                className="form-newDestination-label"
              >
                <i class="fa-solid fa-location-dot"></i>
                <h4 className="form-newDestination-label-text">
                  New destination
                </h4>
              </label>
              <input
                type="text"
                name="tripDestination"
                id="tripDestination"
                required
                placeholder="Where to?"
                className="form-newDestination-input"
              />
            </div>
            <div className="form-dates">
              <div class="form-dates-checkIn">
                <label for="checkIn" className="form-dates-checkIn-label">
                  <i class="fa-solid fa-plane-departure"></i>
                  <h4 className="form-dates-checkIn-label-text">Check in</h4>
                </label>
                <input
                  type="date"
                  name="checkIn"
                  id="checkIn"
                  required
                  className="form-dates-checkIn-input"
                />
              </div>
              <div class="form-dates-checkOut">
                <label for="checkOut" className="form-dates-checkOut-label">
                  <i class="fa-solid fa-plane-arrival"></i>
                  <h4 className="form-dates-checkOut-label-text">Check out</h4>
                </label>
                <input
                  type="date"
                  name="checkOut"
                  id="checkOut"
                  required
                  className="form-dates-checkOut-input"
                />
              </div>
            </div>
            <div class="form-description">
              <label for="description" className="form-description-label">
                <i class="fa-solid fa-pen"></i>
                <h4 className="form-description-label-text">Description</h4>
              </label>
              <textarea
                className="form-description-input"
                rows={6}
                form="form"
                name="description"
                id="description"
                required
                placeholder="Why should i visit?"
              />
            </div>
            <div class="form-upload">
              <label for="uploadPhotos" className="form-upload-label">
                <i class="fa-solid fa-file-import"></i>
                <h4 className="form-upload-label-text">Upload trip photos</h4>
              </label>
              <input
                type="file"
                name="uploadPhotos"
                id="uploadPhotos"
                multiple
                required
                className="form-upload-input"
              />
            </div>
            <div class="form-submit">
              <input
                type="submit"
                value="Submit"
                className="form-submit-input"
              />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default BodyAddDestination;
