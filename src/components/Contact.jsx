import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_sxcsjlc",
        "template_6sqyumw",
        {
          from_name: form.name,
          from_email: form.email,
          message: `
Visitor Message:
${form.message}

------------------------
Portfolio Owner Details
Name: Lingam Ganesh
Role: Full Stack Developer
Email: lingam.ganeshh@gmail.com
Phone: +91 6309383520
Location: Hyderabad, India
LinkedIn: https://linkedin.com/in/lingam-ganesh
GitHub: https://github.com/LingamGanesh
          `,
        },
        "2c-QZKQfzxOJDKzuO"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you soon.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      
      {/* LEFT SIDE */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* YOUR DETAILS */}
        <div className="mt-8 mb-10 text-white space-y-2 text-[15px]">
          <p><span className="font-semibold">Name:</span> Lingam Ganesh</p>
          <p><span className="font-semibold">Role:</span> Full Stack Developer</p>

          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:lingam.ganeshh@gmail.com"
              className="text-blue-400 underline"
            >
              lingam.ganeshh@gmail.com
            </a>
          </p>

          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a
              href="tel:6309383520"
              className="text-blue-400 underline"
            >
              +91 6309383520
            </a>
          </p>

          <p>
            <span className="font-semibold">Location:</span> Hyderabad, India
          </p>

          <div className="flex gap-6 mt-4">
            <a
              href="https://linkedin.com/in/lingam-ganesh"
              target="_blank"
              rel="noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/LingamGanesh"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:underline"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[400px] h-[300px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
