import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);
      console.log(import.meta.env.VITE_API_URL);

      const res = await fetch(`${import.meta.env.VITE_API_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[100dvh]   px-6 py-20 flex items-center justify-center">
      <div className="max-w-5xl w-full">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In Touch
          </h2>
          <p className="text-gray-400 mt-4">
            Have a project idea or just want to connect? Let’s talk.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-cyan-400">Email</h3>
              <p className="text-gray-300 mt-1">riya.verma7202@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-cyan-400">Location</h3>
              <p className="text-gray-300 mt-1">India</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:border-cyan-400"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:border-cyan-400"
            />

            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 rounded-lg bg-[#1e293b] border border-gray-700 focus:border-cyan-400"
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-cyan-500 py-3 rounded-lg font-medium hover:bg-cyan-600 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;