import { IconGithub, IconLaunch } from "assets";
import clsx from "clsx";
import { Badge, List } from "components";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import styles from "./featured-project.module.css";

interface FeaturedProjectProps extends Project {
  className?: string;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  className,
  achievements,
  builtWith,
  description,
  images = [],
  name,
  year,
  isOnGoing,
  links,
  role,
}) => {
  const [showAllImages, setShowAllImages] = useState<boolean>(false);
  const primaryImage = images.find(({ isPrimary }) => isPrimary) || images[0];
  const [photoIndex, setPhotoIndex] = useState<number>(
    images.indexOf(primaryImage)
  );

  return (
    <>
      {showAllImages && (
        <Lightbox
          enableZoom
          mainSrc={"/" + images[photoIndex]?.url}
          nextSrc={"/" + images[(photoIndex + 1) % images.length]?.url}
          prevSrc={
            "/" + images[(photoIndex + images.length - 1) % images.length]?.url
          }
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onCloseRequest={() => setShowAllImages(false)}
        />
      )}
      <div
        style={{ gridTemplateColumns: "minmax(auto, 485px) 1fr" }}
        className={clsx("lg:grid gap-x-20", className)}
      >
        <div className="mb-5 lg:mb-0">
          <button
            onClick={() => setShowAllImages(true)}
            className="max-w-[485px] group cursor-pointer relative overflow-hidden ring-blue focus-visible:ring focus:outline-none block w-full"
          >
            <Image
              src={
                primaryImage ? `/${primaryImage?.url}` : "/assets/img-dummy.png"
              }
              layout="responsive"
              width={16}
              height={9}
              alt="image"
            />
            <div className="bg-black bg-opacity-50 absolute top-0 left-0 w-full h-full transform transition-all duration-500 translate-y-full group-hover:translate-y-0 flex items-center justify-center text-h5 text-white">
              See All Images
            </div>
          </button>
          <button
            onClick={() => setShowAllImages(true)}
            className={clsx(
              "underline focus:outline-none mt-2 text-grey-1",
              styles.hover
            )}
          >
            See All Images
          </button>
        </div>
        <div>
          <div className="flex md:flex-row flex-col md:items-center">
            <div className="flex items-center mb-2 md:mb-0">
              <h4 className="md:text-h4 text-h5 text-black font-semibold mr-3">
                {name}
              </h4>
              <Badge>{isOnGoing ? "Ongoing" : year}</Badge>
            </div>
            <div className="flex items-center mb-2 md:mb-0 ml-0 md:ml-2">
              {links
                ?.sort((a, b) => {
                  if (a.type < b.type) return -1;
                  if (a.type > b.type) return 1;
                  return 0;
                })
                ?.map(({ type, link, id }) => {
                  return (
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
                  );
                })}
            </div>
          </div>
          <h6 className="text-body text-grey-1 mb-4">{role}</h6>
          <div className="flex items-center mb-4">
            {builtWith?.map((tech) => (
              <Badge key={tech} variant="outline" className="mr-2.5 last:mr-0">
                {tech}
              </Badge>
            ))}
          </div>
          <p className="text-black">{description}</p>
          <div className="grid mt-3 gap-2">
            {achievements?.map((achievement) => (
              <List key={achievement} size="sm">
                {achievement}
              </List>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProject;
