import { PostList } from "@/components/posts/post-list";
import ProfileBanner from "@/components/profile/profile-banner";

const HomePage = () => {
  return (
    <div>
      <ProfileBanner />
      <div className="lg:mx-[10px] lgx:mx-[100px]">
        <h1 className="mb-10 mt-[60px] pl-[calc((100%-400px)/2)] text-xl font-medium md:pl-[calc((100%-820px)/2)] lg:pl-[calc((100%-1240px)/2)]">
          Most Viewed
        </h1>
        <PostList />
      </div>
    </div>
  );
};

export default HomePage;
