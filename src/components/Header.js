import { useState } from 'react';
import codeforcesLogo from "../assets/images/codeforces_logo.png";
import "../styles/Header.css";

function Header({ username, rank, color }) {
    const [isUsernameHovered, setIsUsernameHovered] = useState(false);
    const [isRankHovered, setIsRankHovered] = useState(false);
    const profileUrl = `https://codeforces.com/profile/${username}`;

    const style = {
        color: color
    };
    const hoverStyle = {
        backgroundColor: color
    };

    const usernameStyle = isUsernameHovered ? hoverStyle : style;
    const rankStyle = isRankHovered ? hoverStyle : style;

    function onUsernameMouseEnter() {
        setIsUsernameHovered(true);
    }

    function onUsernameMouseLeave() {
        setIsUsernameHovered(false);
    }

    function onRankMouseEnter() {
        setIsRankHovered(true);
    }

    function onRankMouseLeave() {
        setIsRankHovered(false);
    }


    return (
        <header id="header">
            <p className="label">
                username:{" "}
                <a className="data" style={usernameStyle} href={profileUrl} rel="noreferrer" target="_blank" onMouseEnter={onUsernameMouseEnter} onMouseLeave={onUsernameMouseLeave}>
                    {username}
                </a>
            </p>
            <img id="logo" src={codeforcesLogo} alt="logo"/>
            <p className="label">
                rank:{" "}
                <span className="data" style={rankStyle} onMouseEnter={onRankMouseEnter} onMouseLeave={onRankMouseLeave}>
                    {rank}
                </span>
            </p>
        </header>
    );
}

export default Header;