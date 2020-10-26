import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import ComonText from '../components/Text/ComonText'
import Title from '../components/Text/Title'
import Button from '../components/Text/Button'
import Logo from '../components/Misc/Logo'

function Signin() {
    return (
        <Wrapper>
            <Modal>
                <Logo></Logo>
                <Title>Connexion</Title>
                <ComonText>Veuillez entrez vos informations</ComonText>
                <Button href="#test" primary>Mot de passe oublié ?</Button>
                
                <Button href="#test">Se connecter</Button>
            </Modal>
        </Wrapper>
    )
}

export default Signin
