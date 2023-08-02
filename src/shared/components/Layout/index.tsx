import { FC, PropsWithChildren } from 'react';
import {
    LayoutContainer,
} from './Layout.styled';
import {Navbar} from "./Navbar";
import {FrontPage} from "./FrontPage";

export const Layout: FC<PropsWithChildren> = () => {
  return (
    <LayoutContainer>
        <Navbar />
        <FrontPage />
    </LayoutContainer>
  );
};
