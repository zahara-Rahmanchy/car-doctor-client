import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";

const ServiceCard = ({service}) => {
  const {_id, title, img, price} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions flex items-center">
          <p className="text-xl text-orange-500 font-bold">Price: ${price}</p>
          <Link to={`/booking/${_id}`}>
            <button className="btn btn-circle btn-outline border-0 text-orange-600 font-bold">
              <AiOutlineArrowRight className="text-2xl" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
