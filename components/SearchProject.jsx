function SearchProject({searchProject, setSearchProject}) {
    return (
        <>
        <input type="text" placeholder="Search projects" className="search" value={searchProject} onChange={(event) => setSearchProject(event.target.value)} />
        </>
    )
}

export default SearchProject;