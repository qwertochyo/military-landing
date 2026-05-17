interface Props {
  label: string
  href: string
}

export const NavItem = ({ label, href }: Props) => {
  return (
    <li>
      <a href={href} className="hover:text-secondary transition-colors duration-300">
        {label}
      </a>
    </li>
  );
}