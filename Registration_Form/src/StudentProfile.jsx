// filepath: d:\Projects\Basher\Registration_Form\src\StudentProfile.jsx
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import supabase from "./supabaseclient";

const StudentProfile = () => {
  const { id } = useParams();  // Get the student ID from the URL
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchStudent = async () => {
      const { data, error } = await supabase
        .from("students")
        .select("*")
        .eq("id", id)
        .single();  // Fetch only one student by ID

      if (error) {
        console.error("Error fetching student:", error);
      } else {
        setStudent(data);
      }
    };

    if (id) fetchStudent();
  }, [id]);

  if (!student) {
    return <div className="text-white text-center mt-10">Loading student details...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">Student Details</h1>
      <div className="bg-white text-black p-6 rounded-lg shadow-md">
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
        <p><strong>Date of Birth:</strong> {student.dob}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
      </div>
    </div>
  );
};

export default StudentProfile;