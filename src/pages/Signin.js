import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import Title from '../components/Text/Title'
import Input from '../components/Misc/Input'
import Button from '../components/Text/Button'
import Link from '../components/Text/Link'
import Logo from '../components/Misc/Logo'
import EyeIcon from '../components/Misc/EyeIcon'

function SignIn() {
    return (
        <Wrapper>
            <Logo></Logo>
            <Modal large>
                <Title large>Connexion</Title>
                <Input type="text" placeholder="Adresse e-mail" large></Input>
                <Input type="password" placeholder="Mot de passe" password></Input><EyeIcon></EyeIcon>
                <Link href="#test" large>Mot de passe oublié ?</Link>
                <Button href="#test">Se connecter</Button>
            </Modal>
            <Modal large>
                <Title large>Pas encore inscrit ?</Title>
                <Button href="#test">Créer un compte</Button>
            </Modal>
        </Wrapper>
    )
}

export default SignIn