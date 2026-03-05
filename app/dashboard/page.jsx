"use client";
import { useState } from "react";
import { portfolioData as initialData } from "../data/portfolioData";

const Dashboard = () => {
  const [data, setData] = useState(initialData);
  const [activeTab, setActiveTab] = useState("personal");
  const [newProject, setNewProject] = useState({ title: "", description: "", tag: ["All", "Web"], gitUrl: "", previewUrl: "" });

  const updateData = (section, field, value) => {
    setData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const updatePersonal = (field, value) => {
    setData(prev => ({
      ...prev,
      personal: { ...prev.personal, [field]: value }
    }));
  };

  const addProject = () => {
    const project = {
      id: data.projects.length + 1,
      ...newProject,
      image: "/images/projects/1.png"
    };
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, project]
    }));
    setNewProject({ title: "", description: "", tag: ["All", "Web"], gitUrl: "", previewUrl: "" });
  };

  const deleteProject = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
  };

  const downloadCV = () => {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio-data.json";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Portfolio Dashboard</h1>
          <button
            onClick={downloadCV}
            className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded-lg font-semibold"
          >
            Download CV / Export Data
          </button>
        </div>

        <div className="flex gap-4 mb-6">
          {["personal", "hero", "about", "skills", "projects", "contact"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg capitalize ${
                activeTab === tab ? "bg-blue-600" : "bg-gray-700 hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-gray-800 rounded-xl p-6">
          {activeTab === "personal" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Personal Info</h2>
              <input
                type="text"
                value={data.personal.name}
                onChange={(e) => updatePersonal("name", e.target.value)}
                placeholder="Name"
                className="w-full p-3 bg-gray-700 rounded-lg"
              />
              <input
                type="text"
                value={data.personal.title}
                onChange={(e) => updatePersonal("title", e.target.value)}
                placeholder="Title"
                className="w-full p-3 bg-gray-700 rounded-lg"
              />
              <input
                type="text"
                value={data.personal.logo}
                onChange={(e) => updatePersonal("logo", e.target.value)}
                placeholder="Logo"
                className="w-full p-3 bg-gray-700 rounded-lg"
              />
            </div>
          )}

          {activeTab === "hero" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Hero Section</h2>
              <textarea
                value={data.hero.subtitle}
                onChange={(e) => updateData("hero", "subtitle", e.target.value)}
                placeholder="Subtitle"
                className="w-full p-3 bg-gray-700 rounded-lg h-32"
              />
              <input
                type="text"
                value={data.hero.cvLink || ""}
                onChange={(e) => updateData("hero", "cvLink", e.target.value)}
                placeholder="CV Link"
                className="w-full p-3 bg-gray-700 rounded-lg"
              />
            </div>
          )}

          {activeTab === "about" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">About Section</h2>
              <textarea
                value={data.about.description}
                onChange={(e) => updateData("about", "description", e.target.value)}
                placeholder="Description"
                className="w-full p-3 bg-gray-700 rounded-lg h-32"
              />
            </div>
          )}

          {activeTab === "skills" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, idx) => (
                  <span key={idx} className="bg-blue-600 px-3 py-1 rounded-full flex items-center gap-2">
                    {skill}
                    <button onClick={() => {
                      const newSkills = data.skills.filter((_, i) => i !== idx);
                      setData(prev => ({ ...prev, skills: newSkills }));
                    }} className="text-xs hover:text-red-300">✕</button>
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Add skill"
                  className="flex-1 p-3 bg-gray-700 rounded-lg"
                  id="newSkill"
                />
                <button
                  onClick={() => {
                    const input = document.getElementById("newSkill");
                    if (input.value) {
                      setData(prev => ({ ...prev, skills: [...prev.skills, input.value] }));
                      input.value = "";
                    }
                  }}
                  className="bg-blue-600 px-6 rounded-lg"
                >
                  Add
                </button>
              </div>
            </div>
          )}

          {activeTab === "projects" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Projects</h2>
              <div className="grid gap-4 md:grid-cols-2 mb-6">
                {data.projects.map((project) => (
                  <div key={project.id} className="bg-gray-700 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold">{project.title}</h3>
                      <button onClick={() => deleteProject(project.id)} className="text-red-400 hover:text-red-300">✕</button>
                    </div>
                    <p className="text-gray-400 text-sm">{project.description}</p>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-600 pt-4">
                <h3 className="font-semibold mb-2">Add New Project</h3>
                <div className="grid gap-2">
                  <input
                    type="text"
                    value={newProject.title}
                    onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
                    placeholder="Project Title"
                    className="p-3 bg-gray-700 rounded-lg"
                  />
                  <input
                    type="text"
                    value={newProject.description}
                    onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
                    placeholder="Description"
                    className="p-3 bg-gray-700 rounded-lg"
                  />
                  <input
                    type="text"
                    value={newProject.gitUrl}
                    onChange={(e) => setNewProject({ ...newProject, gitUrl: e.target.value })}
                    placeholder="GitHub URL"
                    className="p-3 bg-gray-700 rounded-lg"
                  />
                  <input
                    type="text"
                    value={newProject.previewUrl}
                    onChange={(e) => setNewProject({ ...newProject, previewUrl: e.target.value })}
                    placeholder="Preview URL"
                    className="p-3 bg-gray-700 rounded-lg"
                  />
                  <button onClick={addProject} className="bg-green-600 py-2 rounded-lg hover:bg-green-700">
                    Add Project
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Contact Info</h2>
              <textarea
                value={data.contact.description}
                onChange={(e) => updateData("contact", "description", e.target.value)}
                placeholder="Description"
                className="w-full p-3 bg-gray-700 rounded-lg h-32"
              />
              <input
                type="text"
                value={data.contact.githubUrl}
                onChange={(e) => updateData("contact", "githubUrl", e.target.value)}
                placeholder="GitHub URL"
                className="w-full p-3 bg-gray-700 rounded-lg"
              />
              <input
                type="text"
                value={data.contact.linkedinUrl}
                onChange={(e) => updateData("contact", "linkedinUrl", e.target.value)}
                placeholder="LinkedIn URL"
                className="w-full p-3 bg-gray-700 rounded-lg"
              />
              <input
                type="email"
                value={data.contact.email}
                onChange={(e) => updateData("contact", "email", e.target.value)}
                placeholder="Email"
                className="w-full p-3 bg-gray-700 rounded-lg"
              />
            </div>
          )}
        </div>

        <div className="mt-8 bg-gray-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Preview JSON Data</h2>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto text-sm">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
