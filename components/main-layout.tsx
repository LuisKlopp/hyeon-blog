import NavigationHeader from "./navigation/navigation-header";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({
  children,
}: MainLayoutProps) => {
  return (
    <div className="w-full h-full">
      <NavigationHeader />
      {children}
    </div>
  );
};

export default MainLayout;
