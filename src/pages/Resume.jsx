import { Download } from "lucide-react";
import SectionLabel from "../components/SectionLabel.jsx";

export default function Resume() {
  return (
    <main className="page-content resume-page section-width">
      <SectionLabel>RESUME</SectionLabel>
      <h1 className="page-title">
        sure, let’s keep it <span>formal.</span>
      </h1>
      <p className="resume-lead">
        For recruiters, hiring managers, and anyone who prefers the short
        version.
      </p>
      <a
        className="download-button"
        href="/resume.pdf"
        download="Sumit-Kashyap-Resume.pdf"
      >
        Download <Download size={15} />
      </a>
      <div className="resume-preview">
        <img
          className="resume-image"
          src="/images/sumit-kashyap-resume.png"
          alt="Sumit Kashyap resume"
          loading="lazy"
        />
      </div>
    </main>
  );
}
