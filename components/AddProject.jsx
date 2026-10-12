import { useState } from "react";
function AddProject({ setProjects }) {
    const [name, setName] = useState("")
    const [about, setAbout] = useState("")
    const [image, setImage] = useState("")
    return (
        <>
            <form
                className="add-form" 
                action="" 
                onSubmit={(event) => {
                    event.preventDefault()
                    setProjects((projects) => [
                        ...projects,
                        {
                            id: Date.now(),
                            name: name,
                            about: about,
                            image: image
                        }
                    ])
                    setName("")
                    setAbout("")
                    setImage("")
                }}
            >
                <h3>Add Project</h3>
                <label>Title</label>
                <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
                <label>Description</label>
                <textarea value={about} onChange={(event) => setAbout(event.target.value)} />
                <label>Image</label>
                <input type="text" value={image} onChange={(event) => setImage(event.target.value)} />
                <button type="submit">Add</button>
            </form>
        </>
    )
}
export default AddProject;