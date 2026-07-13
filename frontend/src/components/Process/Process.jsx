import "./Process.css";
import {
  FaSearch,
  FaClipboardList,
  FaPalette,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const process = [
  {
    icon: <FaSearch />,
    title: "Discovery",
    desc: "We understand your business goals, requirements, and project vision before starting development.",
  },
  {
    icon: <FaClipboardList />,
    title: "Planning",
    desc: "We create project architecture, timelines, milestones, and technology roadmap.",
  },
  {
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Our designers build beautiful, user-friendly, and responsive interfaces.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    desc: "Experienced developers build secure, scalable, and high-performance software.",
  },
  {
    icon: <FaBug />,
    title: "Testing",
    desc: "Every feature is tested to ensure quality, security, and smooth performance.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment",
    desc: "We deploy your application on secure cloud infrastructure with best practices.",
  },
  {
    icon: <FaHeadset />,
    title: "Support & Maintenance",
    desc: "Continuous monitoring, updates, and technical support after project delivery.",
  },
];

function Process() {
  return (
    <section className="process" id="process">

      <div className="process-heading">

        <span>OUR PROCESS</span>

        <h2>Our Development Process</h2>

        <p>
          A proven workflow that helps us deliver secure,
          scalable, and high-quality software solutions.
        </p>

      </div>

      <div className="timeline">

        {process.map((step, index) => (

          <div className="timeline-card" key={index}>

            <div className="timeline-number">
              {(index + 1).toString().padStart(2, "0")}
            </div>

            <div className="timeline-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Process;