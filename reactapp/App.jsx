import React from 'react';

class App extends React.Component {
   render() {
    

      return (
      
         <div>
         	 <Header/>
         	 <Content/>
         </div>      
          
      );
   }
}
class Header extends React.Component{
	render() {
	return(
	<div>
		<h1>My Header</h1>
	</div>)
	}
}
class Content extends React.Component{
	render(){
	return(
	<div>
		<h2>My Content</h2>
		<p>This is real content!!</p>
	</div>
	)
	}
}
export default App;