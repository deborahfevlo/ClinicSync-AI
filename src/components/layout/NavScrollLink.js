"use client";

export default function NavScrollLink({ href, label }) {
  const handleClick = (e) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="text-base text-gray-500 hover:text-brand hover:font-semibold  transition-colors cursor-pointer"
    >
      {label}
    </a>
  );
}
