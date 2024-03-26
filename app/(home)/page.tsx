import PostList from "@/components/posts/post-list";
import ProfileBanner from "@/components/profile/profile-banner";

const HomePage = () => {
  return (
    <div>
      <ProfileBanner />
      <h1 className="mt-12 text-3xl font-bold text-blogThickRed">
        Most Viewed
      </h1>
      <PostList />
    </div>
  );
};

export default HomePage;
