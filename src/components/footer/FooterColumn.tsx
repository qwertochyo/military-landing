interface Props {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export const FooterColumn = ({ title, links }: Props) => {
  return (
    <div className="text-sm">
      <h3 className="text-gray-400 mb-4 uppercase">{title}</h3>
      <ul>
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="hover:text-secondary cursor-pointer transition-transform duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
