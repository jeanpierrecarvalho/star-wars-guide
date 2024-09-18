import Image from "next/image";
import Link from "next/link";

interface IProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const MenuItem: React.FC<IProps> = ({ href, imageSrc, imageAlt, title }) => {
  return (
    <div
      className="mb-12 hover:scale-105 opacity-90 hover:opacity-100 py-4"
      role="menuitem"
    >
      <Link href={href} passHref aria-label={`Link to ${title}`}>
        <div className="cursor-pointer">
          <div className="flex flex-row justify-center">
            <Image
              src={imageSrc}
              width={300}
              height={300}
              alt={imageAlt}
              priority={true}
            />
          </div>
          <div className="flex flex-row justify-center mt-4">
            <span
              className="font-starjout text-4xl text-center text-yellow-500"
              aria-label={`Title: ${title}`}
            >
              {title}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
