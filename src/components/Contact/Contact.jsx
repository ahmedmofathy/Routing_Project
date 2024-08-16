import "./Contact.modules.css";
export default function Contact() {
  return (
    <>
      <div className="container h-screen">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-slate-700 uppercase font-bold my-3">
            contact section
          </h1>
          <div className="flex justify-center items-center my-3">
            {" "}
            <span className="line bg-slate-700"></span>
            <i className="fas fa-star mx-3 text-slate-700"></i>
            <span className="line bg-slate-700"></span>
          </div>
        </div>
        <div>
          <form className="max-w-2xl mx-auto my-5">
            <div className="relative z-0 w-full mb-5 group my-5">
              <input
                type="text"
                name="userName"
                id="userName"
                className="block py-5 px-0 w-full text-sm text-slate-700 bg-transparent border-0 border-b-2 border-slate-200 rounded-md appearance-none focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="userName"
                className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Name{" "}
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group my-5">
              <input
                type="text"
                name="userAge"
                id="userAge"
                className="block py-5 px-0 w-full text-sm text-slate-700 bg-transparent border-0 border-b-2 border-slate-200 rounded-md appearance-none focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="userAge"
                className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Age{" "}
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group my-5">
              <input
                type="email"
                name="userMail"
                id="userMail"
                className="block py-5 px-0 w-full text-sm text-slate-700 bg-transparent border-0 border-b-2 border-slate-200 rounded-md appearance-none focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="userMail"
                className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-slate-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Email
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group my-5">
              <input
                type="password"
                name="userPassword"
                id="userPassword"
                className="block py-5 px-0 w-full text-sm text-slate-700 bg-transparent border-0 border-b-2 border-slate-200 rounded-md appearance-none focus:outline-none peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="userPassword"
                className="peer-focus:font-medium absolute text-sm text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-slate-400  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                User Password
              </label>
            </div>

            <button
              type="submit"
              className="btn my-5 text-white  hover:opacity-90 focus:outline-none  font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-3 text-center"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
