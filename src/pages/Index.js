import React from 'react'
import Wrapper from '../components/Layout/Wrapper'
import Modal from '../components/Layout/Modal'
import ComonText from '../components/Text/ComonText'
import Title from '../components/Text/Title'
import Subtitle from '../components/Text/Subtitle'
import InputTxt from '../components/Misc/InputTxt'
import InputPassword from '../components/Misc/InputPassword'
import Button from '../components/Text/Button'
import Link from '../components/Text/Link'
import Logo from '../components/Misc/Logo'

function Index() {
    return (
        <Wrapper>
            <Logo></Logo>
            <Modal large>
                <Title large>Connexion</Title>
                <InputTxt type="text" placeholder="Adresse e-mail" large></InputTxt>
                <InputPassword type="password" placeholder="Mot de passe" large></InputPassword>
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

export default Index

