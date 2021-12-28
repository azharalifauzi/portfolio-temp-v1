import { IconFolder, IconGithub, IconLaunch } from "assets";
import clsx from "clsx";

interface CardProps extends Project {
  className?: string;
}

const Card: React.FC<CardProps> = ({
  className,
  name,
  description,
  builtWith,
  links,
}) => {
  return (
    <div
      className={clsx(
        className,
        "group cursor-pointer transform transition-all hover:-translate-y-1 aspect-square bg-grey-2"
      )}
    >
      <div className="flex flex-col justify-start items-strech px-6 py-4 h-full">
        <div className="flex items-center justify-between  w-full">
          <IconFolder />
          <div className="flex items-center">
            {links
              ?.sort((a, b) => {
                if (a.type < b.type) return -1;
                if (a.type > b.type) return 1;
                return 0;
              })
              ?.map(({ id, link, type }) => (
                <a
                  key={id}
                  className="mr-3 last:mr-0"
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {type === "github" ? (
                    <IconGithub className="ic-stroke-blue" />
                  ) : (
                    <IconLaunch className="ic-fill-blue" />
                  )}
                </a>
              ))}
          </div>
        </div>
        <h5 className="text-h5 font-semibold text-black mt-6 mb-3 group-hover:text-blue w-full">
          {name}
        </h5>
        <p className="text-black w-full">{description}</p>
        <div className="mt-auto grid gap-2.5 auto-cols-max w-full grid-flow-col">
          {builtWith?.map((tech) => (
            <span key={tech} className="text-body-sm text-grey-1">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
