import { Outlet } from "react-router";

function Feed() {
  return (
    <div className="w-full h-full border-1 overflow-auto border-stroke-1 bg-color-2 rounded-[10px]">
      <Outlet />
    </div>
  );
}

export default Feed;
