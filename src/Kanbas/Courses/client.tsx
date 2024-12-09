import axios from "axios";
const axiosWithCredentials = axios.create({ withCredentials: true });
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const COURSES_API = `${REMOTE_SERVER}/api/courses`;

export const fetchAllCourses = async () => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
};

export const createCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.post(COURSES_API, course);
    return data;
};

export const deleteCourse = async (courseId: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${courseId}`);
    return data;
};

export const updateCourse = async (course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
};

export const createModuleForCourse = async (courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(
        `/api/courses/${courseId}/modules`,
        module
    );
    return response.data;
};

export const findModulesForCourse = async (courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const deleteModule = async (moduleId: string) => {
    const response = await axiosWithCredentials.delete(
        `/api/modules/${moduleId}`
    );
    return response.data;
};

export const updateModuleCourse = async (module: any) => {
    const { data } = await axiosWithCredentials.put(`/api/module/${module._id}`, module);
    return data;
};

export const findUsersForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/users`);
    return response.data;
};

export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId: string, assignment: any) => {
    const { data } = await axiosWithCredentials.post(`/api/courses/${courseId}/assignments`, assignment);
    return data;
};

export const updateAssignment = async (assignment: any) => {
    const { data } = await axiosWithCredentials.put(`/api/courses/${assignment._id}`, assignment);
    return data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await axiosWithCredentials.delete(
        `/api/courses/${assignmentId}`
    );
    return response.data;
};