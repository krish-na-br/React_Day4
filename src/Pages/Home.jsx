import React from 'react'
import Figure from 'react-bootstrap/Figure';

export default function Home() {
  return (
    <div><u><h3 className='center'>PROJECT SAMPLE</h3></u>
    <Figure>
      <Figure.Image
        width={171}
        height={180}
        alt="../kasrgod.jpeg"
        src="./kasrgod.jpeg"
      />
      <Figure.Caption>
        Nature friendly
      </Figure.Caption>
    </Figure>
    </div>
  )
}
