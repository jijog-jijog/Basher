import { useState, useEffect } from "react";
import supabase from "./supabaseclient";

function Students() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    phone: "",
  });

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    const { data, error } = await supabase.from("students").select("*");
    if (error) console.error(error);
    else setStudents(data);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { data, error } = await supabase
      .from("students")
      .insert([{ ...formData }])
      .select(); // Fetch the inserted data including the generated UUID
  
    if (error) {
      console.error(error);
    } else {
      setStudents([...students, ...data]);  // Update UI instantly
      setFormData({ name: "", email: "", dob: "", phone: "" }); // Clear input fields
    }
  };
  

  const handleDelete = async (id) => {
    const { error } = await supabase.from("students").delete().eq("id", id);
    
    if (error) {
      console.error(error);
    } else {
      setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gray-900 text-white">
      
      {/* Background Floating Skeleton Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-12 h-12 border border-gray-600 rounded-lg opacity-30"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animation: `float ${3 + Math.random() * 3}s infinite ease-in-out alternate`,
            }}
          />
        ))}
      </div>

      <h1 className="text-3xl font-bold mb-6 drop-shadow-lg">Register Student's Details</h1>

      

      {/* Student List */}
      <div className="w-full max-w-md mt-6">
        <h2 className="text-2xl font-semibold mb-3">Entered Details</h2>
  {students.length === 0 ? (
    <p className="text-gray-400">No students found.</p>
  ) : (
    <>
      {students.map((student) => (
        <div key={student.id} className="bg-white bg-opacity-20 backdrop-blur-md p-4 mb-3 rounded-lg shadow-md border-l-4 border-blue-400">
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Date of Birth:</strong> {student.dob}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p>
            <strong>Profile Link:</strong> 
            <a 
              href={`/student/${student.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 underline"
            >
              View Student Profile
            </a>
          </p>
          <button
            onClick={() => handleDelete(student.id)}
            className="mt-2 bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 transition duration-300"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  )}
</div>

      {/* Floating Animation Keyframes */}
      <style>
        {`
          @keyframes float {
            from { transform: translateY(0px) rotate(0deg); }
            to { transform: translateY(-20px) rotate(5deg); }
          }
        `}
      </style>
    </div>
  );
}

export default Students;
