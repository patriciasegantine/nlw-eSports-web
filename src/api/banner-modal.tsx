import {
  ButtonBannerModal,
  ButtonBannerModalCancel,
  ContainerButton,
  FormContainer,
  FormFlexContainer,
  FormFlexItem, FormFlexItemOther, InputForm, LabelForm,
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalTitle, SelectForm, WeekDaysContainer
} from './banner-modal.styles';
import {GameController} from 'phosphor-react';
import * as Dialog from '@radix-ui/react-dialog';


export const BannerModal = () => {

  return (
    <ModalContainer>

      <ModalContent>
        <ModalTitle>Publique um anúncio</ModalTitle>

        <ModalDescription>

          <FormContainer>
            <label htmlFor="gameName">Choose a game</label>
            <SelectForm name="gameName" id="gameName">
              <option value="1 ">Game 1</option>
              <option value="1 ">Game 2</option>
              <option value="1 ">Game 3</option>
              <option value="1 ">Game 4</option>
            </SelectForm>


            <LabelForm
              htmlFor="nickname"
            >
              Your Name (or nickname)
            </LabelForm>
            <InputForm
              placeholder="How you name in the game?"
              type="text" id='nickname' name="nickname"
            />

            <FormFlexContainer>
              <FormFlexItem>
                <LabelForm htmlFor="howLongPlaying">Joga há quantos anos?
                </LabelForm>
                <InputForm
                  type="number" id='howLongPlaying' name="howLongPlaying"
                  placeholder="Tudo bem ser ZERO"
                />
              </FormFlexItem>

              <FormFlexItem>
                <LabelForm htmlFor="discord">Qual seu Discord?</LabelForm>
                <InputForm
                  type="text" id='discord' name="discord"
                  placeholder="Usuario#0000"
                />
              </FormFlexItem>
            </FormFlexContainer>

            <FormFlexContainer>
              <FormFlexItem>
                <LabelForm htmlFor="gameName ">Quando costuma jogar?</LabelForm>
                <WeekDaysContainer>
                  <button>S</button>
                  <button>M</button>
                  <button>T</button>
                  <button>W</button>
                  <button>T</button>
                  <button>F</button>
                  <button>S</button>
                </WeekDaysContainer>
              </FormFlexItem>

              <FormFlexItemOther>
                <LabelForm htmlFor="hourStart ">Qual horário do dia?</LabelForm>

                <FormFlexContainer>
                <InputForm type="time" id='hourStart' placeholder='for'/>
                <InputForm type="time" id='hourEnd' placeholder='to'/>
                </FormFlexContainer>
              </FormFlexItemOther>
            </FormFlexContainer>

            <div>
              <InputForm type="checkbox"/>
              <label htmlFor=" "> Costumo me conectar ao chat de voz</label>
            </div>

            <ContainerButton>
              <ButtonBannerModalCancel>
                Cancel
              </ButtonBannerModalCancel>

              <ButtonBannerModal type='submit'>
                <GameController size={20} />
                Find Duo
              </ButtonBannerModal>
            </ContainerButton>

          </FormContainer>
        </ModalDescription>

      </ModalContent>
    </ModalContainer>
  )

}