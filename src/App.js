import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./App.css"
import { GithubIcon, LinkedinIcon, SankalpPol1Image } from "./constants/icons";

function App() {
  return (
    <div>
      <div className="tw-w-full tw-relative">
        <div className="tw-w-full tw-relative tw-bg-black">
          <div className="tw-w-full tw-text-center tw-bg-[#18181B] tw-text-white tw-grid tw-grid-cols-1 lg:tw-grid-cols-2">
            <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-h-[100vh]">
              <div className="tw-w-full tw-max-w-[480px] tw-text-left tw-px-10">
                <p className="tw-text-[36px] tw-leading-none">I am</p>
                <p className="tw-text-[48px] tw-leading-lg">Sankalp Pol</p>
                <p className="tw-text-[20px] tw-leading-none">(Full Stack Developer)</p>
                <div className="tw-bg-[#1F2937] tw-w-full tw-max-w-[480px] tw-my-2 tw-p-2 tw-rounded"><FontAwesomeIcon icon={faPhone}/> <span className="tw-pl-4">+91 996-726-8418</span></div>
                <div className="tw-bg-[#1F2937] tw-w-full tw-max-w-[480px] tw-my-4 tw-p-2 tw-rounded"><FontAwesomeIcon icon={faEnvelope}/> <span className="tw-pl-4">sankalppolk123@gmail.com</span></div>
                <div className="tw-flex tw-gap-2 tw-mt-3">
                  <a href="https://linkedin.com/in/SankalpSTG" target="_blank" rel="noreferrer"><img src={LinkedinIcon} alt="Linkedin" className="tw-w-[36px] tw-h-[36px] tw-rounded-lg tw-inline-block"/></a>
                  <a href="https://github.com/SankalpSTG" target="_blank" rel="noreferrer"><img src={GithubIcon} alt="Github" className="tw-w-[36px] tw-h-[36px] tw-rounded-lg tw-inline-block"/></a>
                </div>
              </div>
            </div>
            <div className="tw-flex tw-items-center tw-justify-center tw-p-5 tw-h-[100vh]"><img src={SankalpPol1Image} className="tw-rounded-full tw-w-full tw-max-w-[360px] tw-relative" style={{boxShadow: "0px 0px 3px #000000"}} alt="Sankalp Pol"/></div>
          </div>
        </div>
        <div className="tw-min-h-[100vh] tw-bg-[#171717] tw-p-5 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white">
            <div className="tw-text-[24px]"><b>ABOUT ME</b></div>
            <div className="tw-text-[20px] tw-w-full tw-max-w-[576px]">Software Developer with about 2 years of experience in MERN Stack, Golang and Android Development(Kotlin).</div>
          </div>
        </div>
        <div className="tw-hidden tw-min-h-[100vh] tw-bg-[#18181B]">
          <div>Education</div>
          <div>
            <div>Bachelors in Computer Science, MIT Aurangabad</div>
            <div>Worked on weirdest projects across disciplines, from creating robots to creating software interfaces for people. Filed 2 patents, one of which was a Robotic Fish for underwater surveillance. SIH Finalist</div>
          </div>
        </div>
        <div className="tw-hidden">
          <div>Skills</div>
          <div>
            <div>GoLang, MERN, Next JS, Postgres, MongoDB, AWS / GCP essentials (DB and Deployment)</div>
          </div>
        </div>
        <div className="tw-hidden">
          <div>Experience</div>
          <div>
            <div>
              <div>
                <div>Software Developer</div>
                <div>Zamp</div>
              </div>
              <div>
                <div>July 22 - Present</div>
                <div>Gurgaon, HR</div>
              </div>
            </div>
            <div>
              <ul>
                <li>Built global payments solutions (fiat and crypto). Worked on Golang, React, Next JS, Typescript</li>
                <li>Worked close to Amit Jain, Founder @Zamp, Ex-Managing Director, Sequoia.</li>
                <li>Took ownership of Investment Catalog end-to-end. Converted MVC into modular architectue. Lead front end developers to adopt a responsive code practice and responsive design language.</li>
                <li>Worked on Global Accounts project. This involved many integrations at backend for transferring and accepting money across the globe. The basic definition of Global Accounts is ”Any money in, Any money out”.</li>
                <li>Worked on Sirius platform. Sirius or yield project was a platform for SMEs which gives them luxury to park or invest their funds instead of keeping it in bank accounts so that they can earn some yield from it. The SMEs can invest their money into US Treasury bonds and few other options.</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>Software Developer</div>
                <div>Crypso</div>
              </div>
              <div>
                <div>Sept 21 - June 22</div>
                <div>Bangalore, KA</div>
              </div>
            </div>
            <div>
              <ul>
                <li>Worked on building a social media application for Crypto enthusiasts.</li>
                <li>Payment Gateways, KYC services, XML and Jetpack Compose based hybrid layouts.</li>
                <li>Web development in Next JS, Worked on SEO, Apps Script integration for quick data gathering.</li>
                <li>Took ownership of the discover page (recommendation page), stories, user profile, user and KYB in Front end.</li>
                <li>Worked on <a href="https://crypso.club" target="_blank" rel="noreferrer">Crypso.club</a> landing page for the application.</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <div>
                <div>Software Developer (Intern + Full Time)</div>
                <div>Technodds LLP</div>
              </div>
              <div>
                <div>Dec 2020 - Sept 2021</div>
                <div>Aurangabad, MH</div>
              </div>
            </div>
            <div>
              <ul>
                <li>Worked on a GoQue, a Queue management app with Kotlin + MVVM on frontend and Node JS on backend.</li>
                <li>Third party integrations, payment gateways, and sockets for events.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
