import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { useMyTheme } from "hooks/common";
import NextLink from "next/link";

interface Props {
  children: React.ReactNode;
  href: string;
  isExternal?: boolean;
  prefetch?: boolean;
  isColored?: boolean;
  toNewWindow?: boolean;
  noUnderline?: boolean;
  chakraLinkProps?: LinkProps;
}

const MyLink: React.FC<Props> = ({
  children,
  href,
  isExternal,
  prefetch = false,
  isColored = true,
  toNewWindow,
  noUnderline,
  chakraLinkProps = {},
}) => {
  const { themeColorShade } = useMyTheme();

  if (isExternal) {
    return (
      <ChakraLink
        href={href}
        color={isColored ? themeColorShade : undefined}
        target={toNewWindow ? "_blank" : undefined}
        {...chakraLinkProps}
      >
        {children}
      </ChakraLink>
    );
  }
  return (
    <NextLink href={href} prefetch={prefetch ? undefined : false} passHref>
      <ChakraLink
        className={noUnderline ? "nounderline" : undefined}
        color={isColored ? themeColorShade : undefined}
        {...chakraLinkProps}
      >
        {children}
      </ChakraLink>
    </NextLink>
  );
};

export default MyLink;
