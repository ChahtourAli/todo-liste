import React  from "react"
import Button from "./Button" 
const Item =({text})=>
{
return(
<div>
<Button title="complete" /> 
<Button title="Delete" />
<p>{text}</p>

</div>

)


}
export default  Item ; 