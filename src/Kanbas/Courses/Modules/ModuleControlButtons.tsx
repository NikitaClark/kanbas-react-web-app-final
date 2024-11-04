import { FaTrash, FaPen } from "react-icons/fa"; // Use FaPen instead of FaPencil
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  return (
    <div className="float-end">
      <FaPen onClick={() => editModule(moduleId)} className="text-primary me-3" />
      <FaTrash onClick={() => deleteModule(moduleId)} className="text-danger me-2 mb-1" />
      <GreenCheckmark />
      <BsPlus className="fs-1" />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
