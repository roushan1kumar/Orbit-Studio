import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                "http://localhost:8080/api/contact",
                formData
            );

            alert("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {
            console.error("Error:", error);
            alert("Failed to send message");
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex items-center justify-center transition duration-500 hover:scale-[1.02]"
        >
            <div className="absolute w-[400px] h-[400px] bg-cyan-500 opacity-20 blur-[140px] rounded-full"></div>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-full max-w-5xl grid md:grid-cols-2 gap-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[40px] p-10 shadow-2xl"
            >
                <div className="flex flex-col justify-center">
                    <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                        Let’s Build
                        <br />
                        Something Amazing
                    </h1>

                    <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                        Have a project idea, startup, or creative vision?
                        Let’s create a premium digital experience together.
                    </p>

                    <div className="flex gap-6 mt-10 text-3xl">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-125 transition duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-125 transition duration-300"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noreferrer"
                            className="hover:scale-125 transition duration-300"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href="mailto:hello@fluxstudio.com"
                            className="hover:scale-125 transition duration-300"
                        >
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-6"
                >
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition"
                        />
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition"
                        />
                    </div>

                    <div>
                        <textarea
                            rows="6"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            required
                            className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:border-cyan-400 transition resize-none"
                        />
                    </div>

                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full bg-white text-black py-4 rounded-2xl font-semibold text-lg hover:bg-cyan-300 transition duration-300"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </motion.div>
        </section>
    );
}

export default Contact;