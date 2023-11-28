import styled from "styled-components";

export const ButtonContainer = styled.button`

   background: #FAFAFA;
   border: 1px solid #FAFAFA;
   border-radius: 20px;

   height: 62px;
   width: 80%;

   margin: 20px;

   transition: transform .8s;

   &:hover {
      background: #FAFAFA40;
      cursor: pointer;
      color: #FAFAFA;
      font-weight: bold;
      transform: scale(1.1);
   }
`