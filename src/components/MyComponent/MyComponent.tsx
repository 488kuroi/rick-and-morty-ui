import React, { FC } from 'react';


interface MyComponentProps {}

const MyComponent: FC<MyComponentProps> = () => (
  <div data-testid="MyComponent">
    MyComponent Component
  </div>
);

export default MyComponent;
