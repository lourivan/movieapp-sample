import styled from 'styled-components';
import { Dimensions } from 'react-native'
export const { width, height } = Dimensions.get('window')

const Container = styled.View`
    backgroundColor: #000;
    height: 100%;
    elevation: 1;
    width: 100%;
    justifyContent: center;
    alignContent: center;
`;

const BannerChild = styled.View`
    height: 100%;
    width: ${width}px;
    justifyContent: center;
`;

const BannerImage = styled.Image`
    width: ${width}px;
    flex: 1;
    height: ${height - 100}px;
    justifyContent: center;
    alignContent: center;
`;

export { Container, BannerChild, BannerImage }