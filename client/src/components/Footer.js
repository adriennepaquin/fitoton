import styled from 'styled-components'

const FootStyle = styled.div`
    font-family: 'Staatliches', cursive;
    padding-top: 8px;
    font-size: 16px;
    height: 40px;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    position: sticky;
    left: 0;
    bottom: 0;
`

function Footer() {
    return (
        <FootStyle>
            Created by Adrienne Paquin -- <a href="https://github.com/adriennepaquin" target="_blank">GitHub</a>
        </FootStyle>
    )
}

export default Footer