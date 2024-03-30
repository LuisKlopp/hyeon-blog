import { PostList } from "@/components/posts/post-list";
import ProfileBanner from "@/components/profile/profile-banner";

const HomePage = () => {
  return (
    <div>
      <ProfileBanner />
      <div className="lg:mx-[10px] lgx:mx-[100px]">
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
