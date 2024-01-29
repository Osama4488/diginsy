import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Modal({ open, setOpen }) {
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
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div className="flex items-center justify-center min-h-screen">
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
            <div className="relative bg-white rounded-lg w-[900px] mx-auto flex">
              <div className="w-30">
                {/* Dummy image */}
                <img
                  src="https://www.applistix.com/lp-app-development//assets/images/popup-ban.jpg"
                  alt="Dummy Image"
                  className="w-full h-full"
                />
              </div>
              <div className="w-70 px-[25px] pt-[10px] popup-content">
                <h2>GET A FREE QUOTE</h2>
                <p>
                  Discuss your app idea with our consultants and we'll help you{" "}
                  <br />
                  transform them to multi-million dollar reality. It's Free!
                </p>
                {/* Form */}
                <form
                  className="flex flex-col justify-start h-full"
                  onSubmit={handleSubmit}
                >
                  <div className="flex justify-between items-start">
                    <div className="w-[49%]">
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
                        country={"pk"}
                        inputClass={`input-type-phone mb-4 ${
                          phone ? "" : "border-b-2 border-red-500"
                        }`}
                        value={phone}
                        onChange={(phone) => setPhone(phone)}
                      />
                    </div>

                    <textarea
                      className={`input-type mb-4 ml-2 ${
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
                  <p class="form_tagline mt-[0px] text-[12px]">
                    {" "}
                    <input type="checkbox" name="agree" /> &nbsp; To receive our
                    weekly Newsletter/SMS and offers check here. You can
                    unsubscribe at any time.
                  </p>

                  <div className="flex justify-center items-center relative -top-[16px]">
                    <button
                      type="submit"
                      className="btn-hero-1 uppercase w-[198px] text-[23px] flex justify-center items-center "
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
