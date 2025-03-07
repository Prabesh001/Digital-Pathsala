"use client"
import { useState } from 'react';
import dynamic from 'next/dynamic';
import {Editor} from "@tinymce/tinymce-react"

const TinyMCE = dynamic(
  () => import('@tinymce/tinymce-react').then((mod) => mod.Editor),
  { ssr: false }
);

interface Lesson {
  title: string;
  videos: File[];
}

const CreateCoursePage = () => {
  const [courseTitle, setCourseTitle] = useState('');
  const [maxStudents, setMaxStudents] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('');
  const [coursePrice, setCoursePrice] = useState('');
  const [courseDiscount, setCourseDiscount] = useState('');
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [previewVideo, setPreviewVideo] = useState<File | null>(null);
  const [description, setDescription] = useState('');
  const [lessons, setLessons] = useState<Lesson[]>([{ title: '', videos: [] }]);

  const handleAddLesson = () => {
    setLessons([...lessons, { title: '', videos: [] }]);
  };

  const handleLessonTitleChange = (index: number, value: string) => {
    const updatedLessons = [...lessons];
    updatedLessons[index].title = value;
    setLessons(updatedLessons);
  };

  const handleAddVideo = (lessonIndex: number) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'video/*';
    input.onchange = (e) => {
      const files = (e.target as HTMLInputElement).files;
      if (files) {
        const updatedLessons = [...lessons];
        updatedLessons[lessonIndex].videos = [...updatedLessons[lessonIndex].videos, ...Array.from(files)];
        setLessons(updatedLessons);
      }
    };
    input.click();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      courseTitle,
      maxStudents,
      difficultyLevel,
      coursePrice,
      courseDiscount,
      thumbnail,
      previewVideo,
      description,
      lessons
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 p-4 rounded-lg">
        <div className="max-w-4xl p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Upload a New Course</h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="courseTitle" className="block text-sm font-medium text-gray-700">
                Course Title
              </label>
              <input
                type="text"
                id="courseTitle"
                value={courseTitle}
                onChange={(e) => setCourseTitle(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter course title"
                required
              />
            </div>

            <div>
              <label htmlFor="maxStudents" className="block text-sm font-medium text-gray-700">
                Maximum Students
              </label>
              <input
                type="number"
                id="maxStudents"
                value={maxStudents}
                onChange={(e) => setMaxStudents(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., 50"
                required
              />
            </div>

            <div>
              <label htmlFor="difficultyLevel" className="block text-sm font-medium text-gray-700">
                Difficulty Level
              </label>
              <select
                id="difficultyLevel"
                value={difficultyLevel}
                onChange={(e) => setDifficultyLevel(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Select Difficulty Level</option>
                <option value="basic">Basic</option>
                <option value="intermediate">Intermediate</option>
                <option value="expert">Expert</option>
              </select>
            </div>

            <div>
              <label htmlFor="coursePrice" className="block text-sm font-medium text-gray-700">
                Course Price (USD)
              </label>
              <input
                type="number"
                id="coursePrice"
                value={coursePrice}
                onChange={(e) => setCoursePrice(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., 99"
                required
              />
            </div>

            <div>
              <label htmlFor="courseDiscount" className="block text-sm font-medium text-gray-700">
                Course Discount (%)
              </label>
              <input
                type="number"
                id="courseDiscount"
                value={courseDiscount}
                onChange={(e) => setCourseDiscount(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="e.g., 20"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Course Thumbnail</label>
              <input
                type="file"
                id="courseThumbnail"
                onChange={(e) => setThumbnail(e.target.files?.[0] || null)}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                accept="image/*"
                required
              />
              <p className="mt-2 text-sm text-gray-500">
                Upload an image file for the course thumbnail (Max size: 5MB)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Course Preview Video</label>
              <input
                type="file"
                id="previewVideo"
                onChange={(e) => setPreviewVideo(e.target.files?.[0] || null)}
                className="block w-full text-sm text-gray-500 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                accept="video/*"
                required
              />
              <p className="mt-2 text-sm text-gray-500">Upload a short preview video (Max size: 100MB)</p>
            </div>

            <div>
              <label htmlFor="courseDescription" className="block text-sm font-medium text-gray-700">
                Course Description
              </label>
              <TinyMCE
                apiKey= 'tnv7agipmmpdg1kmlkfxxrm5s8gtoisk2wh2fjykwkz6tfm7'
                value={description}
                onEditorChange={(content) => setDescription(content)}
                init={{
                  height: 300,
                  plugins: 'lists link image preview',
                  toolbar: 'undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | link image',
                }}
              />
            </div>

            <div id="lessonsContainer">
              <label className="block text-sm font-medium text-gray-700">Lessons</label>

              {lessons.map((lesson, index) => (
                <div key={index} className="lesson-group mt-4 border p-4 rounded-md bg-gray-50">
                  <input
                    type="text"
                    value={lesson.title}
                    onChange={(e) => handleLessonTitleChange(index, e.target.value)}
                    className="lesson-title mt-2 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    placeholder={`Lesson ${index + 1} Title`}
                    required
                  />

                  <div className="mt-2">
                    <label className="block text-sm font-medium text-gray-700">Upload Lesson Videos</label>
                    <div className="video-container">
                      <input
                        type="file"
                        multiple
                        onChange={(e) => {
                          const files = e.target.files;
                          if (files) {
                            const updatedLessons = [...lessons];
                            updatedLessons[index].videos = [...updatedLessons[index].videos, ...Array.from(files)];
                            setLessons(updatedLessons);
                          }
                        }}
                        className="lesson-video mt-2 block w-full text-sm text-gray-500 border border-gray-300 rounded-md file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => handleAddVideo(index)}
                      className="mt-2 text-green-600 hover:text-green-800 add-video-btn"
                    >
                      + Add Another Video
                    </button>
                  </div>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddLesson}
                className="mt-4 text-green-600 hover:text-green-800"
              >
                + Add Another Lesson
              </button>
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none"
              >
                Upload Course
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default CreateCoursePage;