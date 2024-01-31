import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { IoMdClose } from "react-icons/io";

export default function Modal({ open, setOpen, title }) {
  const cancelButtonRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [projectDescription, setProjectDescription] = useState("");
  const [errorToast, setErrorToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !projectDescription.trim()) {
      // Handle form submission when fields are empty
      setErrorToast(true);
      console.log("Please fill in all fields");
      // You can also add additional logic here such as displaying an error message
    } else {
      // Handle form submission when fields are not empty
      console.log("Form submitted successfully");
    }
  };

  useEffect(() => {
    // Close error toast after 3 seconds
    const timeout = setTimeout(() => {
      setErrorToast(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [errorToast]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto -2"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen md:px-0 pl-[1px] pr-[5px]">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="relative bg-white rounded-lg md:w-[900px] w-full mx-auto flex ">
              {/* <button
                data-fancybox-close=""
                class=" bg-[blue] w-[38px] h-[42px] "
                title="Close"
              > */}
              {/* <IoMdClose
                className="fancybox-close-small"
                size={20}
                color="#fff"
              /> */}
              {/* </button> */}
              <button
                className="absolute top-0 right-0 p-2"
                onClick={() => setOpen(false)} // Close modal on button click
              >
                <IoMdClose className="text-gray-600" size={24} />
              </button>
              <div className="md:w-[50%] md:block hidden w-full">
                {/* Dummy image */}
                <img
                  src="https://www.applistix.com/lp-app-development//assets/images/popup-ban.jpg"
                  alt="Dummy Image"
                  className=" h-full"
                />
              </div>
              <div className="md:w-70 w-full md:px-[25px] px-[12px] pt-[10px] md:mb-0 pb-[30px] popup-content">
                <h2>CALCULATE PRICING</h2>
                <p>
                  Discuss your app idea with our consultants and we'll help you{" "}
                  <br className="md:block hidden" />
                  transform them to multi-million dollar reality. It's Free!
                </p>
                {/* Form */}
                <form
                  className="flex flex-col justify-start h-full"
                  onSubmit={handleSubmit}
                >
                  <div className="flex md:flex-row flex-col justify-between items-start">
                    <div className="md:w-[49%] w-full">
                      <input
                        type="text"
                        className={`input-type mb-4  ${
                          errorToast && "border-b"
                        } ${name.trim() ? "" : "border-b-2 border-red-500"}`}
                        // required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        name="cn"
                        placeholder="Your Name"
                        aria-required="true"
                      />

                      <input
                        type="email"
                        className={`input-type mb-4 ${
                          email.trim() ? "" : "border-b-2 border-red-500"
                        }`}
                        // required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="em"
                        placeholder="Your Email"
                        aria-required="true"
                      />

                      <PhoneInput
                        country={"us"}
                        inputClass={`input-type-phone mb-4 ${
                          phone ? "" : "border-b-2 border-red-500"
                        }`}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />
                    </div>

                    <textarea
                      className={`input-type mb-4 md:ml-2 ml-0 md:h-[186px] h-[86px] ${
                        projectDescription.trim()
                          ? ""
                          : "border-b-2 border-red-500"
                      }`}
                      rows="8"
                      value={projectDescription}
                      onChange={(e) => setProjectDescription(e.target.value)}
                      placeholder="Enter a brief description of your App Project"
                    />
                  </div>
                  <p class="form_tagline text-[12px] md:mt-0 mt-[25px]">
                    {" "}
                    <input type="checkbox" name="agree" /> &nbsp; To receive our
                    weekly Newsletter/SMS and offers check here. You can
                    unsubscribe at any time.
                  </p>

                  <div className="flex justify-center items-center relative -top-[16px]">
                    <button
                      type="submit"
                      className="btn-hero-1 uppercase md:w-[198px] w-full text-[23px] flex justify-center items-center "
                      name="0"
                      data-fancybox=""
                      data-src="#popupform"
                      title="GET A FREE QUOTE"
                      style={{
                        fontSize: "23px",
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "0px",
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              {errorToast && (
                <div className="absolute top-0 right-0 m-4">
                  <div className="toast toast-top toast-end">
                    <div className="alert alert-error">
                      <span>Please fill in all fields.</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
