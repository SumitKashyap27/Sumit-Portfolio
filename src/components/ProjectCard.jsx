import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  category,
  tags,
  description,
  image,
  mobileImage,
  imageCrop,
  type,
  tone = "blue",
  compact = false,
  featured = false,
  staticMotion = false,
  action,
  mobileAction,
  href = "/contact",
}) {
  const [imageUnavailable, setImageUnavailable] = useState(false);
  const externalLink = /^https?:\/\//.test(href);
  const projectType = type?.toLowerCase();
  const [sourceWidth, sourceHeight, cropX, cropY, cropWidth, cropHeight] = imageCrop || [];
  const cropStyle = imageCrop
    ? {
        position: "absolute",
        left: `${(-cropX / cropWidth) * 100}%`,
        top: `${(-cropY / cropHeight) * 100}%`,
        width: `${(sourceWidth / cropWidth) * 100}%`,
        height: `${(sourceHeight / cropHeight) * 100}%`,
        maxWidth: "none",
      }
    : undefined;

  return (
    <article className={`project-card ${tone}${projectType ? ` ${projectType}-project` : ""}${compact ? " compact" : ""}${featured ? " home-featured" : ""}${staticMotion ? " home-static-motion" : ""}`}>
      <a
        className="project-image-wrap"
        href={href}
        target={externalLink ? "_blank" : undefined}
        rel={externalLink ? "noreferrer" : undefined}
        aria-label={`${externalLink ? "Open" : "Ask about"} ${title}`}
      >
        {imageUnavailable ? (
          <span className="project-image-fallback">Project preview coming soon</span>
        ) : (
          <picture className={`project-artwork${imageCrop ? " project-artwork-crop" : ""}`}>
            {mobileImage && (
              <source media="(max-width: 600px)" srcSet={mobileImage} />
            )}
            <img
              src={image}
              alt={`${title} project preview`}
              loading="lazy"
              style={cropStyle}
              onError={() => setImageUnavailable(true)}
            />
          </picture>
        )}
        <span className="project-open">
          <ArrowUpRight size={17} />
        </span>
      </a>
      <div className="project-copy">
        <h3>
          {title}
          <span className="red-dot">.</span>
        </h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div className="project-bottom">
          <span className="project-category">{category}</span>
          <a
            className="text-link"
            href={href}
            target={externalLink ? "_blank" : undefined}
            rel={externalLink ? "noreferrer" : undefined}
          >
            <span className="desktop-action">{action || "View project"}</span>
            <span className="mobile-action">{mobileAction || action || "View project"}</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </article>
  );
}
