import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

import styled from "../../styled-components";

const BreadcrumbContainer = styled.div`
  font-size: 1.25rem;
  margin: 2rem 0;
`;

const HomeIcon = styled.i`
  color: ${props => props.theme.colors.accent};
`;

const SeparatorIcon = styled.i.attrs({
  className: "fas fa-chevron-right"
})`
  color: ${props => props.theme.colors.textMuted};
  font-size: 1rem;
  margin: 0.125rem 1em;
`;

const Link = styled(RouterLink)`
  &,
  &:visited {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
  }
`;

type Breadcrumb = {
  /** A standard breadcrumb is not active. */
  active?: undefined | false;
  /** The node to render as the breadcrumb link. */
  children: React.ReactNode;
  /** The path that the breadcrumb links to. */
  path: string;
};

type BreadcrumbActive = {
  /** An active breadcrumb, by definition, is active. */
  active: true;
  /**
   * The node to render describing the current breadcrumb, typically a page
   * title.
   */
  children: React.ReactNode;
};

/**
 * Either an active or inactive breadcrumb can be passed to the component.
 */
type BreadcrumbProps = Breadcrumb | BreadcrumbActive;

/**
 * An individual breadcrumb.
 *
 * If the breadcrumb is not active, it is rendered as a link to the page it
 * refers to. Otherwise it is displayed as plain text.
 *
 * @param props - The properties to render the breadcrumb with.
 * @constructor
 */
const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = props => {
  if (props.active) {
    return <span>{props.children}</span>;
  }

  return <Link to={props.path}>{props.children}</Link>;
};

interface IBreadcrumbsProps {
  /** The breadcrumbs to render. */
  children?:
    | React.ReactElement<BreadcrumbProps>
    | React.ReactElement<BreadcrumbProps>[];
}

/**
 * Breadcrumbs to display where the user is in terms of the hierarchy of the
 * site.
 *
 * @constructor
 */
const Breadcrumbs: React.FunctionComponent<IBreadcrumbsProps> = ({
  children
}) => {
  console.log(children);
  const childElements = [];

  if (Array.isArray(children)) {
    children.forEach((child, index) => {
      childElements.push(
        <React.Fragment
          // As described in the following issue, Typescript doesn't allow us to
          // specify the type of JSX we want to receive. This also means that we
          // can't restrict the component to only allowing <Breadcrumb />
          // components as children.
          //
          // https://stackoverflow.com/questions/52732021/react-component-children-typecheck-with-typescript
          // https://github.com/Microsoft/TypeScript/issues/14729
          key={JSON.stringify(
            (child as React.ReactElement<BreadcrumbProps>).props.children
          )}
        >
          {child}
          {index !== children.length - 1 && <SeparatorIcon />}
        </React.Fragment>
      );
    });
  } else {
    childElements.push(children);
  }

  return (
    <BreadcrumbContainer>
      <Link to="/">
        <HomeIcon className="fa fa-home" />
      </Link>
      <SeparatorIcon />
      {childElements}
    </BreadcrumbContainer>
  );
};

export { Breadcrumb, Breadcrumbs };
