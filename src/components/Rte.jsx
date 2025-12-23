import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";



function Rte ({name, control, label, defaultValue=""}) {
    return(
        <div className="w-full">
            {
                label && <label className="inline-block mb-1 pl-1">{label}</label>

            }
            <Controller 
            name= {name || "content"}
            control={control}
            render ={
                ({
                    field:{onChange}
                })=>(
                    <Editor
                    initialValue={defaultValue}
                    init={{
                        initialValue: defaultValue,
                        height: 400,
                        menubar: true,
                        plugins:[
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblock code fullscreen",
                            "insertdatetime media table paste code help wordcount"
                        ],
                        toolbar:
                        "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify |"
                    }}
                    />
                )
            }
            
            />

        </div>
    )
}

export default Rte;