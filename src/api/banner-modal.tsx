import {ButtonBannerModal, ButtonBannerModalCancel,ContainerButton, FormContainer, FormFlexContainer, FormFlexItem, ModalContainer, ModalContent} from './banner-modal.styles';
import {GameController} from 'phosphor-react';


export const BannerModal = ({onClick, onCLose}) => {
  return (

    <ModalContainer>
      <ModalContent>
        <strong>Publique um anúncio</strong>

          <FormContainer>
            <label htmlFor="">Choose a game</label>
            <select name="" id="">
              <option value="1 ">Game 1</option>
              <option value="1 ">Game 2</option>
              <option value="1 ">Game 3</option>
              <option value="1 ">Game 4</option>
            </select>


            <label
              htmlFor="nickname "
            >
              Your Name (or nickname)
            </label>
            <input
              placeholder="Como te chamam dentro do game?"
              type="text" id='nickname'
            />

            <FormFlexContainer>
              <FormFlexItem>
                <label htmlFor="howLongPlaying">Joga há quantos anos?</label>
                <input
                  type="text" id='howLongPlaying'
                  placeholder="Tudo bem ser ZERO"
                />
              </FormFlexItem>

              <FormFlexItem>
                <label htmlFor="discord">Qual seu Discord?</label>
                <input
                  type="text" id='discord'
                  placeholder="Usuario#0000"
                />
              </FormFlexItem>
            </FormFlexContainer>

            <FormFlexContainer>
              <FormFlexItem>
                <label htmlFor="gameName ">Quando costuma jogar?</label>
                <input type="text" id='gameName'/>
              </FormFlexItem>

              <FormFlexItem>
                <label htmlFor="gameName ">Qual horário do dia?</label>
                <input type="text" id='gameName'/>
              </FormFlexItem>
            </FormFlexContainer>

            <ContainerButton>
              <ButtonBannerModalCancel
              onClick={onCLose}>
                Cancel</ButtonBannerModalCancel>
              <ButtonBannerModal
              onClick={onClick}>
                <GameController size={20} />
                Find Duo
              </ButtonBannerModal>
            </ContainerButton>

          </FormContainer>
      </ModalContent>
    </ModalContainer>
  )

}