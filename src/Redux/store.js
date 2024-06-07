import { configureStore } from "@reduxjs/toolkit";

import authSliceReducer from "./Slices/AuthSlice";
import courseSliceReducer from "./Slices/CourseSlice";
import lectureSliceReducer from "./Slices/LectureSlice";
import razorPaySliceReducer from "./Slices/RazorpaySlice";

const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    course: courseSliceReducer,
    razorpay: razorPaySliceReducer,
    lecture: lectureSliceReducer,
  },
  devTools: true,
});

export default store;
