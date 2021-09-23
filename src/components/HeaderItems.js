import styled from "styled-components";

const HeaderItems = (props) => {
    return (
        <NavItems>
            <a href={props.href}>
                <span>
                    {props.title}
                </span>
            </a>
        </NavItems>
    );
};

const NavItems = styled.div`
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    &:hover {
      cursor: pointer;
    }
    
    span {
      color: white;
      font-size: 16px;
      letter-spacing: 1.4px;
      line-height: 1.08px;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      &:before {
        background-color: #ffee00;
        border-radius: 0 0 4px 4px;
        bottom: -6.5px;
        content: '';
        opacity: 0;
        height: 2px;
        left: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
        visibility: hidden;
        width: auto;
      }
    }

    @media only screen and (min-width: 968px) {
      &:hover {
        transform: scale(1.1);
        color: #ffee00;

        span:before{
          transform: scale(1);
          visibility: visible;
          opacity: 1 !important;
          cursor: pointer;
        }
      }
    }
  }
`;

export default HeaderItems;
