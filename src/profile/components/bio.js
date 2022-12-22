import React from 'react'
import PropTypes from 'prop-types';
const Bio = ({Date,Adress,Mobile,Mail}) => {
const StyleObject = {textAlign:"justify" }
return(
    <div style={StyleObject}>
<span className="L">date and place of birth:<span className="d">{Date}</span></span><br/>
<span className="L">adress: <span className="d">{Adress}</span></span><br/>
<span className="L">mobile number: <span className="d">{Mobile}</span></span><br/>
<span className="L">Email: <span className="d">{Mail}</span></span><br/>
    </div>
)  
}
Bio.defaultProps={
    Mail:'hello2022@gmail.com',
    Mobile: '+216 000000',
  };
Bio.propTypes={
    Bio:PropTypes.string,
  };

export default Bio