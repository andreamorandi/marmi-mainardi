import ButtonLink from 'components/atoms/Button/ButtonLink'
import PageSentence from 'components/molecules/PageSentence'
import PageTemplate from 'components/templates/PageTemplate'
import React from 'react'

const PageNotFound = () => {
  return (
    <>
      <PageTemplate title='Pagina non trovata'>
        <section className="grid grid-cols-1 place-items-center gap-6" data-aos="zoom-in-up">
          <div className="w-full sm:w-10/12 md:w-8/12 grid grid-cols-1 place-items-center gap-12 lg:w-8/12">
            <div className="text-center">
              <PageSentence
                badge=""
                badgeStyle="error"
                title="La pagina che stai cercando non è su questo sito web"
                description="Il sistema non riesce a trovare la pagina che stai cercando, potresti avere il percorso errato o la pagina può essere stata eliminata."
              />
            </div>
            <div className="w-fit">
              <ButtonLink
                value="Torna alla Home"
                href="/"
                color="white"
                style="light"
              />
            </div>
          </div>
        </section>
      </PageTemplate>
    </>
  )
}

export default PageNotFound
