import type { NextPage } from 'next'

import Button from '../components/Button'

const Index: NextPage = () => {
  return <Button onClick={() => console.log('Clicked')}>I'm a children</Button>
}

export default Index
