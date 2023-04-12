import React from 'react'
import "./Home.scss"
import {cards} from "../../data"
import Featured from '../../components/featured/Featured'
import TrustedBy from '../../components/trustedBy/TrustedBy'

const Home = () => {
  return (
    <div className='home'> 
      <Featured/>
      <TrustedBy/>
      <Slide>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home