// components/Footer.js

import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-white p-4 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        {/* Copyright */}
        <p className=" text-black">
          &copy; {new Date().getFullYear()} All Rights Reserved
        </p>

        {/* Social Media Links */}
        <div className="pb-5 pr-28 hidden sm:block">
          <div className=" text-black text-center py-5 font-bold">
            Participating Members:
          </div>
          <div className="flex space-x-4">
            {/* LinkedIn and GitHub links for each member */}
            <div className="flex justify-center flex-col">
              <a
                href="https://www.linkedin.com/in/mohammed-tewfik-benarba/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin-logo.ico" // Replace with the path to your LinkedIn logo image
                  alt="Tewfik Benarba"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>

              <a
                href="https://github.com/Ben-Tewfik"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/GitHub-Mark.ico" // Replace with the path to your GitHub logo image
                  alt="Tewfik Benarba"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>
            </div>
            <div className="flex justify-center flex-col">
              <a
                href="https://www.linkedin.com/in/bouchra-ikram-aboura-1750b5169/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin-logo.ico" // Replace with the path to your LinkedIn logo image
                  alt="LinkedIn"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>
              <a
                href="https://github.com/ikoworld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/GitHub-Mark.ico" // Replace with the path to your GitHub logo image
                  alt="Bouchra Ikram Aboura"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>
            </div>
            <div className="flex justify-center flex-col">
              <a
                href="https://www.linkedin.com/in/ahmed-djebnoune-ab840b111/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin-logo.ico" // Replace with the path to your LinkedIn logo image
                  alt="Ahmed Djebnoune"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>
              <a
                href="https://github.com/Bolphunga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/GitHub-Mark.ico" // Replace with the path to your GitHub logo image
                  alt="Ahmed Djebnoune"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>
            </div>
            <div className="flex justify-center flex-col">
              <a
                href="https://www.linkedin.com/in/mounib-zaidi/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin-logo.ico" // Replace with the path to your LinkedIn logo image
                  alt="Mounib Zaidi"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>

              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/GitHub-Mark.ico" // Replace with the path to your GitHub logo image
                  alt="Mounib Zaidi"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>
            </div>
            <div className="flex justify-cente flex-col">
              <a
                href="https://www.linkedin.com/in/member1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/linkedin-logo.ico" // Replace with the path to your LinkedIn logo image
                  alt="LinkedIn"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>

              <a
                href="https://github.com/member1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/GitHub-Mark.ico" // Replace with the path to your GitHub logo image
                  alt="GitHub"
                  className="w-8 h-8 cursor-pointer hover:opacity-70"
                />
              </a>
            </div>
          </div>
        </div>
        {/* Back to Top */}
        {/* <a href="#top" className="text-blue-500 hover:text-blue-700">Back to Top</a> */}
        <Link href="#top" className="">
          {" "}
          <img
            src="/Back-to-top.png"
            alt="Back to top"
            className="w-12 h-12 mx-4"
          />
        </Link>
      </div>
      <hr />
      <p className=" text-center text-black pt-3">
        Designed and Implemented by{" "}
        <a
          href="https://github.com/202306-NEA-DZ-FEW/e-commerce-project-team-8"
          className="text-blue-500 hover:text-blue-700"
        >
          Alpha Team
        </a>
      </p>
    </footer>
  )
}

export default Footer
