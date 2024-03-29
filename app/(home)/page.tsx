import { PostList } from "@/components/posts/post-list";
import ProfileBanner from "@/components/profile/profile-banner";

const HomePage = () => {
  return (
    <div>
      <ProfileBanner />
      <div className="lgx:mx-[100px] lg:mx-[10px]">
        <h1 className="mt-12 text-xl font-medium">
          Most Viewed
        </h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
