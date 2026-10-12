import { useState } from 'react'
import Header from '../components/Header'
import ProjectList from '../components/ProjectList'
import SearchProject from '../components/SearchProject'
import AddProject from '../components/AddProject'
import './App.css'

function App() {
  const [searchProject, setSearchProject] = useState("");
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Brand Refresh",
      about: "A new look for a local coffee shop.",
      image: "https://picsum.photos/id/1015/400/250"
    },
    {
      id: 2,
      name: "Photo Portfolio",
      about: "A one-page site for a photographer.",
      image: "https://picsum.photos/id/1025/400/250"
    },
    {
      id: 3,
      name: "City Transit App",
      about: "A simple app for checking bus times.",
      image: "https://picsum.photos/id/1033/400/250"
    },
    {
      id: 4,
      name: "Recipe Box",
      about: "A place to save and share family recipes.",
      image: "https://picsum.photos/id/1080/400/250"
    },
    {
      id: 5,
      name: "Music Festival",
      about: "A landing page for a weekend music event.",
      image: "https://picsum.photos/id/164/400/250"
    }
  ])
  const filteredProjects = projects.filter((project) => project.name.toLowerCase().includes(searchProject.toLowerCase()))
  return (
    <>
      <Header />
      <AddProject setProjects={setProjects}/>
      <section className="portfolio">
        <SearchProject searchProject={searchProject} setSearchProject={setSearchProject}/>
        <ProjectList projects={filteredProjects} />
      </section>
    </>
  )
}

export default App
