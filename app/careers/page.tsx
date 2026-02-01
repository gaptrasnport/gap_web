"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function Careers() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        telephone: "",
        email: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.firstName || !formData.lastName || !formData.telephone || !formData.email) {
            setStatus("error");
            setMessage("Please fill out all fields.");
            return;
        }

        setStatus("loading");
        setMessage("");

        try {
            const response = await fetch("/api/careers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("success");
                setMessage("Your application has been sent successfully. We will contact you soon!");
                setFormData({ firstName: "", lastName: "", telephone: "", email: "" });
            } else {
                setStatus("error");
                setMessage(data.error || "Something went wrong. Please try again later.");
            }
        } catch (error) {
            setStatus("error");
            setMessage("Failed to connect to the server. Please check your internet connection.");
        }
    };

    return (
        <main className="min-h-screen bg-white">
            {/* Solid Blue Header for Subpage */}
            <Navbar transparent={false} />

            {/* Main Content */}
            <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-gray-800">

                {/* Title */}
                <h1 className="font-holiday text-6xl text-yellow-400 mb-8 mt-8">Careers</h1>

                {/* Intro Text */}
                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                    We are always looking for <span className="font-bold text-gray-800">professional, safety-focused drivers and team members</span> who take pride in their work and understand the importance of reliability, accountability, and service.
                </p>

                <p className="text-lg leading-relaxed mb-6 text-gray-600">
                    If you are committed to <span className="font-bold text-gray-800">safe driving practices</span>, respect procedures, and want to be part of a <span className="font-bold text-gray-800">stable, owner-operated transportation team</span>, we invite you to apply. We value experience, a strong safety record, and individuals who are looking for long-term growth in a professional environment.
                </p>

                <p className="text-lg leading-relaxed mb-12 text-gray-600">
                    Join a team where <span className="font-bold text-gray-800">safety comes first</span>, performance matters, and people are treated with respect.
                </p>

                {/* Application Form */}
                <form onSubmit={handleSubmit} className="max-w-md space-y-6">

                    {/* First Name */}
                    <div className="flex flex-col">
                        <label htmlFor="firstName" className="font-bold text-yellow-500 text-lg mb-2 font-rubik">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Last Name */}
                    <div className="flex flex-col">
                        <label htmlFor="lastName" className="font-bold text-yellow-500 text-lg mb-2 font-rubik">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Telephone */}
                    <div className="flex flex-col">
                        <label htmlFor="telephone" className="font-bold text-yellow-500 text-lg mb-2 font-rubik">Telephone:</label>
                        <input
                            type="tel"
                            id="telephone"
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleChange}
                            required
                            className="border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Email Address */}
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-bold text-yellow-500 text-lg mb-2 font-rubik">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="border border-yellow-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                    </div>

                    {/* Feedback Messages */}
                    <AnimatePresence>
                        {status !== "idle" && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className={`p-4 rounded-lg text-sm font-medium ${status === "success" ? "bg-green-100 text-green-800 border border-green-200" :
                                        status === "error" ? "bg-red-100 text-red-800 border border-red-200" :
                                            "bg-blue-50 text-blue-800 border border-blue-100"
                                    }`}
                            >
                                {status === "loading" ? (
                                    <div className="flex items-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending application...
                                    </div>
                                ) : message}
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={status === "loading"}
                        className={`w-full bg-blue-900 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors uppercase tracking-wider ${status === "loading" ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                    >
                        {status === "loading" ? "Sending..." : "Submit Application"}
                    </button>

                </form>

            </div>
        </main>
    );
}
