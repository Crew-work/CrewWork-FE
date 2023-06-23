import { Link } from "react-router-dom";
import ButtonPrimary from "../components/buttons/button";
import { ReactComponent as SearchIcon } from "../assets/images/search.svg";
import { ReactComponent as DotIcon } from "../assets/images/dot.svg";
import { useState } from "react";
import CrewCard from "../components/cards/crewCard";

function MainPage() {
  const [values, setValues] = useState({ keyword: "" });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex">
          <p className="text-xl">다양한 크루들을 만나보세요!</p>
          <Link to={"/crew-new"} className="ml-auto">
            <ButtonPrimary text={"크루 생성"} />
          </Link>
        </div>

        <form onSubmit={handelSubmit} className="mt-14">
          <div className="flex bg-gray-superlight px-5 py-2 rounded-full w-96 h-12 mx-auto">
            <input
              type="text"
              name="keyword"
              value={values.keyword}
              onChange={handleChange}
              placeholder="크루를 검색하세요!"
              className="outline-none bg-transparent grow"
            />
            <button className="ml-3">
              <SearchIcon
                className="fill-gray-charcol"
                width="24"
                height="24"
              />
            </button>
          </div>

          <div className="mt-6 flex items-center justify-end">
            <button className="flex items-center group">
              <DotIcon
                width="14"
                height="14"
                className="fill-gray group-hover:fill-gray-dark"
              />
              <span className="ml-1 text-sm text-gray group-hover:text-gray-dark">
                최신순
              </span>
            </button>
            <button className="flex items-center ml-4 group">
              <DotIcon
                width="14"
                height="14"
                className="fill-gray group-hover:fill-gray-dark"
              />
              <span className="ml-1 text-sm text-gray group-hover:text-gray-dark">
                오래된순
              </span>
            </button>
          </div>
        </form>

        <div className="mt-3 grid grid-cols-4 gap-1">
          {Array.from({ length: 30 }, (v, i) => i + 1).map((v, i) => (
            <CrewCard
              crewId={v}
              name={`크루 ${v}`}
              introduce={`크루${v} 입니다.`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainPage;
