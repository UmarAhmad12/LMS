import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import CourseCard from "../../Components/CourseCard";
import Loader from "../../Components/Loader";
import HomeLayout from "../../Layouts/HomeLayout";
import { getAllCourses } from "../../Redux/Slices/CourseSlice";

// const override = {
//   display: "block",
//   margin: "0 auto",
// };

function CourseList() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const { courseData } = useSelector((state) => state.course);

  async function loadCourse() {
    setLoading(true);
    await dispatch(getAllCourses());
    setLoading(false);
  }

  useEffect(() => {
    loadCourse();
  }, [dispatch]);

  return (
    <HomeLayout>
      <div className="min-h-[90vh] pt-12 pl-20 flex flex-col gap-10 text-white">
        <h1 className="text-center text-3xl font-semibold mb-5">
          Explore the courses made by{" "}
          <span className="font-bold text-yellow-500">Industry experts</span>
        </h1>
        {loading ? (
          // <PacmanLoader
            // cssOverride={override}
          //   loading={loading}
          //   size={30}
          //   color="#F37A24"
          // />
          <Loader
            // override={override}
            loading={loading}
            setLoading={setLoading}
            // size={30}
            // color="#F37A24"
          />
        ) : (
          <div className="mb-10 flex flex-wrap gap-14">
            {courseData?.map((element) => {
              return <CourseCard key={element._id} data={element} />;
            })}
          </div>
        )}
      </div>
    </HomeLayout>
  );
}

export default CourseList;
