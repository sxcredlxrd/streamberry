import { LoaderCircle } from "lucide-react";

function Loader() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <LoaderCircle className="animate-spin" size={45} />
    </div>
  );
}

export default Loader;
