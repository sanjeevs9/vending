'use client';

import { useState } from 'react';

export default function ContactUs() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      mobile: '',
      company: '',
      subject: '',
      message: '',
   });

   const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
   ) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log('one');
      console.log('Form submitted:', formData);
   };

   const handleClear = () => {
      setFormData({
         name: '',
         email: '',
         mobile: '',
         company: '',
         subject: '',
         message: '',
      });
   };

   return (
      <section className="contact-section relative overflow-hidden min-h-screen font-inter">
         {/* Wavy background pattern */}

         <div className="min-h-screen flex flex-col md:flex-row items-stretch relative z-10">
            {/* Contact info column */}
            <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center">
               <h1 className="text-2xl font-semibold text-red-800 capitalize  lg:text-3xl">
                  Get in touch
               </h1>

               <div className="mt-6 space-y-8 md:mt-8">
                  <p className="flex items-start -mx-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-red-500 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                     </svg>

                     <span className="mx-2 text-gray-700 truncate w-72">
                        Avyan Techserve Private Limited
                        <br />
                        # 2280, 16th cross, 21st A Main
                        <br />
                        Road 1st Sector, HSR Layout
                        <br />
                        Bengaluru, Karnataka 560102
                     </span>
                  </p>

                  <p className="flex items-start -mx-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                     </svg>

                     <span className="mx-2 text-gray-700 truncate w-72 ">
                        +91 99802 20000
                        <br />
                        +91 99805 52200
                        <br />
                        +91 99805 50603
                     </span>
                  </p>

                  <p className="flex items-start -mx-2">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 mx-2 text-red-500 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                     </svg>

                     <span className="mx-2 text-gray-700 truncate w-72 ">
                        info@snackit.in
                     </span>
                  </p>
               </div>

               <div className="mt-6 w-80 md:mt-8">
                  <h3 className="text-red-800">Follow us</h3>

                  <div className="flex mt-4 -mx-1.5 ">
                     <a
                        className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                        href="https://www.facebook.com/snackitvend"
                     >
                        <svg
                           className="w-8 h-8"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M7 10.2222V13.7778H9.66667V20H13.2222V13.7778H15.8889L16.7778 10.2222H13.2222V8.44444C13.2222 8.2087 13.3159 7.9826 13.4826 7.81591C13.6493 7.64921 13.8754 7.55556 14.1111 7.55556H16.7778V4H14.1111C12.9324 4 11.8019 4.46825 10.9684 5.30175C10.1349 6.13524 9.66667 7.2657 9.66667 8.44444V10.2222H7Z"
                              fill="currentColor"
                           />
                        </svg>
                     </a>

                     <a
                        className="mx-1.5 text-gray-400 transition-colors duration-300 transform hover:text-blue-500"
                        href="https://www.linkedin.com/company/snackit-co-in/"
                     >
                        <svg
                           className="w-8 h-8"
                           viewBox="0 0 24 24"
                           fill="none"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z"
                              fill="currentColor"
                           />
                           <path
                              d="M7.2 9.6001H4V19.2001H7.2V9.6001Z"
                              fill="currentColor"
                           />
                           <path
                              d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z"
                              fill="currentColor"
                           />
                        </svg>
                     </a>
                  </div>
               </div>
            </div>

            {/* Form column */}
            <div className="w-full lg:w-2/3 p-8 lg:p-12 flex flex-col justify-center">
               <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <input
                              required
                              type="text"
                              name="name"
                              placeholder="Name"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-4 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black"
                           />
                        </div>
                        <div>
                           <input
                              required
                              type="email"
                              name="email"
                              placeholder="Email"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-4 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black"
                           />
                        </div>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                           <input
                              type="tel"
                              name="mobile"
                              placeholder="Mobile number"
                              value={formData.mobile}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-4 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black"
                           />
                        </div>
                        <div>
                           <input
                              type="text"
                              name="company"
                              placeholder="Company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full bg-transparent border border-black rounded-md p-4 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black"
                           />
                        </div>
                     </div>

                     <div>
                        <input
                           type="text"
                           name="subject"
                           placeholder="Subject"
                           value={formData.subject}
                           onChange={handleChange}
                           className="w-full bg-transparent border border-black rounded-md p-4 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                     </div>

                     <div>
                        <textarea
                           required
                           name="message"
                           placeholder="Message"
                           value={formData.message}
                           onChange={handleChange}
                           rows={6}
                           className="w-full bg-transparent border border-black rounded-md p-4 text-black placeholder-black/70 focus:outline-none focus:ring-2 focus:ring-black"
                        ></textarea>
                     </div>

                     <div className="flex justify-end space-x-4">
                        <button
                           type="button"
                           onClick={handleClear}
                           className=" text-gray-300 rounded-full px-12 py-3  hover:bg-gray-100 transition duration-300"
                        >
                           Clear
                        </button>
                        <button
                           type="submit"
                           className="bg-red-700 text-white rounded-full px-12 py-3 hover:bg-gray-800 transition duration-300"
                        >
                           Submit
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
}
