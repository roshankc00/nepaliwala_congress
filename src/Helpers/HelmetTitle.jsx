import {Helmet} from "react-helmet";
 
// eslint-disable-next-line react/prop-types
const HelmetTitle = ({title}) => {
  return (
    <div className="application">
    <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
</div>
  )
}

export default HelmetTitle
