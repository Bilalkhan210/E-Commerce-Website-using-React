import { Link } from "react-router-dom";

const BannerBox = (props) => {
  return (
    <>
      <div
        className="box bannerBox overflow-hidden rounded-md sm:rounded-lg lg:rounded-xl 
                   group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg 
                   mx-auto"
      >
        <Link to="/">
          <img
            src={props.img}
            alt="banner"
            className="w-full h-40 sm:h-52 md:h-64 lg:h-80 
                       object-cover transition-all 
                       group-hover:scale-105 group-hover:rotate-1"
          />
        </Link>
      </div>
    </>
  );
};

export default BannerBox;
