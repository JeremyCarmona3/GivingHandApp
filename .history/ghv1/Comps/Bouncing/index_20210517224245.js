import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { Component } from 'react';

const Bounce = styled.div`animation: 2s ${keyframes`${bounce}`} infinite`;

export default class ReactAnimations extends Component {
    render() {
        return (
            <Bounce><h1>Hello</h1></Bounce>
        )
    }
}