import './index.css'
import { useContext } from "react";
import samitiContext from "../../context/Samiti/samiti";
import { Helmet } from "react-helmet";

const CentralWorkingCommittee = () => {
  const { samktimembers:members } = useContext(samitiContext);
  return (
    <div className=" row  p-5">  
    <Helmet title="Central-working-committee"/>
      {members.map((member, index) => {
        return (
          <div key={index} className="rounded-sm rounded card col-10 col-md-3 col-xl-2 m-3 rounded-sm  shadow-lg">
            <img src={ member.image?member.image+".jpg":"public/images/samitimember/kendriyasadasya-64.jpg"} className="image_card  mx-auto d-flex justify-content-center align-items-center " alt="..." />
            <div className="">
              <h5 className="text-center fw-bold mt-1">{member.name}</h5>
              <p className="text-center mt-2">{member.position}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CentralWorkingCommittee;
