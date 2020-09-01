import React from "react"
import Nav from "./Nav"
import Text from "./Text"
import PicCard from "./PicCard"

function App() {
    return (
      <div>
      <Nav />
      <Text />
      <PicCard imgUrl="./img/venom-1.jpg"/>
      <PicCard imgUrl="./img/hulk-1.jpg"/>
      <PicCard imgUrl="./img/venom-2.jpg"/>
      </div>
    )
}

export default App