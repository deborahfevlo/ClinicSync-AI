export default function SectionHeader({ tag, title, sub }) {
  return (
    <div className="text-center mb-14">

      {/* Eyebrow tag */}
      <span className="inline-flex items-center gap-1.5 bg-brand-light text-brand-dark rounded-full px-3 py-1 text-xs font-medium mb-4">
        <span className="w-1.5 h-1.5 rounded-full bg-brand inline-block" />
        {tag}
      </span>

      <h2 className="text-4xl font-semibold tracking-tight leading-tight mb-4">
        {title}
      </h2>

      {sub && (
        <p className="text-base text-gray-500 leading-relaxed max-w-xl mx-auto">
          {sub}
        </p>
      )}

    </div>
  );
}
