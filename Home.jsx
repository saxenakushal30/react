import React, { useState, useEffect} from 'react'

const Home = () => {

  const [a,setA] = useState(0);

  useEffect(() => {
    console.log("showing effect")
  }, [a])
  return (
    <div>
      <button onClick={() => setA(a + 1)}>Add</button>
      <p>{a}</p>
      <button onClick={() => setA(a - 1)}>Minus</button>
    </div>
  )
}
export default Home