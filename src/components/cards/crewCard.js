import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function CrewCard({ crewId, name, introduce, className }) {
  return (
    <Link
      to={`/crews/${crewId}/info`}
      className={`bg-white hover:drop-shadow ${className}`}
    >
      <div className="p-3">
        <img
          src={logo}
          alt="crew profile"
          className="bg-gray-superlight w-full p-10"
        />
        <div className="mt-3">
          <p className="font-medium">{name}</p>
          <p className="mt-3 text-sm text-gray-charcol">{introduce}</p>
        </div>
      </div>
    </Link>
  );
}

CrewCard.defaultProps = {
  crewId: null,
  name: "크루명",
  introduce: "크루 소개",
};

export default CrewCard;
