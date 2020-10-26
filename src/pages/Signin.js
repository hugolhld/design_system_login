import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import ComonText from '../components/Text/ComonText'
import Title from '../components/Text/Title'
import Subtitle from '../components/Text/Subtitle'
import InputTxt from '../components/Misc/InputTxt'
import Button from '../components/Text/Button'
import Logo from '../components/Misc/Logo'

function Signin() {
    return (
        <Wrapper>
            <Modal>
                <Logo></Logo>
                <Title black>Connection</Title>
                <Title medium>Connection</Title>
                <Title subtitle>Connection</Title>
                <Subtitle>Connexion</Subtitle>
                <ComonText>Veuillez entrez vos informations</ComonText>
                <InputTxt type="text" placeholder="Adresse e-mail"></InputTxt>
                <InputTxt type="password" placeholder="Adresse e-mail"></InputTxt>
                <Button href="#test" primary>Mot de passe oublié ?</Button>
                <Button href="#test">Se connecter</Button>
            </Modal>
        </Wrapper>
    )
}

export default Signin
