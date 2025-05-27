import { Links } from "@/shared/constants";
import { IconLink } from "@/shared/ui";

function Sidebar() {
  return (
    <div className="flex flex-col h-full items-center justify-between">
      <div className="flex flex-col gap-[30px]">
        <p className="text-color-3 text-center font-bebas text-[50px] whitespace-nowrap">
          S
        </p>
        {Links.map(({ id, to, IconComponent }) => (
          <IconLink key={id} to={to} IconComponent={IconComponent} />
        ))}
      </div>
      <div>
        <p>Avatar</p>
      </div>
    </div>
  );
}

export default Sidebar;
