import { FC } from 'react';

import { HeroVideoComponent } from '@src/components';


interface IndexPageProps {}

const IndexPage: FC<IndexPageProps> = () => {

  return (
    <div data-testid="IndexPage" className={`Page Page_index`}>
      <HeroVideoComponent />
    </div>

  )
}


export default IndexPage;
