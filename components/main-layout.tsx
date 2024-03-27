import { NavigationHeader } from "@/components/navigation/navigation-header";
import { ScrollToTop } from "./scroll-to-top";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className="h-full w-full">
      <NavigationHeader />
      {children}
      <ScrollToTop />
    </div>
  );
};

export default MainLayout;
