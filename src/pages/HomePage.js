import React from 'react'
import faker from 'faker'


const HomePage = () => (
  <>
    <h1>Hello, welcome to my blog!</h1>
    <p>{faker.lorem.paragraph()}</p>
    <p>{faker.lorem.paragraph()}</p>
    <p>{faker.lorem.paragraph()}</p>
    <p>{faker.lorem.paragraph()}</p>
  </>
)

export default HomePage;