const SocialLinks = () => {
  const links = [
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
  ];

  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
      <div className="flex gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default SocialLinks;
