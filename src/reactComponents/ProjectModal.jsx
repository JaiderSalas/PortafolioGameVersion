import { useAtom, useAtomValue } from "jotai"
import { chosenProjectDataAtom, isProjectModalVisibleAtom  } from "../store"
import { useState } from "react";

export default function ProjectModal() {
    const [isVisible, setIsVisible] = useAtom(isProjectModalVisibleAtom);
    const projectData = useAtomValue(chosenProjectDataAtom);
    
    return (isVisible && (
    <div className="modal">
        <div className="modal-content"> 
            <h1> {projectData.title} </h1>
            <div className="modal-btn-container">
                <button 
                    className="modal-btn" 
                    onClick={() => {
                        window.open(projectData.link, "_blank");
                    }}
                    >   
                    Source Code
                    </button>
                <button
                className={"modal-btn"}
                onClick={() => {
                    setIsVisible(false)
                }}
                >Close</button>
            </div>
        </div>
    </div>))
};