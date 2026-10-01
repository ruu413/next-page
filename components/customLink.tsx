import Link from "next/link"
import type { ReactNode } from "react"

const CustomLink = ({
  children,
  href,
  ...props
}: {
  children: ReactNode
  href: string
}): JSX.Element =>
  href.startsWith("/images/") ? (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ) : href.startsWith("/") || href === "" ? (
    <Link {...props} href={href}>
      <a>{children}</a>
    </Link>
  ) : (
    <a {...props} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )

export default CustomLink
