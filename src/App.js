import { faArrowUpRightFromSquare, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
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
            <div className="tw-text-[20px] tw-w-full tw-max-w-[576px]">
              Software Developer with about 2 years of experience in MERN Stack, Golang and Android Development (Kotlin). Familiar with GCP services, Git, CI/CD, Docker, NGINX etc. Jack of all trades. Can demonstrate the use of design patterns in code.<br/>
              Currently interested in Full Stack Development roles. 
            </div>
          </div>
        </div>
        <div className="tw-min-h-[100vh] tw-bg-[#18181B] tw-text-white tw-text-center tw-py-10 tw-px-5">
          <div className="tw-text-[24px]"><b>EXPERIENCE</b></div>
          <div className="tw-text-[20px] tw-w-full tw-max-w-[840px] tw-mx-auto tw-my-20 tw-text-left">
            <div className="tw-flex tw-justify-between tw-my-5">
              <div>
                <div className="tw-text-base"><i>Software Developer</i></div>
                <div className="tw-text-[24px]"><b>Zamp</b></div>
              </div>
              <div>
                <div className="">July 22 - Present</div>
                <div className="">Gurgaon, HR</div>
              </div>
            </div>
            <div>
              <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                <li>Built global payments solutions (fiat and crypto). Worked on Golang, React, Next JS, Typescript</li>
                <li>Worked close to Amit Jain, Founder @Zamp, Ex-Managing Director, Sequoia.</li>
                <li>Took ownership of Investment Catalog end-to-end. Converted MVC into modular architectue. Lead front end developers to adopt a responsive code practice and responsive design language.</li>
                <li>Worked on Global Accounts project. This involved many integrations at backend for transferring and accepting money across the globe. The basic definition of Global Accounts is ”Any money in, Any money out”.</li>
                <li>Worked on Sirius platform. Sirius or yield project was a platform for SMEs which gives them luxury to park or invest their funds instead of keeping it in bank accounts so that they can earn some yield from it. The SMEs can invest their money into US Treasury bonds and few other options.</li>
              </ul>
            </div>
          </div>
          <div className="tw-text-[20px] tw-w-full tw-max-w-[840px] tw-mx-auto tw-my-20 tw-text-left">
            <div className="tw-flex tw-justify-between tw-my-5">
              <div>
                <div className="tw-text-base"><i>Software Developer</i></div>
                <div className="tw-text-[24px]"><b>Crypso</b></div>
              </div>
              <div>
                <div>Sept 21 - June 22</div>
                <div>Bangalore, KA</div>
              </div>
            </div>
            <div>
              <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                <li>Worked on building a social media application for Crypto enthusiasts.</li>
                <li>Payment Gateways, KYC services, XML and Jetpack Compose based hybrid layouts.</li>
                <li>Web development in Next JS, Worked on SEO, Apps Script integration for quick data gathering.</li>
                <li>Took ownership of the discover page (recommendation page), stories, user profile, user and KYB in Front end.</li>
                <li>Worked on <a href="https://crypso.club" target="_blank" rel="noreferrer">Crypso.club</a> landing page for the application.</li>
              </ul>
            </div>
          </div>
          <div className="tw-text-[20px] tw-w-full tw-max-w-[840px] tw-mx-auto tw-my-20 tw-text-left">
            <div className="tw-flex tw-justify-between tw-my-5">
              <div>
                <div className="tw-text-base"><i>Backend Development TA</i></div>
                <div className="tw-text-[24px]"><b>Relevel By Unacademy</b></div>
              </div>
              <div>
                <div>Dec 2021 - Dec 2022</div>
                <div>Remote, IN</div>
              </div>
            </div>
            <div>
              <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                <li>Worked as a part-time Mentor and Backend Development Teaching Assistant </li>
                <li>Taught learners of different backgrounds (students and working professionals) Node JS </li>
                <li>Took 1:1 Sessions with learners to ensure they understand concepts of Backend Development along with DSA </li>
              </ul>
            </div>
          </div>
          <div className="tw-text-[20px] tw-w-full tw-max-w-[840px] tw-mx-auto tw-my-20 tw-text-left">
            <div className="tw-flex tw-justify-between tw-my-5">
              <div>
                <div className="tw-text-base"><i>Software Developer (Intern + Full Time)</i></div>
                <div className="tw-text-[24px]"><b>Technodds LLP</b></div>
              </div>
              <div>
                <div>Dec 2020 - Sept 2021</div>
                <div>Aurangabad, MH</div>
              </div>
            </div>
            <div>
              <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                <li>Worked on a GoQue, a Queue management app with Kotlin + MVVM on frontend and Node JS on backend.</li>
                <li>Third party integrations, payment gateways, and sockets for events.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tw-min-h-[100vh] tw-bg-[#171717] tw-text-white tw-text-center tw-py-10 tw-px-5">
          <div className="tw-text-[24px]"><b>PROJECTS</b></div>
          <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-4 tw-max-w-[840px] tw-mx-auto tw-my-10">
            <div>
              <div className="tw-border-2 tw-border-[#1E293B] tw-rounded-lg tw-mx-auto tw-max-w-[480px] tw-w-full tw-p-4 tw-text-left tw-my-5">
                <div className="tw-text-lg">My Portfolio (This Website) <a href="https://github.com/SankalpSTG/My-Portfolio" rel="noreferrer" target="_blank" style={{textDecoration: "none"}}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></div>
                <div>
                  <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                    <li>Created using React JS</li>
                    <li>Employs Tailwind CSS for Inline Styling</li>
                    <li>Employs Font Awesome icons for inline icons</li>
                    <li>Deployed on Firebase hosting</li>
                    <li>The basic purpose of this project was just to revise simple deployment automation with Github Actions and GCP.</li>
                  </ul>
                </div>
              </div>
              <div className="tw-border-2 tw-border-[#1E293B] tw-rounded-lg tw-mx-auto tw-max-w-[480px] tw-w-full tw-p-4 tw-text-left tw-my-5">
                <div className="tw-text-lg">Global Accounts (Zamp)</div>
                <div>
                  <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                    <li>Global Accounts was a Global Banking Platform for Businesses.</li>
                    <li>It went with the tag line - <em>"Any Money In, Any Money Out"</em></li>
                    <li>Employs Golang at backend and Next JS at Front end</li>
                    <li>While using Next JS Specifically doesn't serve any purpose for this project, initially some features of Next JS such as Server Side Rendering were being used.</li>
                  </ul>
                </div>
              </div>
              <div className="tw-border-2 tw-border-[#1E293B] tw-rounded-lg tw-mx-auto tw-max-w-[480px] tw-w-full tw-p-4 tw-text-left tw-my-5">
                <div className="tw-text-lg">Crypso Landing Page (Crypso) <a href="https://crypso.club/" rel="noreferrer" target="_blank" style={{textDecoration: "none"}}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></div>
                <div>
                  <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                    <li>Created using React JS</li>
                    <li>Employs Bootstrap for Styling</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="tw-border-2 tw-border-[#1E293B] tw-rounded-lg tw-mx-auto tw-max-w-[480px] tw-w-full tw-p-4 tw-text-left tw-my-5">
                <div className="tw-text-lg">Sirius (Zamp) <a href="https://dashboard.zamp.finance/" rel="noreferrer" target="_blank" style={{textDecoration: "none"}}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></div>
                <div>
                  <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                    <li>Sirius was a B2B product similar to Global Accounts</li>
                    <li>It gave Companies the luxury to invest their assets into U.S. Bonds and Treasuries to get maximum yield</li>
                    <li>This product was relevant to the trend for U.S. investment options as during 2022-2023 the same were returning yield upto 5%.</li>
                    <li>The tech stack was Golang + Next JS.</li>
                  </ul>
                </div>
              </div>
              <div className="tw-border-2 tw-border-[#1E293B] tw-rounded-lg tw-mx-auto tw-max-w-[480px] tw-w-full tw-p-4 tw-text-left tw-my-5">
              <div className="tw-text-lg">Crypso (Crypso) <a href="https://play.google.com/store/apps/details?id=club.crypso.app" rel="noreferrer" target="_blank" style={{textDecoration: "none"}}><FontAwesomeIcon icon={faArrowUpRightFromSquare}/></a></div>
                <div>
                  <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                    <li>Crypso is an Android App, basically a Social Media for Crypto Enthusiasts</li>
                    <li>Employs Kotlin + MVVM Architecture</li>
                    <li>Developed using Jetpack Compose + XML based hybrid layouts.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-min-h-[100vh] tw-bg-[#171717] tw-p-5 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white">
            <div className="tw-text-[24px]"><b>EDUCATION</b></div>
            <div className="tw-max-w-[840px] tw-mx-auto tw-my-10 tw-text-left">
              <div className="tw-my-5">
                <div className="tw-text-lg"><b>MIT Aurangabad</b></div>
                <div className="tw-text-base"><em>Bachelors in Computer Science &amp; Engg.</em></div>
                <div>
                  <ul style={{listStyleType: "disc", listStylePosition: "inside"}}>
                    <li>Worked on weirdest projects across disciplines, from creating robots to creating software interfaces for people. </li>
                    <li>Filed 2 patents, one of which was a Robotic Fish for underwater surveillance. </li>
                    <li>Smart India Hackathon Finalist. </li>
                    <li>Learnt App and Web Development along with Embedded Systems</li>
                    <li>Worked on IOT Based projects</li>
                  </ul>
                </div>
              </div>
              <div className="tw-my-5">
                <div className="tw-text-lg"><b>N. G. Acharya &amp; D. K. Marathe College, Mumbai</b></div>
                <div className="tw-text-base"><em>Higher Secondary School (+12)</em></div>
              </div>
              <div className="tw-my-5">
                <div className="tw-text-lg"><b>C.K.T.V, Mumbai</b></div>
                <div className="tw-text-base"><em>SSC (+10)</em></div>
              </div>
            </div>
          </div>
        </div>
        <div className="tw-min-h-[100vh] tw-bg-[#18181B] tw-p-5 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white">
            <div className="tw-text-[20px] tw-w-full tw-max-w-[640px]">
              Whatever I have learned, I learned from my seniors, my teachers, and the best engineering managers that I ever had, basically through people. I love what I do and hence it never feels tiring even after clock ticking midnight. Definitely, there's a lot to learn and I haven't really got a chance to prove myself in past 2 years of corporate experience, but I know the people I have worked with will always appreciate my work even behind me, and since I follow my passion, I can confidently say that I am good at it.
            </div>
          </div>
        </div>
        <div className="tw-min-h-[100vh] tw-bg-[#171717] tw-p-5 tw-flex tw-items-center tw-justify-center">
          <div className="tw-text-center tw-text-white">
            <div className="tw-text-[20px] tw-w-full tw-max-w-[640px]">
              Thanks for scrolling till here...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
