import React from 'react'
import faker from 'faker'


const AboutPage = () => (
  <>
    <h1>About me</h1>
    <p>{faker.lorem.paragraph()}</p>
    <p>{faker.lorem.paragraph()}</p>
    <p>{faker.lorem.paragraph()}</p>
    <p>{faker.lorem.paragraph()}</p>
  </>
)

export default AboutPage;