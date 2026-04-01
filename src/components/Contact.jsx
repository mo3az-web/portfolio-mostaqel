import { motion } from "framer-motion";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Contact() {
  const contactInfo = [
    { icon: <HiMail />, label: "Email", value: "moaz@example.com" },
    { icon: <HiPhone />, label: "Phone", value: "+20 123 456 789" },
    { icon: <HiLocationMarker />, label: "Location", value: "Egypt" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "#" },
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaTwitter />, link: "#" },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold dark:text-white"
          >
            Get In <span className="text-blue-500">Touch</span>
          </motion.h2>
          <p className="text-gray-600 dark:text-gray-400 mt-4">بانتظار رسالتك لنبدأ العمل على مشروعك القادم</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold dark:text-white">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-4 bg-blue-50 dark:bg-gray-800 text-blue-500 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="font-medium dark:text-gray-200">{info.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="pt-8">
              <p className="text-gray-600 dark:text-gray-400 mb-4">Follow me</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.link}
                    whileHover={{ y: -5 }}
                    className="p-3 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg hover:text-blue-500 transition-colors"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-900 p-8 rounded-3xl shadow-sm space-y-4"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm dark:text-gray-300">Name</label>
                <input type="text" placeholder="Moaz" className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 ring-blue-500 outline-none dark:text-white transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm dark:text-gray-300">Email</label>
                <input type="email" placeholder="example@mail.com" className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 ring-blue-500 outline-none dark:text-white transition-all" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm dark:text-gray-300">Message</label>
              <textarea rows="4" placeholder="Your message here..." className="w-full p-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:ring-2 ring-blue-500 outline-none dark:text-white transition-all"></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-200 dark:shadow-none hover:bg-blue-600 transition-all"
            >
              Send Message
            </motion.button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}

export default Contact;