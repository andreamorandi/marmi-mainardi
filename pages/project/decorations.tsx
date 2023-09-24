import LazyCard from 'components/atoms/LazyCard'
import LineDivider from 'components/atoms/LineDivider'
import Text from 'components/atoms/Text'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'
import Gallery from 'react-photo-gallery'
import { useRouter } from 'next/router';

// const photos = [
//   {
//     src: '/images/arredo/arredo1.png',
//     width: 4,
//     height: 1.75
//   },
//   {
//     src: '/images/arredo/arredo2.png',
//     width: 2.96,
//     height: 2.9
//   },
//   {
//     src: '/images/arredo/arredo3.png',
//     width: 2.73,
//     height: 2.84
//   },
//   {
//     src: '/images/arredo/arredo4.png',
//     width: 4,
//     height: 3
//   },
//   {
//     src: '/images/arredo/arredo5.png',
//     width: 2.62,
//     height: 3.3
//   },
// ];

// const photos = [
//   {
//     src: '/images/sacra/sacra1.png',
//     width: 2.93,
//     height: 2.73
//   },
//   {
//     src: '/images/sacra/sacra2.png',
//     width: 1,
//     height: 1.3
//   },
//   {
//     src: '/images/sacra/sacra3.png',
//     width: 3,
//     height: 4
//   },
//   {
//     src: '/images/sacra/sacra4.png',
//     width: 1.28,
//     height: 1.92
//   },
//   {
//     src: '/images/sacra/sacra5.png',
//     width: 2.28,
//     height: 3.28
//   },
//   {
//     src: '/images/sacra/sacra6.png',
//     width: 1.57,
//     height: 2.76
//   },
//   {
//     src: '/images/sacra/sacra7.png',
//     width: 2.63,
//     height: 2.1
//   },
//   {
//     src: '/images/sacra/sacra8.png',
//     width: 2.1,
//     height: 2.47
//   },
//   {
//     src: '/images/sacra/sacra9.png',
//     width: 3,
//     height: 3.02
//   },
//   {
//     src: '/images/sacra/sacra10.png',
//     width: 1.12,
//     height: 1.49
//   },
//   {
//     src: '/images/sacra/sacra11.png',
//     width: 2.9,
//     height: 3.67
//   },
//   {
//     src: '/images/sacra/sacra12.png',
//     width: 2.2,
//     height: 2.38
//   },
//   {
//     src: '/images/sacra/sacra13.png',
//     width: 2.1,
//     height: 3.08
//   },
//   {
//     src: '/images/sacra/sacra14.png',
//     width: 1.3,
//     height: 1.41
//   },
//   {
//     src: '/images/sacra/sacra15.png',
//     width: 1.26,
//     height: 1.81
//   },
//   {
//     src: '/images/sacra/sacra16.png',
//     width: 0.52,
//     height: 0.99
//   },
//   {
//     src: '/images/sacra/sacra17.png',
//     width: 0.76,
//     height: 1.02
//   },
//   {
//     src: '/images/sacra/sacra18.png',
//     width: 2.31,
//     height: 2.34
//   },
//   {
//     src: '/images/sacra/sacra19.png',
//     width: 3.02,
//     height: 4.03
//   },
//   {
//     src: '/images/sacra/sacra20.png',
//     width: 2.76,
//     height: 4.02
//   },
//   {
//     src: '/images/sacra/sacra21.png',
//     width: 3.02,
//     height: 4.03
//   },
// ];



// const photos = [
//   {
//     src: '/images/funeraria/funeraria1.png',
//     width: 0.82,
//     height: 0.66
//   },
//   {
//     src: '/images/funeraria/funeraria2.png',
//     width: 1.85,
//     height: 1.26
//   },
//   {
//     src: '/images/funeraria/funeraria3.png',
//     width: 1.39,
//     height: 1.19
//   },
//   {
//     src: '/images/funeraria/funeraria4.png',
//     width: 1.96,
//     height: 1.82
//   },
//   {
//     src: '/images/funeraria/funeraria5.png',
//     width: 3.5,
//     height: 2.54
//   },
//   {
//     src: '/images/funeraria/funeraria6.png',
//     width: 1.81,
//     height: 1.54
//   },
//   {
//     src: '/images/funeraria/funeraria7.png',
//     width: 1.73,
//     height: 3.11
//   },
//   {
//     src: '/images/funeraria/funeraria8.png',
//     width: 2.52,
//     height: 3.57
//   },
//   {
//     src: '/images/funeraria/funeraria9.png',
//     width: 3.29,
//     height: 2.75
//   },
//   {
//     src: '/images/funeraria/funeraria10.png',
//     width: 3.2,
//     height: 2.31
//   },
//   {
//     src: '/images/funeraria/funeraria11.png',
//     width: 3.5,
//     height: 2.75
//   },
//   {
//     src: '/images/funeraria/funeraria12.png',
//     width: 3.16,
//     height: 2.93
//   },
//   {
//     src: '/images/funeraria/funeraria13.png',
//     width: 3.34,
//     height: 2.86
//   },
//   {
//     src: '/images/funeraria/funeraria14.png',
//     width: 2.73,
//     height: 3.34
//   },
//   {
//     src: '/images/funeraria/funeraria15.png',
//     width: 3.22,
//     height: 2.76
//   },
//   {
//     src: '/images/funeraria/funeraria16.png',
//     width: 2.19,
//     height: 2.66
//   },
//   {
//     src: '/images/funeraria/funeraria17.png',
//     width: 3.28,
//     height: 2.63
//   },
//   {
//     src: '/images/funeraria/funeraria18.png',
//     width: 3.61,
//     height: 2.76
//   },
//   {
//     src: '/images/funeraria/funeraria19.png',
//     width: 2.84,
//     height: 3.65
//   },
//   {
//     src: '/images/funeraria/funeraria20.png',
//     width: 2.67,
//     height: 2.83
//   },
// ];

const photos = [
  {
    src: '/images/decorazioni/decorazioni1.png',
    width: 2.54,
    height: 4.02
  },
  {
    src: '/images/decorazioni/decorazioni2.png',
    width: 1.93,
    height: 3.52
  },
  {
    src: '/images/decorazioni/decorazioni3.png',
    width: 2.56,
    height: 3.76
  },
  {
    src: '/images/decorazioni/decorazioni4.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni5.png',
    width: 2.02,
    height: 2.90
  },
  {
    src: '/images/decorazioni/decorazioni6.png',
    width: 0.96,
    height: 1.43
  },
  {
    src: '/images/decorazioni/decorazioni7.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni8.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni9.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni10.png',
    width: 1.7,
    height: 3.79
  },
  {
    src: '/images/decorazioni/decorazioni11.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni12.png',
    width: 1.32,
    height: 2.64
  },
  {
    src: '/images/decorazioni/decorazioni13.png',
    width: 1.73,
    height: 2.31
  },
  {
    src: '/images/decorazioni/decorazioni14.png',
    width: 1.42,
    height: 2.21
  },
  {
    src: '/images/decorazioni/decorazioni15.png',
    width: 1.28,
    height: 2.44
  },
  {
    src: '/images/decorazioni/decorazioni16.png',
    width: 2.51,
    height: 3.83
  },
  {
    src: '/images/decorazioni/decorazioni17.png',
    width: 1.17,
    height: 1.82
  },
  {
    src: '/images/decorazioni/decorazioni18.png',
    width: 1.28,
    height: 2.64
  },
  {
    src: '/images/decorazioni/decorazioni19.png',
    width: 1.54,
    height: 3.69
  },
  {
    src: '/images/decorazioni/decorazioni20.png',
    width: 2.64,
    height: 2.69
  },
  {
    src: '/images/decorazioni/decorazioni21.png',
    width: 1.66,
    height: 2.86
  },
  {
    src: '/images/decorazioni/decorazioni22.png',
    width: 2.2,
    height: 3.65
  },
  {
    src: '/images/decorazioni/decorazioni23.png',
    width: 1.33,
    height: 2.63
  },
  {
    src: '/images/decorazioni/decorazioni24.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni25.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni26.png',
    width: 1.27,
    height: 2.67
  },
  {
    src: '/images/decorazioni/decorazioni27.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni28.png',
    width: 1.26,
    height: 2.41
  },
  {
    src: '/images/decorazioni/decorazioni29.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni30.png',
    width: 3.02,
    height: 4.03
  },
  {
    src: '/images/decorazioni/decorazioni31.png',
    width: 3.02,
    height: 4.03
  },
];


interface Props {
  avatarSrc: string
  name: string
  company: string
  testimony: string
  imageWidth: number
  imageHeight: number

}
// const TestimonialCard = ({ avatarSrc, company, name, testimony, imageWidth, imageHeight }: Props) => {

const ProjectDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  console.log(id)
  interface Project {
    title: string
    description: string
  }
  const projectList: Project[] = [
    {
      title: 'Simple Mobile Blog App',
      description: 'A blog app on mobile platform',
    },
    {
      title: 'Realtime Chat App UI Design',
      description: 'A UI design for realtime chat app',
    },
  ]
  return (
    
    <PageTemplate title='Decorazioni'>
      <section className="grid place-items-center my-16" data-aos="zoom-in-up">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12">
          <PageSentence
            badge=""
            title="Decorazioni"
          />
        </div>
      </section>
      <LineDivider />
      <section className="grid grid-cols-1 gap-8 my-16">
        <aside data-aos="fade-up-right">
        <Gallery photos={photos} />
          {/* <LazyCard bottomSquareSize="big" height={400} /> */}
        </aside>
        {/* <aside className="grid gap-12 place-content-center" data-aos="fade-up-left">
          <Text
            textStyle="SectionParagraph"
            value="Something has always existed. According to physics, there can never be true physical nothingness—though there can be times when existence resembles nothing."
          />
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Text value="CATEGORY" textStyle="ProjectDetailLabel" />
              <Text value="Development" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="CLIENT" textStyle="ProjectDetailLabel" />
              <Text value="Acme, Inc" textStyle="ProjectDetailValue" />
            </div>
            <div className="grid gap-2">
              <Text value="TECHNOLOGY" textStyle="ProjectDetailLabel" />
              <Text
                value="JavaScript, HTML, CSS"
                textStyle="ProjectDetailValue"
              />
            </div>
          </div>
        </aside> */}
      </section>
      <LineDivider />
      {/* <section className="grid gap-16 place-items-center">
        <div className="text-center sm:w-10/12 md:w-8/12 lg:w-6/12" data-aos="zoom-in-up">
          <PageSentence
            badge="PROJECT DETAIL"
            title="The Desktop App Landing Page"
          />
        </div>
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div
                className="basis-full lg:basis-1/2"
                key={randomString(64)}
                data-aos="zoom-in-up"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                />
              </div>
            )
          })}
        </div>
      </section> */}
    </PageTemplate>
  )
}

export default ProjectDetail
