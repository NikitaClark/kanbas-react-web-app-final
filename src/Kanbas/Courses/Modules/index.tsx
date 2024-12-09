// src/Kanbas/Courses/Modules/index.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import * as client from "../client";

export default function Modules() {
  const [modules, setModules] = useState<any[]>([]);
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");

  const fetchModules = async (courseId: string) => {
    const modules = await client.findModulesForCourse(courseId);
    setModules(modules);
  };

  // Add a new module
  const addModule = async () => {
    if (!moduleName.trim()) {
      console.error("Module name is required.");
      return; // Prevent adding empty module names
    }

    if (!cid) {
      console.error("Course ID (cid) is required.");
      return; // Prevent creating a module if the course ID is missing
    }

    try {
      const newModule = { name: moduleName, course: cid };
      const createdModule = await client.createModuleForCourse(cid, newModule); // Assume this API exists
      setModules((prevModules) => [...prevModules, createdModule]);
      setModuleName("");
    } catch (error) {
      console.error("Error adding module:", error);
    }
  };

  // Delete a module
  const deleteModule = async (moduleId: string) => {
    try {
      await client.deleteModule(moduleId); // Assume this API exists
      setModules((prevModules) =>
        prevModules.filter((module) => module._id !== moduleId)
      );
    } catch (error) {
      console.error("Error deleting module:", error);
    }
  };

  // Update a module
  const updateModule = async (updatedModule: any) => {
    try {
      await client.updateModuleCourse(updatedModule);
      setModules((prevModules) =>
        prevModules.map((module) =>
          module._id === updatedModule._id ? { ...module, ...updatedModule } : module
        )
      );
    } catch (error) {
      console.error("Error updating module:", error);
    }
  };

  // Edit a module (set to editing mode)
  const editModule = (moduleId: string) => {
    setModules((prevModules) =>
      prevModules.map((module) =>
        module._id === moduleId ? { ...module, editing: true } : module
      )
    );
  };

  useEffect(() => {
    if (cid) {
      fetchModules(cid);
    }
  }, [cid]);

  return (
    <div className="wd-modules" style={{ marginLeft: "150px" }}>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
      <ul className="list-unstyled">
        {modules
          .map((module) => (
            <li key={module._id} className="mb-3">
              <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                {!module.editing ? (
                  <span>{module.name}</span>
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      setModules((prevModules) =>
                        prevModules.map((mod) =>
                          mod._id === module._id ? { ...mod, name: e.target.value } : mod
                        )
                      )
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        updateModule({ ...module, editing: false, name: e.currentTarget.value });
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    deleteModule(moduleId);
                  }}
                  editModule={(moduleId) => editModule(moduleId)}
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
