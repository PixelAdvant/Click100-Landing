const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center md:mb-14">
      <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;
