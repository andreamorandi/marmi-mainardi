import LineDivider from 'components/atoms/LineDivider'
import TeamCard from 'components/molecules/Card/TeamCard'
import PageSentence from 'components/molecules/PageSentence'
import SectionSentence from 'components/molecules/SectionSentence'
import LogoList from 'components/organisms/LogoList'
import StatisticList from 'components/organisms/StatisticList'
import PageTemplate from 'components/templates/PageTemplate'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <PageTemplate title="Chi Siamo">
      <section className="grid grid-cols-1 gap-8 place-items-center text-justify">
        {/* <aside className="w-full" data-aos="fade-down-right"> */}
          {/* <div className="w-full h-[480px] relative">
            <Image
              src={'/images/about-illustration.webp'}
              layout="fill"
              objectFit="contain"
              quality={80}
              alt="Programmers when coding in their laptop"
              
            />
          </div> */}
        {/* </aside>
        <aside
          className="text-center sm:w-10/12 md:w-8/12 lg:w-full lg:text-left"
          data-aos="fade-up-left"
        > */}
          <PageSentence
            badge=""
            title="Chi Siamo"
            description={`Mainardi è un'azienda specializzata nella <b>lavorazione di marmi e graniti</b>, 
            con una lunga tradizione familiare nel settore.<br> Tutto ebbe inizio quando il nonno Alfredo Mainardi fondò 
            l'azienda nel 1955 a Milano espandendosi successivamente anche nel territorio Cremonese, a Casalbuttano e 
            Soresina. Nel 1985, suo figlio Gianluca Mainardi prese il testimone e trasferì l'attività a Corte dei Cortesi 
            con Cignone. Nel 2016, è stato il turno del figlio Matteo Mainardi, che stabilendo la sua sede a Bettenesco, 
            mantiene viva la tradizione di famiglia.<br><br>
            Grazie a questa successione di tre generazioni, l'azienda ha accumulato una vasta esperienza nella progettazione 
            e realizzazione di <b>monumenti</b> civili e funerari, <b>bassorilievi</b> che raffigurano la scultura sacra e l'arte funeraria, 
            nonché <b>decori</b> ed <b>elementi d'arredo</b> adatti a diversi stili e ambienti.<br><br>
            Ogni lavoro che realizziamo è completamente <b>personalizzato</b> in base alle specifiche richieste dei clienti e alle 
            loro esigenze. Molte delle nostre opere nascono dalla fedele riproduzione di disegni, fotografie o bozzetti forniti dai 
            clienti, il che ci consente di creare un'opera <b>unica e irripetibile</b> per ciascun individuo. Inoltre, offriamo sempre la nostra 
            <b>consulenza professionale</b> per aiutare i clienti a prendere le migliori decisioni per realizzare il progetto dei loro sogni.`}
          />
        {/* </aside> */}
      </section>
      {/* <LineDivider /> */}
      {/* <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="STATISTICS"
            title="In 3 years we reached 8 countries, 193 clients and earning $100k USD"
          />
        </div>
        <div className="w-full grid gap-14">
          <div data-aos="fade-right">
            <StatisticList />
          </div>
          <LogoList />
        </div>
      </section>
      <section className="grid place-items-center gap-16">
        <div
          className="sm:w-10/12 md:w-8/12 lg:w-6/12 2xl:w-5/12 text-center"
          data-aos="zoom-in-up"
        >
          <SectionSentence
            badge="OUR TEAMS"
            title="Meet the team! All creative people are here"
          />
        </div>
        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-1.webp"
              job="Founder"
              name="Albert Flores"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-2.webp"
              job="Chief Technology Officer"
              name="Devon Lane"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-3.webp"
              job="UI Designer"
              name="Darrell Steward"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-4.webp"
              job="Software Engineer"
              name="Marvin McKinney"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-5.webp"
              job="System Analyst"
              name="Floyd Miles"
            />
          </div>
          <div data-aos="fade-up">
            <TeamCard
              imageSrc="/images/team-6.webp"
              job="Project Manager"
              name="Annette Black"
            />
          </div>
        </div>
      </section> */}
      <Image src={'https://marmi-mainardi.s3.amazonaws.com/images/about.png'} width='1290px' height={1000} alt='company brand' loading='lazy' />
    </PageTemplate>
  )
}

export default About
