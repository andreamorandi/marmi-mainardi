import Button from 'components/atoms/Button'
import Select from 'components/atoms/Form/Select'
import LineDivider from 'components/atoms/LineDivider'
import PageSentence from 'components/molecules/PageSentence'
import ProjectCard from 'components/molecules/Card/ProjectCard'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'
import randomString from 'utils/randomString'

const Project = () => {
  interface Project {
    title: string
    description: string
    image: string
    name: string
  }
  const projectList: Project[] = [
    {
      title: 'Arte Sacra',
      description: '',
      image: '/slider5.png',
      name: 'holy'
    },
    {
      title: 'Arte Funeraria',
      description: '',
      image: '/slider4.png',
      name: 'funerary'
    },
    {
      title: 'Arredo',
      description: '',
      image: '/slider2.png',
      name: 'furniture'
    },
    {
      title: 'Decorazioni',
      description: '',
      image: '/slider3.png',
      name: 'decorations'
    },
  ]
  return (
    <PageTemplate title="Progetti">
      <section className="grid place-items-center my-20" data-aos="zoom-in-up">
        <aside
          className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-8/12"
          data-aos="fade-right"
        >
          <div className="text-center">
            <PageSentence
              badge=""
              title="Ogni pezzo di marmo racconta una storia unica.<br>Marmo e creatività: La nostra Gallery"
            />
          </div>
        </aside>
        {/* <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
          <Select
            options={[
              { label: 'App', value: 'app' },
              { label: 'UI Design', value: 'ui-design' },
              { label: 'Other', value: 'other' },
            ]}
          />
        </aside> */}
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16 my-20">
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  projectName={project.name}
                />
              </div>
            )
          })}
        </div>
        {/* <Button value="Load More" color="white" style="light" /> */}
      </section>
    </PageTemplate>
  )
}

export default Project
