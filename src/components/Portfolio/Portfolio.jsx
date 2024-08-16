import "./Portfolio.modules.css";
import poert1 from "../../assets/poert1.png";
import poert2 from "../../assets/port2.png";
import poert3 from "../../assets/port3.png";
export default function Portfolio() {
  return (
    <>
      <div className="container h-auto">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl text-slate-700 uppercase font-bold my-3">
            Portfolio Component
          </h1>
          <div className="flex justify-center items-center my-3">
            {" "}
            <span className="line bg-slate-700"></span>
            <i className="fas fa-star mx-3 text-slate-700"></i>
            <span className="line bg-slate-700"></span>
          </div>
        </div>
        <div className="flex justify-between flex-wrap items-center gap-4 w-full p-10">
          <div className="item w-1/4 rounded-lg mx-auto my-5">
            <div className="layer rounded-xl text-white text-8xl font-bold flex justify-center items-center">
              <i className="fa fa-plus"></i>
            </div>
            <img className="w-full rounded-xl" src={poert1} alt="" />
          </div>
          <div className="item w-1/4 rounded-lg mx-auto my-5">
            <div className="layer rounded-xl text-white text-8xl font-bold flex justify-center items-center">
              <i className="fa fa-plus"></i>
            </div>
            <img className="w-full rounded-xl" src={poert2} alt="" />
          </div>
          <div className="item w-1/4 rounded-lg mx-auto my-5">
            <div className="layer rounded-xl text-white text-8xl font-bold flex justify-center items-center">
              <i className="fa fa-plus"></i>
            </div>
            <img className="w-full rounded-xl" src={poert3} alt="" />
          </div>
          <div className="item w-1/4 rounded-lg mx-auto my-5">
            <div className="layer rounded-xl text-white text-8xl font-bold flex justify-center items-center">
              <i className="fa fa-plus"></i>
            </div>
            <img className="w-full rounded-xl" src={poert2} alt="" />
          </div>
          <div className="item w-1/4 rounded-lg mx-auto my-5">
            <div className="layer rounded-xl text-white text-8xl font-bold flex justify-center items-center">
              <i className="fa fa-plus"></i>
            </div>
            <img className="w-full rounded-xl" src={poert1} alt="" />
          </div>
          <div className="item w-1/4 rounded-lg mx-auto my-5">
            <div className="layer rounded-xl text-white text-8xl font-bold flex justify-center items-center">
              <i className="fa fa-plus"></i>
            </div>
            <img className="w-full rounded-xl" src={poert3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
