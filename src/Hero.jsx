import React from 'react'
import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
            dolorem, laudantium magnam ducimus quis, similique pariatur voluptas
            quia dolore assumenda aspernatur molestias sit. Soluta tempore
            dolorum rerum expedita facere quod, ad natus vero molestiae aut
            saepe repellat sunt eos et recusandae eligendi veritatis eius
            dolorem quo obcaecati? Illum, magni quibusdam?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="hero-img" className="img" />
        </div>
      </div>
    </section>
  )
}

export default Hero
