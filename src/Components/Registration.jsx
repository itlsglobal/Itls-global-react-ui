import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Trash2 } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const Registration = () => {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        country: '',
        password: '',
        confirmPassword: '',
        role: 'STUDENT',
        students: [
            { studentName: '', studentGrade: '' }
        ]
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleStudentChange = (index, e) => {
        const newStudents = [...formData.students];
        newStudents[index][e.target.name] = e.target.value;
        setFormData({
            ...formData,
            students: newStudents
        });
    };

    const addStudent = () => {
        setFormData({
            ...formData,
            students: [...formData.students, { studentName: '', studentGrade: '' }]
        });
    };

    const removeStudent = (index) => {
        const newStudents = formData.students.filter((_, i) => i !== index);
        setFormData({
            ...formData,
            students: newStudents
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration Data:', formData);
        // Add registration logic here
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-600 to-blue-500">
            <Navbar />
            <div className="flex-1 flex items-center justify-center p-4 py-10">
                <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-2xl transform transition-all duration-300">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
                            <input
                                type="text"
                                name="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all outline-none"
                                required
                            />
                        </div>

                        <div className="border-t pt-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-lg font-semibold text-gray-800">Students</h3>
                                <button
                                    type="button"
                                    onClick={addStudent}
                                    className="flex items-center gap-2 text-sm bg-purple-100 text-purple-700 px-3 py-1.5 rounded-full hover:bg-purple-200 transition-colors"
                                >
                                    <Plus size={16} /> Add Student
                                </button>
                            </div>

                            <div className="space-y-4">
                                {formData.students.map((student, index) => (
                                    <div key={index} className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg">
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                name="studentName"
                                                value={student.studentName}
                                                onChange={(e) => handleStudentChange(index, e)}
                                                placeholder="Student Name"
                                                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                                required
                                            />
                                        </div>
                                        <div className="flex-1">
                                            <input
                                                type="text"
                                                name="studentGrade"
                                                value={student.studentGrade}
                                                onChange={(e) => handleStudentChange(index, e)}
                                                placeholder="Grade"
                                                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-purple-500 outline-none"
                                                required
                                            />
                                        </div>
                                        {formData.students.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeStudent(index)}
                                                className="text-red-500 hover:text-red-700 p-2"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-lg mt-6"
                        >
                            Register
                        </button>
                    </form>
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{' '}
                            <Link to="/login" className="text-purple-600 font-semibold hover:underline">
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registration;
