import styled from 'styled-components'

export const Recipelistcontainer = styled.div`
display: flex;
gap: 20px;
flex-direction: row;
justify-content: space-evenly;
padding: 30px;
flex-wrap: wrap;
`;

export const Recipecard = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #aaa;

`;

export const Coverimage = styled.img`
height: 220px;
object-fit: cover;
`;

export const Recipename = styled.span`
font-size: 18px;
font-weight: bold;

margin: 10px 0;
`;
export const Ingredients = styled.span`
font-size: 18px;
border: solid 1px #1589FF;
margin: 10px 0;
color: #1589FF;
padding: 10px 15px;
cursor: pointer;
border-radius: 4px;
text-align: center;
margin-bottom: 10px;
`;
export const Seemore = styled(Ingredients)`
color: #FF6347;
border: solid 1px #FF6347;
`;
