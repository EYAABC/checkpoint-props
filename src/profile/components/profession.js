import React from 'react'
import PropTypes from 'prop-types';

const Profession = ({Experrience})=>{
const StyleObject = {textAlign:"justify" }

  return(
    <div style={StyleObject}>
        <span className="L">My experience professional:<span className="d">{Experrience}</span></span><br/>

    </div>

)  
}
Profession.propTypes={
    Profession:PropTypes.string,
   
  };
export default Profession