import React from "react";
import useCourseStore from "../app/courseStore";

function CourseList() {
  const { courses, removeCourse, updateCourseStatue } = useCourseStore(
    (state) => ({
      courses: state.courses,
      removeCourse: state.removeCourse,
      updateCourseStatue: state.updateCourseStatue,
    })
  );

  return (
    <div>
      <ul>
        {courses.map((course, i) => {
          return (
            <React.Fragment key={i}>
              <li
                className="course-item"
                style={{
                  backgroundColor: course.completed ? "#00FF0044" : "white",
                }}
              >
                <span className="course-item-col-1">
                  <input
                    checked={course.completed}
                    type="checkbox"
                    onChange={(e) => {
                      updateCourseStatue(course.id);
                    }}
                  />
                </span>
                <span style={{ color: "cyan" }}>{course.title}</span>
                <button
                  onClick={() => {
                    removeCourse(course.id);
                  }}
                  className="delete btn"
                >
                  Delete
                </button>
              </li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}

export default CourseList;
