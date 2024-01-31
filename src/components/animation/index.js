import { FaArrowRightLong } from "react-icons/fa6";

const YourComponent = ({ imgSrc, idx, openImage, text }) => {
  return (
    <div className="relative md:w-[386px] w-full group md:h-[468px] h-[214px] overflow-hidden">
      <img
        // className="w-full h-full object-cover cursor-pointer"
        className="w-[345px] group md:h-[468px] h-[214px] object-cover cursor-pointer"
        src={imgSrc}
        alt={`Left Image ${idx}`}
        onClick={() => openImage(imgSrc)}
      />
      <div className="md:block hidden">
        {text && (
          <div
            onClick={() => openImage(imgSrc)}
            className="cursor-pointer p-[20px] flex flex-col absolute top-[120px] left-0 w-[346px] h-auto bg-[#2253ed] transform translate-x-[-100%] transition-transform duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-[#fff]"
          >
            <div className="flex justify-between items-center">
              <div
                style={{ fontWeight: "800", lineHeight: "1.1" }}
                className="text-[46px] mb-[33px] text-left"
              >
                {text}
              </div>
              <div className="banner-tag">iphone</div>
            </div>

            <div className="full-version-style text-left flex items-center">
              <FaArrowRightLong className="mr-2" /> Full Version
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourComponent;
