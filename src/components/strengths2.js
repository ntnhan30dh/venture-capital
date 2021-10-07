import React from "react"

import global_founder_network from '../images/strengths__global_founder_network.png'

const Strengths2 = () => {

  const card = "w-1/4 text-center px-10"
  const icon = "w-14 mx-auto"
  const title = "text-3xl font-bold text-black leading-normal py-6	"
  const p = "text-lg"
  return (
    <section id="strengths" className="my-20">
      <h1 className="font-bold text-5xl p-10 text-center">Our Strengths</h1>
      <div className="cards mx-20">
        <div className="row flex justify-center mx-32 my-20">
          <article className={card}>
            <div className={icon}>
              <img src={global_founder_network } alt="" className="w-full" />
            </div>
            <h2 className={title}>Global founder <br /> network</h2>
            <p className={p}>Our network of experienced company founders is available to advise and assist portfolio companies on their journey.</p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={global_founder_network } alt="" className="w-full" />
            </div>
            <h2 className={title}>Global founder <br /> network</h2>
            <p className={p}>Our network of experienced company founders is available to advise and assist portfolio companies on their journey.</p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={global_founder_network } alt="" className="w-full" />
            </div>
            <h2 className={title}>Global founder <br /> network</h2>
            <p className={p}>Our network of experienced company founders is available to advise and assist portfolio companies on their journey.</p>
          </article>
        </div>

        <div className="row flex justify-around">
          <article className={card}>
            <div className={icon}>
              <img src={global_founder_network } alt="" className="w-full" />
            </div>
            <h2 className={title}>Global founder <br /> network</h2>
            <p className={p}>Our network of experienced company founders is available to advise and assist portfolio companies on their journey.</p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={global_founder_network } alt="" className="w-full" />
            </div>
            <h2 className={title}>Global founder <br /> network</h2>
            <p className={p}>Our network of experienced company founders is available to advise and assist portfolio companies on their journey.</p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={global_founder_network } alt="" className="w-full" />
            </div>
            <h2 className={title}>Global founder <br /> network</h2>
            <p className={p}>Our network of experienced company founders is available to advise and assist portfolio companies on their journey.</p>
          </article>

          <article className={card}>
            <div className={icon}>
              <img src={global_founder_network } alt="" className="w-full" />
            </div>
            <h2 className={title}>Global founder <br /> network</h2>
            <p className={p}>Our network of experienced company founders is available to advise and assist portfolio companies on their journey.</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Strengths2
