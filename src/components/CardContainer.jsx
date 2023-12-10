import TripCard from "./TripCard";

function CardWrap() {
  return (
    <>
      <div className="card-container">
        <TripCard />
        <TripCard />
        <TripCard />
        <TripCard />
      </div>
    </>
  );
}

export default CardWrap;
