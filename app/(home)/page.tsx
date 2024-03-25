import PostList from "@/components/posts/post-list";
import ProfileBanner from "@/components/profile/profile-banner";

const HomePage = () => {
  return (
    <div>
      <ProfileBanner />
      <h1 className="text-3xl font-bold text-blogThickRed mt-12">
        Recent Posts
      </h1>
      <PostList />
    </div>
  );
};

export default HomePage;
