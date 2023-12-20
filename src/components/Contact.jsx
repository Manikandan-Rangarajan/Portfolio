import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { style } from "../style";
import { EarthCanvas } from "./canvas";
import { StarWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

//template_bxhzrlo
//service_0hj2t4x
//pcN5N8Ne439agoR2N

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

    setForm({ ...form, [name]: [value] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    emailjs
      .send(
        "service_0hj2t4x",
        "template_6qysixk",
        {
          from_name: form.name,
          to_name: "Manikandan",
          from_email: form.email,
          to_email: "username270904@gmail.com",
          message: form.message,
        },
        "pcN5N8Ne439agoR2N"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thanks for reaching me out, I will reply as soon as I can");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log("Failed...", error);

          alert("Something went wrong...");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        }
      );
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className=" flex-[0.75] bg-black-100 p-8 rounded-2xl "
      >
        <p className={style.sectionSubText}>Get in Touch</p>
        <h3 className={style.sectionHeadText}>Contact</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary text-white placeholder:text-secondary rounded-lg border-none 
              outline-none py-4 px-6"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="bg-tertiary text-white placeholder:text-secondary rounded-lg border-none 
              outline-none py-4 px-6"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you wanna say?"
              className="bg-tertiary text-white placeholder:text-secondary rounded-lg border-none 
              outline-none py-4 px-6"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary text-white text-[14px] rounded-lg w-fit py-3 px-6 
            outline-none border-none font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:mx-auto md:h-[550px] h-[350px] "
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default StarWrapper(Contact, "contact");
