import {useState} from 'react'


const Home = () => {

  const [dimensions, setDimensions] = useState(data)
  const onAddToFavoriteHandler = (id) => {
   setDimensions ((prev)=> {
    return prev.map((dimension) =>{
      if (dimension.id ===id) {
        return {
        ...dimension, isFavorite: true,
        }
      }
      return dimension;
    } )
  }
 )
}
  return (
    <div>
     {
      dimensions.map((datum) => {
       return <div key={datum.id} style={{marginTop: "20px"}}> 
        <div>{datum.name}</div>
        <div>{datum.description}</div>
        {datum.isFavorite &&<span>Favorite</span>}
        <button onClick ={() => onAddToFavoriteHandler(datum.id)}>Add to favourite</button>
       </div>
      })
     }
    </div>
  )
}
    const data = [
      {
        name: "Earth One",
        description: "Elon Musk is the richest man in this dimension",
        id:1,
        isFavorite: "false"
      },
      {
        name: "Earth Two",
        description: "Micheal Musk is the richest woman in this dimension",
        id:2,
        isFavorite: "false"
      },
      {
        name: "Earth Three",
        description: "Sherifat Aduku is the richest woman in this dimension",
        id:3,
        isFavorite: "false"
      },
       {
        name: "Earth Four",
        description: "Mercy Obobo is the richest woman in this dimension",
        id:4,
        isFavorite: "false"
      },
    ]
  
export default Home;
