import React from 'react';

class App extends React.Component {
   render() {
      var i = 1;

      var myStyle = {
         fontSize: 40,
         color: '#FF0000'
      };

      return (
      
         <div>
            Hello World!!! How are you?? How can I help you?<br />
            This is so cool.
            <h1 style = {myStyle}>Header</h1>
            <h2>Content</h2>
            <p>This is the content!!</p>
            <p>This is another content!!</p>
            <p data-myattribute="somevalue">This is my attribute!!</p>

            <h2>{2+2}</h2>

            <h2>{i==1?'True!' : 'False'}</h2>

            {//End of the line Comment...}
            {/*Multi line comment...*/}
         </div>
         
             
          
      );
   }
}
export default App;