import styled from "styled-components";

export const Container = styled.div`
   width: 100%;
   height: 100vh;

   margin-top: 20px;

   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;

   section {
      display: flex;
      align-items: center;
   }

   section h1 {
      margin-left: 10px;
      font-size: 32px;
   }

   p.guide {
      margin-top: 40px;
      margin-bottom: 20px;
      text-align: center;
   }
`;