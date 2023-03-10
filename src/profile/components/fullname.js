import PropTypes from 'prop-types';
import React,{children} from "react";

const FullName = ({children ,FullName,alertMe}) => {
const StyleObject = {fontFamily:"Georgia, 'Times New Roman', Times, serif",textAlign:"center" }

return(
    <div style={StyleObject} className="container">
        <span> {children}</span>
<h1 className='title'> {FullName}</h1>
<div className='btn'>
<br/><button  onClick={alertMe}>click</button>
</div>

    </div>
    
)

}
FullName.propTypes={
    FullName:PropTypes.string,
  };
 
export default FullName