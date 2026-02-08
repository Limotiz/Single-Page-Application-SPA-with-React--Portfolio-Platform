import { useState } from "react";
    
function AddProject({ addProject }) {
    //project title and description input
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
   // adding a project
  const handleSubmit = () => {
    if (!title || !description) return;

    addProject({ title, description });
    setTitle("");
    setDescription("");
  };
   //JSX
  return (
    <div className="card">
      <h2>Add Project</h2>

      <label>Title</label>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label>Description</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Project</button>
    </div>
  );
}
export default AddProject