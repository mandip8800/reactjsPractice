import React from 'react';

class App extends React.Component {
   render() {
      return (
         <div>
            Hello World!!! How are you?? How can I help you?<br />
            This is so cool.
            <h1>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!</p>
            <p>This is another content!!</p>
            <p data-myattribute="somevalue">This is my attribute!!</p>
         </div>
      );
   }
}
export default App;