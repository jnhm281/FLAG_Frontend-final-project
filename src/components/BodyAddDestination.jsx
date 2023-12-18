function BodyAddDestination() {
  return (
    <>
      <div className="body-add-destination-page">
        <section className="addDestination">
          <div className="section-title">
            <h2>New trip</h2>
          </div>
          <form action="" method="get" class="form-container">
            <div class="form-newDestination">
              <label for="tripDestination">New destination: </label>
              <input
                type="text"
                name="tripDestination"
                id="tripDestination"
                required
                value="Where did you go?"
              />
            </div>
            <div class="form-checkIn">
              <label for="checkIn">Check in: </label>
              <input type="date" name="checkIn" id="checkIn" required />
            </div>
            <div class="form-checkOut">
              <label for="checkOut">Check out: </label>
              <input type="date" name="checkOut" id="checkOut" required />
            </div>
            <div class="form-checkOut">
              <label for="uploadPhotos">Upload trip photos: </label>
              <input
                type="file"
                name="uploadPhotos"
                id="uploadPhotos"
                multiple
                required
              />
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
