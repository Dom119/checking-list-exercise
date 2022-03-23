import React from "react";

export default function Check({position,isCheck, handleSingleCheck}) {
  return (
    <div>
      <input type="checkbox" checked={isCheck} onChange={()=>handleSingleCheck(position)}/>
    </div>
  );
}
