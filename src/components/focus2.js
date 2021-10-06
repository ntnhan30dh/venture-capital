import React from "react"

const Focus2 = () => {
  const card ='w-1/4 bg-space border-t-4 border-green p-8 mx-4'
  const title ='text-white text-2xl font-bold py-2'
  const p ="text-white text-lg mb-8"
  const item ="bg-white py-1 p-2 mr-2"
  return (
   <section id="focus" className="px-1/20">
   <h1 className="font-bold text-5xl p-10  text-center">Our Focus</h1>
   <div className="flex w-full">
   
     <article className={card}>
       <h2 className={title}>On demand</h2>
       <p className={p}>Enabling on-Demand Economy</p>
      <div className="items">
        <span className={item}>
        Quick Commerce
        </span>
        <br />  <br />
        <span className={item}>
        Online to offline
        </span>
        <span className={item}>
        Groceries
        </span>  <br />  <br />
        <span className={item}>
        Catering
        </span>
        <span className={item}>
        Mobility
        </span>
      </div>
     </article>

     <article className={card}>
       <h2 className={title}>Food & Kitchen 2.0</h2>
       <p className={p}>Shaping how we consume food</p>
      <div className="items">
        <span className={item}>
        Food technology
        </span>
        
        <span className={item}>
        Agri-tech
        </span>
        <br />  <br />
        <span className={item}>
        Alternative protein
        </span>  <br />  <br />
        <span className={item}>
        Food Service
        </span>
        <span className={item}>
        Procurement
        </span>
      </div>
     </article>

     <article className={card}>
       <h2 className={title}>Fintech</h2>
       <p className={p}>At the front of Fintech revolution</p>
      <div className="items">
        <span className={item}>
        Financial inclusion        </span>
        
        <span className={item}>
        Loyalty
        </span>
        <br />  <br />
        <span className={item}>
        Digital payments
        </span>  
        <span className={item}>
        Banking
        </span>
        <br />  <br />
        <span className={item}>
        Next generation 
        </span>
        <span className={item}>
        Lending 
        </span>
      </div>
     </article>

     <article className={card}>
       <h2 className={title}>Supply chain</h2>
       <p className={p}>Deep technology capabilities</p>
      <div className="items">
        <span className={item}>
        Artificial intelligence        </span>
        <br />  <br />
        <span className={item}>
        Blockchain        </span>
        
        <span className={item}>
        Robotics        </span>  <br />  <br />
        <span className={item}>
        Sensors & IoT
        </span>
        <span className={item}>
        Logistics
        </span>
      </div>
     </article>
      </div>
   </section>
  )
}

export default Focus2
