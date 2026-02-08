import { useState } from 'react'
import AddProject from './assets/components/AddProject'
import SearchBar from './assets/components/SearchBar'
import ProjectList from './assets/components/ProjectList'
import "./index.css"
//main app component
function App() {
  const [projects, setProjects] = useState([
    // declearing state to store list of projects
    {id: 1, title:"Project 1", description: "Description of the Project"},
    {id: 2, title:"Project 2", description: "Description of the Project"},
    {id: 3, title:"Project 3", description: "Description of the Project"},
  ]) 
   //storing searched  user information
  const [search, setSearch] = useState("")
   
  // Function to add a new project
  const addProject = (project) => {
    setProjects([...projects, {...project,id: Date.now()}])
  }
  
  // Filter projects based on the search text
  const filteredProjects = projects.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );
// JSX
  return (
  
      <div className="container">
        <h1 className="app-title">Personal project showcase App</h1>
        
        <AddProject addProject={addProject}/>
        <SearchBar setSearch={setSearch}/>
        <ProjectList projects={filteredProjects}/>
        
      </div>
  )
}

export default App
