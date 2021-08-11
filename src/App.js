import React,{ useState } from 'react'
import styled from 'styled-components';
import Axios from 'axios'
import './App.css';
import { Header,AppNamecomponent,Appicon,Searchcomponent,Searchicon,Searchinput} from './component/Header'
import {
 Recipelistcontainer,Recipecard,Recipename,Ingredients,Seemore,Coverimage
} from './component/Recipecomponents'

import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';

const Container = styled.div`
display: flex;
flex-direction: column;
`;
const Placeholder = styled.img`
opacity: 50%;
width: 500px;
height:500px;
margin: 180px;
`;



const  Recipecomponent = (props) =>{
  const [show,setShow] = useState(false);
const { recipeObj }=props;

  return(
    <>
    <Dialog open = {show}>
    <DialogTitle id="alert-dialog-slide-title">INGREDIENTS</DialogTitle>
    <DialogContent>
      <table>
        <thead>
          <th>Ingredients</th>
          <th>weight</th>
        </thead>
        <tbody>
          {recipeObj.ingredients.map((ingredientsObj)=>
           <tr>
           <td>{ingredientsObj.text}</td>
           <td>{ingredientsObj.weight}</td>

         </tr>
         )}
         
        </tbody>
      </table>
    </DialogContent>
    <DialogActions>
      <Seemore onClick={()=>window.open(recipeObj.url)}>See Full Recipe</Seemore>
      <Ingredients onClick={()=>setShow(false)}>Close</Ingredients>
    </DialogActions>
      </Dialog>
    <Recipecard >
    <Coverimage  src={recipeObj.image} />
    <Recipename>{recipeObj.label}</Recipename>
    <Ingredients onClick={()=>setShow(true)}>ingredients</Ingredients>
    <Seemore onClick={()=>window.open(recipeObj.url)}>see more</Seemore>
    </Recipecard>
    </>
  );
}
 


function App() {

  const APP_ID = "d34f62ab";
  const APP_KEY = "1b721e3454c604ad3f9e7754161f680f";

  const [timeoutid,updateTimeoutid] = useState(); 

  const [recipelist,updateRecipelist] = useState([]);

  

    const fetchrecipe = async (searchString) => {
      const response = await Axios.get(
        `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
      );
      updateRecipelist(response.data.hits);
    };

  const onTextchange =(event) =>{
    clearTimeout(timeoutid);
    const timeout = setTimeout(()=>fetchrecipe(event.target.value),1000);
    updateTimeoutid(timeout);
  }


  return (
    <Container>
     <Header>
       <AppNamecomponent>
         <Appicon src="/pizza.svg" alt="img1"/>
         Recipe Finder</AppNamecomponent>
       <Searchcomponent>
         <Searchicon src="/search-icon.svg" alt=" img"/>
         <Searchinput placeholder="search recipe" onChange={ onTextchange }/>
       </Searchcomponent>
     </Header>
     <Recipelistcontainer>
      {recipelist.length ? recipelist.map((recipeObj)=>(
       
       <Recipecomponent recipeObj= {recipeObj.recipe}/>

      )) : <Placeholder src="/pizza.svg"/>}
       </Recipelistcontainer> 
    </Container>
  );
}

export default App;
