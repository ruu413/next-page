import Link from "next/link"

const CustomLink = ({
  children,
  href,
  ...props
}: {
  children: string
  href: string
}): JSX.Element =>
  href.startsWith("/") || href === "" ? (
    <Link {...props} href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )

export default CustomLink
