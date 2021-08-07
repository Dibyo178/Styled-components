import styled from "styled-components";
import Title from '../Title/Title';


export  const StyleTitle = styled(Title)`  // higher order func use  
     color: ${(props)=>props.color};
`;