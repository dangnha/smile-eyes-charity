import { useState } from "react"

function Language({selected, setSelected}){
    const [isActive, setIsActive] = useState(false)
    const options = [
        {
            image: "./image/vietnam.png",
            language: "Vietnamese"
        },
        {
            image: "./image/english.png",
            language: "English"
        },
        {
            image: "./image/japan.jpg",
            language: "Japanese"
        }
    ]
    return(
        <div id="language">
            <div className="language-defaut" onClick={(e) => setIsActive(!isActive)}>
                <img src={selected.image} alt=""></img>
                <p>{selected.language}</p>
                <i class="fa-solid fa-caret-down"></i>
            </div>

            {isActive && (
                <div className="language-content">
                    {options.map((option) => (
                        <div 
                            onClick = {(e) => {
                                setSelected(option)
                                setIsActive(false)
                            }}
                            className="language-item">
                            <img src={option.image} alt=""></img>
                            <p>{option.language}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Language