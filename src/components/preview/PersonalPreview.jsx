import { useEffect, useState } from "react";
import "./preview.scss"



const PersonalPreview = (props) => {

  useEffect(() => {
    Information()
  })

  const [data, setData] = useState('')


const Information = () => {
  setData(props.name)
  return (
    console.log()
  )
 

}



};

export default PersonalPreview;
