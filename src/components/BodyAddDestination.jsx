import { useEffect, useRef, useState } from "react";
import getCountries from "../services/getCountries";

function BodyAddDestination() {
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    checkIn: "",
    checkOut: "",
    description: "",
    upload: "",
  });

  const [getCountry, setGetCountry] = useState([]);
  const [getCity, setGetCity] = useState([]);
  const [fieldRequired, setFieldRequired] = useState(false);
  const [disabledCountryCityOption, setDisabledCountryCityOption] =
    useState(true);
  const [disabledCityOption, setDisabledCityOption] = useState(true);

  // GET THE SOONEST DATE TO TRAVEL WHICH DECIDED BY ME IS TOMORROW //
  const getSoonestDate = new Date(new Date().setDate(new Date().getDate() + 1))
    .toISOString()
    .split("T")[0];

  // GET COUNTRY LIST //
  useEffect(function () {
    (async function () {
      const result = await getCountries.getCountries();

      setGetCountry(result);
    })();
  }, []);

  // GET CITIES LIST OF THE COUNTRY SELECTED //
  const handleChangeCountry = async (event) => {
    const selectedCountry = event.target.value;

    const result = await getCountries.getCountries();
    const foundElement = result.find((obj) => {
      return obj.country == selectedCountry;
    });

    setGetCity(foundElement.cities);
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    if (formData.country || formData.city) {
      setDisabledCountryCityOption(false);
    }
    setFieldRequired(false);
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // CONDITION TO USER ALWAYS ENTER A COUNTRY AND A CITY //
    if (formData.country === "" || formData.city === "") {
      setFieldRequired(true);
      return;
    }

    // CONDITION TO CHECKIN DATE BE THE SOONEST WHEN IN BLANK //
    if (!formData.checkIn) {
      formData.checkIn = getSoonestDate;
    }
    // CONDITION TO CHECKOUT DATE BE THE SAME AS CHECKIN DATE WHEN IN BLANK //
    if (!formData.checkOut) {
      formData.checkOut = formData.checkIn;
    }

    // CONDITION WHEN DESCRIPTION IN BLANK //
    if (!formData.description) {
      formData.description = "no description";
    }

    console.log("New Trip Accepted: ", formData);

    // CONDITION TO CLEAN OUTPUT //
    setDisabledCountryCityOption(true);
    setFieldRequired(false);
    setFormData({
      country: "",
      city: "",
      checkIn: "",
      checkOut: "",
      description: "",
      upload: "",
    });
  };

  return (
    <>
      <div className="body-add-destination-page">
        <section className="addDestination-container">
          <div className="section-title">
            <h2>Add new trip</h2>
          </div>
          <form
            id="form"
            action=""
            method="get"
            class="form-wrapper"
            onSubmit={handleSubmit}
          >
            <div class="form-newDestination">
              <label
                for="tripDestination"
                className="form-newDestination-label"
              >
                <i class="fa-solid fa-location-dot"></i>
                <h4 className="form-newDestination-label-text">
                  New destination
                </h4>
                <span className="obligatory">*</span>
              </label>
              <select
                id="tripDestination"
                required
                className="form-newDestination-country-input"
                type="text"
                name="country"
                onChange={(event) => {
                  handleChange(event);
                  handleChangeCountry(event);
                }}
              >
                {disabledCountryCityOption && (
                  <option selected disabled>
                    Country
                  </option>
                )}
                {getCountry.map((item, index) => (
                  <option key={index}>{item.country}</option>
                ))}
              </select>
              <select
                id="tripDestination"
                required
                className="form-newDestination-city-input"
                type="text"
                name="city"
                onChange={(event) => handleChange(event)}
              >
                {disabledCountryCityOption && (
                  <option selected disabled>
                    City
                  </option>
                )}
                {getCity.map((item, index) => (
                  <option key={index}>{item}</option>
                ))}
              </select>
            </div>
            <div className="form-dates">
              <div class="form-dates-checkIn">
                <label for="checkIn" className="form-dates-checkIn-label">
                  <i class="fa-solid fa-plane-departure"></i>
                  <h4 className="form-dates-checkIn-label-text">Check in</h4>
                  <span className="obligatory">*</span>
                </label>
                <input
                  type="date"
                  name="checkIn"
                  id="checkIn"
                  required
                  className="form-dates-checkIn-input"
                  value={formData.checkIn}
                  min={getSoonestDate}
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div class="form-dates-checkOut">
                <label for="checkOut" className="form-dates-checkOut-label">
                  <i class="fa-solid fa-plane-arrival"></i>
                  <h4 className="form-dates-checkOut-label-text">Check out</h4>
                  <span className="obligatory">*</span>
                </label>
                <input
                  type="date"
                  name="checkOut"
                  id="checkOut"
                  required
                  className="form-dates-checkOut-input"
                  value={formData.checkOut}
                  min={formData.dateFrom}
                  onChange={(event) => handleChange(event)}
                />
              </div>
            </div>
            <div class="form-description">
              <label for="description" className="form-description-label">
                <i class="fa-solid fa-pen"></i>
                <h4 className="form-description-label-text">Description</h4>
                <span className="obligatory">*</span>
              </label>
              <textarea
                className="form-description-input"
                rows={6}
                form="form"
                name="description"
                id="description"
                required
                placeholder="Why should i visit?"
                value={formData.description}
                onChange={(event) => handleChange(event)}
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
