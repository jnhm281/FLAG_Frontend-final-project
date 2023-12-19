function BodyAddDestination() {
  return (
    <>
      <div className="body-add-destination-page">
        <section className="addDestination">
          <div className="section-title">
            <h2>New trip</h2>
          </div>
          <form id="form" action="" method="get" class="form-container">
            <div class="form-newDestination">
              <label for="tripDestination" className="form-label">
                <i class="fa-solid fa-location-dot"></i>
                <span>New destination</span>
              </label>
              <input
                type="text"
                name="tripDestination"
                id="tripDestination"
                required
                placeholder="Where to?"
              />
            </div>
            <div className="form-dates">
              <div class="form-checkIn">
                <label for="checkIn" className="form-label">
                  <i class="fa-solid fa-plane-departure"></i>
                  <span>Check in</span>
                </label>
                <input type="date" name="checkIn" id="checkIn" required />
              </div>
              <div class="form-checkOut">
                <label for="checkOut" className="form-label">
                  <i class="fa-solid fa-plane-arrival"></i>
                  <span>Check out</span>
                </label>
                <input type="date" name="checkOut" id="checkOut" required />
              </div>
            </div>
            <div className="form-files">
              <div class="form-description">
                <label for="description" className="form-label">
                  <i class="fa-solid fa-pen"></i>
                  <span>Description</span>
                </label>
                <textarea
                  className="form-textarea"
                  rows={6}
                  form="form"
                  name="description"
                  id="description"
                  required
                  placeholder="Why should i visit?"
                />
              </div>
              <div class="form-upload">
                <label for="uploadPhotos" className="form-label">
                  <i class="fa-solid fa-file-import"></i>
                  <span>Upload trip photos</span>
                </label>
                <input
                  type="file"
                  name="uploadPhotos"
                  id="uploadPhotos"
                  multiple
                  required
                />
              </div>
            </div>
            <div class="form-submit">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </section>
      </div>
    </>
  );
}

export default BodyAddDestination;
