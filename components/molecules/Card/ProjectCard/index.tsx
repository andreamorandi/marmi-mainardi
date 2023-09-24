import Button from 'components/atoms/Button'
import ButtonLink from 'components/atoms/Button/ButtonLink'
import LazyCard, { LazyCardProps } from 'components/atoms/LazyCard'
import Text from 'components/atoms/Text'
import TestimonialCard from '../TestimonialCard'
interface ProjectCardProps extends LazyCardProps {
  title: string
  description: string
  image: string
  projectName: string
}
const ProjectCard = ({
  title,
  description,
  bottomSquareSize = 'small',
  height = 450,
  image,
  projectName
}: ProjectCardProps) => {
  return (
    <div className="w-full">
      {/* <LazyCard bottomSquareSize={bottomSquareSize} height={height} /> */}

      <TestimonialCard
            avatarSrc={image}
            name=""
            company=""
            testimony={``}
            imageWidth={300}
            imageHeight={300}
          />

      <div className="flex flex-col place-items-center text-center mt-10">
        <div className="mb-2.5">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="mb-6">
          <Text value={description} textStyle="ProjectDescription" />
        </div>
        <div className="">
          <ButtonLink
            value="Guarda"
            color="white"
            radius="pill"
            style="outline"
            href={`/project/${projectName}`}
          />
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
