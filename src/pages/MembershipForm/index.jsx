import { Helmet } from "react-helmet"
import MembershipForm from "../../components/Form/MembershipForm"

const Membership= () => {
  return (
    <div>
      <Helmet title="membership"/>
        <MembershipForm/>
    </div>
  )
}

export default Membership