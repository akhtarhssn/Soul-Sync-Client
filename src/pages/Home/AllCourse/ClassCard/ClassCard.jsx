const ClassCard = ({ course }) => {
  const { image, name } = course;
  return (
    <div className="card border border-gray-700 dark:border-gray-200 shadow-xl  text-white dark:text-black group">
      <figure>
        <img
          src={image}
          alt="Shoes"
          className="group-hover:scale-125 duration-700"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
