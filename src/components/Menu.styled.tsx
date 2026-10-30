import styled from 'styled-components';

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 5px;
    box-sizing: border-box;
`;

export const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const LogoImage = styled.img`
    width: 60px;
    height: auto;
    align-self: center;
`;

export const NavigationList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const NavItem = styled.li`
    display: flex;
    flex-direction: column;
    gap: 10px;

    a {
        color: #b8c1cb;
        text-decoration: none;
        font-size: 15px;
        font-weight: 500;

        &:hover {
            color: #ffffff;
        }

        &.active {
            color: #ffffff;
            font-weight: 700;
        }
    }
`;

export const Separator = styled.hr`
    width: 100%;
    height: 1px;
    background-color: white;
    margin-bottom: 30px
`
