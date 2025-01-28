// "use client";
// import { motion } from "framer-motion";
// import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// const ContactPage = () => {
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const text = "Say Hello";

//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setError(false);
//     setSuccess(false);

//     emailjs
//       .sendForm(
//         process.env.NEXT_PUBLIC_SERVICE_ID,
//         process.env.NEXT_PUBLIC_TEMPLATE_ID,
//         form.current,
//         process.env.NEXT_PUBLIC_PUBLIC_KEY
//       )
//       .then(
//         () => {
//           setSuccess(true);
//           form.current.reset();
//         },
//         () => {
//           setError(true);
//         }
//       );
//   };

//   return (
//     <motion.div
//       className="h-full"
//       initial={{ y: "-200vh" }}
//       animate={{ y: "0%" }}
//       transition={{ duration: 1 }}
//     >
//       <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
//         {/* TEXT CONTAINER */}
//         <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
//           <div>
//             {text.split("").map((letter, index) => (
//               <motion.span
//                 key={index}
//                 initial={{ opacity: 1 }}
//                 animate={{ opacity: 0 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   delay: index * 0.1,
//                 }}
//               >
//                 {letter}
//               </motion.span>
//             ))}
//             😊
//           </div>
//         </div>
//         {/* FORM CONTAINER */}
//         <form
//           onSubmit={sendEmail}
//           ref={form}
//           className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
//         >
//           <span>Dear Husnain,</span>
//           <textarea
//             rows={6}
//             className="bg-transparent border-b-2 border-b-black outline-none resize-none"
//             name="user_message"
//           />
//           <span>My mail address is:</span>
//           <input
//             name="user_email"
//             type="text"
//             className="bg-transparent border-b-2 border-b-black outline-none"
//           />
//           <span>Regards</span>
//           <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
//             Send
//           </button>
//           {success && (
//             <span className="text-green-600 font-semibold">
//               Your message has been sent successfully!
//             </span>
//           )}
//           {error && (
//             <span className="text-red-600 font-semibold">
//               Something went wrong!
//             </span>
//           )}
//         </form>
//       </div>
//     </motion.div>
//   );
// };

// export default ContactPage;

"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef();
  const text = "Say Hello";

  const sendEmail = async (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );
      console.log("Email successfully sent!", result);
      setSuccess(true);
      form.current.reset();
    } catch (err) {
      console.error("Error sending email:", err); // Log the error for debugging
      setError(true);
    }
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl lg:text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            <span className="ml-2">😊</span>
          </div>
        </div>

        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-lg lg:text-xl flex flex-col gap-6 justify-center p-8 sm:p-12 lg:p-24"
        >
          <label className="font-medium">Dear Husnain,</label>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
            placeholder="Write your message here"
            aria-label="Message"
            required
          />
          <label className="font-medium">My mail address is:</label>
          <input
            name="user_email"
            type="email"
            className="bg-transparent border-b-2 border-b-black outline-none"
            placeholder="Your email address"
            aria-label="Email Address"
            required
          />
          <label className="font-medium">Regards</label>
          <button
            type="submit"
            className="bg-purple-200 rounded font-semibold text-gray-600 p-4 hover:bg-purple-300 transition"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong. Please try again!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
