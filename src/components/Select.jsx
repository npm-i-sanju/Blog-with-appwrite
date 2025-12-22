import React from "react";
import { useId } from "react";


function Select({
    label,
    options,
    classNmae="",
    ...props
}, ref) {
    const id  = useId();
    return (
<div className="w-full">{
    label && <label htmlFor={id}
className=""></label>}
<select
{...props}
id={id}
ref={ref}
className={`px-3 py-2 rounded-lg bg-white
text-black outline-none focus:bg-gray-50
duration-300 border-gray-200 w-full ${classNmae}`}>
{options?.map((option) => (
    <option key={option} value={option}></option>
))}
</select>
    </div>
    )
}

export default React.forwardRef(Select);