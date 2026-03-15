function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10 flex flex-col gap-3 border-b border-white/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
      <div className="max-w-2xl">
        <h2 className="font-serif text-4xl leading-none text-white sm:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-3 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export default SectionTitle;
