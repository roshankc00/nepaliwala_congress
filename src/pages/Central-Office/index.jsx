import "./index.css"
import { useContext } from "react";
import samitiContext from "../../context/Samiti/samiti";
import { Helmet } from "react-helmet";

const CentralOffice = () => {
  const { kendiryakaryalayaMember } = useContext(samitiContext);
  return (
    <>
    <Helmet title="Central_office"/>
    <div className="row container  m-auto d-flex justify-content-center align-items-center text-center gap-5" style={{placeContent:"center"}}>
      {kendiryakaryalayaMember.map((member,index) => {
          return(
              index==0?
              <div key={index} className="outline-none card col-10  m-3   ">
              <img src={member?.image} className="image_card  mx-auto d-flex justify-content-center align-items-center " alt="..." />
              <div className="">
                <h5 className="text-center fw-bold mt-1">{member.name}</h5>
                <p className="text-center mt-2">{member.position}</p>
              </div>
            </div>
            
            :         
            <div key={index} className="rounded-sm rounded card col-10 col-md-3 col-xl-2 m-3 rounded-sm  shadow-lg">
            <img src={member?.image} className="image_card  mx-auto d-flex justify-content-center align-items-center " alt="..." />
            <div className="">
              <h5 className="text-center fw-bold mt-1">{member.name}</h5>
              <p className="text-center mt-2">{member.position}</p>
            </div>
          </div>
            )
        })}
    </div>
        </>
  );
};

export default CentralOffice;
