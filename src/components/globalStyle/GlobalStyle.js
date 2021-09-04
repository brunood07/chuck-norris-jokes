import { createGlobalStyle } from 'styled-components';
import background from '../../images/background.jpg';

export const GlobalStyle = createGlobalStyle`
    body {
        background: url(${background}) center no-repeat;
        background-size: cover;
        color: #332c36;
        padding: 0;
        margin: 0;
    }
`;