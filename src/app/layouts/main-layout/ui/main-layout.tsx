import { Feed, Sidebar } from "@/widgets";

function MainLayout() {
  return (
    <div className="w-full h-[100vh] flex gap-[10px] px-[10px] py-[10px]">
      <Sidebar />
      <Feed />
    </div>
  );
}

export default MainLayout;
