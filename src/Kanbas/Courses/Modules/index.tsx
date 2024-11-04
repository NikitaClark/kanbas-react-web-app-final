// src/Kanbas/Courses/Modules/index.tsx
import { useSelector, useDispatch } from "react-redux";
import { Module } from "./reducer";
import { addModule, deleteModule, editModule, updateModule } from "./reducer";
import React, { useState } from "react";
import { useParams } from "react-router";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  return (
    <div className="wd-modules">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <ul className="list-unstyled">
        {modules
          .filter((module: Module) => module.course === cid)
          .map((module: Module) => (
            <li key={module._id} className="mb-3">
              <div className="d-flex justify-content-between align-items-center bg-light p-3 rounded">
                {!module.editing ? (
                  <span>{module.name}</span>
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        dispatch(updateModule({ ...module, editing: false }));
                      }
                    }}
                    defaultValue={module.name}
                  />
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => {
                    dispatch(deleteModule(moduleId));
                  }}
                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
