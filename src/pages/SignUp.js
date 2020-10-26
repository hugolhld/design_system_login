import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import Title from '../components/Text/Title'
import Subtitle from '../components/Text/Subtitle'
import Input from '../components/Misc/Input'
import Button from '../components/Text/Button'
import Logo from '../components/Misc/Logo'

function SignUp() {
    return (
        <Wrapper>
            <Logo></Logo>
            <Modal large>
                <Title large>Créer un compte</Title>
                <Subtitle large first>Identifiants</Subtitle>
                <Input type="text" placeholder="Entrez votre prénom et nom" large></Input>
                <Input type="text" placeholder="Entrez votre adresse mail" large></Input>
                <Subtitle large>Date de naissance</Subtitle>
                <Input type="text" placeholder="Entrez votre adresse mail" large></Input>
                <Subtitle large>Mot de passe</Subtitle>
                <Input type="password" placeholder="Entrez votre mot de passe" large></Input>
                <Input type="password" placeholder="Confirmez votre mot de passe" large></Input>
                <Button href="#test" large>S'inscrire</Button>
            </Modal>
        </Wrapper>
    )
}

export default SignUp
