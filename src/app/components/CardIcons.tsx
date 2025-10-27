import { FaRegHeart, FaArchive } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

function CardIcons() {
  return (
    <div className="flex items-center justify-start gap-5 text-xl md:justify-between">
      <FaRegHeart />
      <FaArchive />
      <FaRegTrashCan />
    </div>
  );
}

export default CardIcons;
