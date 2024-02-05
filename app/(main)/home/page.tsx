import Post from "@/app/ui/Post";
import LeftSideBar from "@/app/ui/main/home/LeftSideBar";
import homeStyles from "@/styles/main/home/home.module.scss";

export default function Home() {
  return (
    <div className={homeStyles.container}>
      <LeftSideBar />
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {[1, 2, 3, 4, 5, 6, 7].map((item) => {
          return <Post key={item} />;
        })}
      </div>
    </div>
  );
}
