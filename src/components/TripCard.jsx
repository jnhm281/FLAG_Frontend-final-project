import { Link } from "wouter";

function TripCard() {
  return (
    <>
      <div className="tripCard">
        <Link href="">
          <img
            src="\images\new-york\New-York-Times-Square.jpg"
            alt="New York - Times Square"
            className="card-img"
          />
          <h3>Destino</h3>
          <h4>Data</h4>
        </Link>
      </div>
    </>
  );
}

export default TripCard;
