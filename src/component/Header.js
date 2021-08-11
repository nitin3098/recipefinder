
import styled from 'styled-components'


export const Header = styled.div`
color: white;
background-color: #2C3539;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shadow: 0 3px 6px 0 grey;
`;

export const AppNamecomponent = styled.div`
align-items: center;
display: flex;
`;

export const Appicon = styled.img`
height: 44px;
width: 44px;
margin: 15px;
`;

export const Searchicon = styled.img`
height: 34px;
width: 34px;
`;

export const Searchcomponent = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 10px;
border-radius: 6px;
width: 40%;
`;

export const Searchinput = styled.input`
border: none;
outline: none;
margin-left: 15px;
font-size: 16px;
font-weight: bold;
`;
