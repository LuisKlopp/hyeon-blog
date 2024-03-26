import PostList from "@/components/posts/post-list";
import ProfileBanner from "@/components/profile/profile-banner";

const HomePage = () => {
  return (
    <div>
      <ProfileBanner />
      <div className="mx-auto w-[1240px]">
        <h1 className="mt-12 text-xl font-medium text-blogThickRed">
          Most Viewed
        </h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
